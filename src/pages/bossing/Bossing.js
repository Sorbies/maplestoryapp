import { useState, useEffect, createContext } from "react"; //hooks
import BossingCalculations from "./stats/container/BossingCalculations"; //components
import BossingTableC from "./table/container/BossingTableC";
import PresetTableC from "./presets/container/PresetTableC";
import ModeControlC from "./mode controls/container/ModeControlC";
import { CharactersBossing } from "../../data/bossing/CharactersBossing";
import { Presets } from "../../data/bossing/Presets";
import { Preset } from "../../data/bossing/Preset";

//This context will allow all components to access these main states
export const statesContext = createContext();

function Bossing() {
  //localStorage.clear();

  //This custom hook sets up a state that can remember what it was through refreshes of the app.
  //stateName: must be the string of the intended stateName, for localStorage key making
  //defaultValue: the value to init state with should there be no pre-existing localStorage
  function usePersistingState(stateName, defaultValue) {
    //init state, using local storage values if possible
    const [someState, setSomeState] = useState(() => {
      // checking for stored value
      const saved = localStorage.getItem(stateName);
      const initialValue = JSON.parse(saved);
      return initialValue || defaultValue;
    });

    //update local storage for someState whenever a change in someState is detected
    useEffect(() => {
      localStorage.setItem(stateName, JSON.stringify(someState));
    }, [stateName, someState]);
    return [someState, setSomeState]
  }

  //This hook is similar to the one above, but is meant for states that store custom classes.
  //The object retrieved from local storage must be cast into that custom class again to regain its methods.
  //So, the custom .fromJSON() method must be invoked.
  function usePersistingStateforCustomClass(stateName, defaultValue, fromJSON) {
    //init state, using local storage values if possible
    const [someState, setSomeState] = useState(() => {
      // checking for stored value
      const saved = localStorage.getItem(stateName);
      const initialValue = JSON.parse(saved);
      return fromJSON(initialValue) || defaultValue;
    });

    //update local storage for someState whenever a change in someState is detected
    useEffect(() => {
      localStorage.setItem(stateName, JSON.stringify(someState));
    }, [stateName, someState]);
    return [someState, setSomeState]
  }

  //states that store the user's characters and presets
  const [characters, setCharacters] = usePersistingStateforCustomClass("characters", new CharactersBossing(), CharactersBossing.fromJSON); 
  const [presets, setPresets] = usePersistingStateforCustomClass("presets", new Presets(), Presets.fromJSON); 
  //states that store numbers for key making purposes
  const [numC, setNumC] = usePersistingState("numC", 10);
  const [numP, setNumP] = usePersistingState("numP", 10); 

  //state that determines what table to display
  const [presetMode, setPresetMode] = useState(false);

  //context holder
  const statesData = {
    characters: characters,
    presets: presets,
    numC: numC,
    numP: numP,
    presetMode: presetMode,

    setCharacters: setCharacters,
    setPresets: setPresets,
    setNumC: setNumC,
    setNumP: setNumP,
    setPresetMode: setPresetMode,
  }

  //first time setup
  if (presets.getLength() === 0) presets.addPreset(new Preset("None", 0));

  return (
    <statesContext.Provider value={statesData}>
      <BossingCalculations />
      <ModeControlC />
      {presetMode ? <PresetTableC /> : <BossingTableC />}
    </statesContext.Provider>
  );
}

export default Bossing;