import { useState, useEffect, createContext } from "react"; //hooks
import BossingCalculations from "./stats/container/BossingCalculations"; //components
import BossingTableC from "./table/container/BossingTableC";
import PresetTableC from "./presets/container/PresetTableC";
import ModeControlC from "./mode controls/container/ModeControlC";

//This context will allow all components to access these main states
export const statesContext = createContext();

function Bossing() {
  //localStorage.clear();

  //Global stuff
  //******************** */
  //hooks
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

  const defaultPreset = {
    name: "None",
    key: 0,
    content: {
      "Hilla": 0,
      "PB": 0,
      "Cygnus": 0,
      "PNo": 0,
      "Zakum": 0,
      "Pierre": 0,
      "Von Bon": 0,
      "C Queen": 0,
      "Vellum": 0,
      "Magnus": 0,
      "Papulatus": 0,
      "Akechi": 0,
      "Lotus": 0,
      "Damien": 0,
      "GA Slime": 0,
      "Lucid": 0,
      "Will": 0,
      "Gloom": 0,
      "V Hilla": 0,
      "Darknell": 0,
      "Seren": 0,
      "Kalos": 0,
      "Kaling": 0,
    }
  }

  //states
  const [characters, setCharacters] = usePersistingState("characters", []); //hook for char names
  const [presets, setPresets] = usePersistingState("presets", [defaultPreset]); //hook for char names
  const [numC, setNumC] = usePersistingState("numC", 10);
  const [numP, setNumP] = usePersistingState("numP", 10); 

  const [editMode, setEditMode] = useState(false);
  const [presetMode, setPresetMode] = useState(false);

  //context holder
  const statesData = {
    characters: characters,
    presets: presets,
    numC: numC,
    numP: numP,
    editMode: editMode,
    presetMode: presetMode,

    setCharacters: setCharacters,
    setPresets: setPresets,
    setNumC: setNumC,
    setNumP: setNumP,
    setEditMode: setEditMode,
    setPresetMode: setPresetMode,
  }
  //******************** */

  // //not global stuff
  const [content, setContent] = useState(null);
  useEffect(() => {
    let newContent = presetMode ? <PresetTableC /> : <BossingTableC />;
    setContent(newContent);
  }, [presetMode]);

  return (
    <statesContext.Provider value={statesData}>
      <BossingCalculations />
      <ModeControlC />
      {content}
    </statesContext.Provider>
  );
}

export default Bossing;