import { useState, useEffect, createContext } from "react"; //hooks
import BossingCalculations from "./stats/container/BossingCalculations"; //components
import BossingTableC from "./table/container/BossingTableC";
import PresetTableC from "./presets/container/PresetTableC";
import ModeControlC from "./mode controls/container/ModeControlC";

//This context will allow all components to access these main states
export const statesContext = createContext();

function Bossing() {
  //localStorage.clear();

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
    }, [someState]);
    return [someState, setSomeState]
  }

  //states
  const [charNames, setCharNames] = usePersistingState("charNames", []); //hook for char names
  const [charDifficulties, setCharDifficulties] = usePersistingState("charDifficulties", []); //hook for char difficulties (boss difficulties that the char can run)
  const [charProgress, setCharProgress] = usePersistingState("charProgress", []) //hook for char progress (boss clear status for the week)
  const [presets, setPresets] = usePersistingState("presets", []); //hook for storing presets
  const [editMode, setEditMode] = useState(false);
  const [presetMode, setPresetMode] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(false); //doesn't store info. dummy state for triggering refreshes

  //context holder
  const statesData = {
    charNames: charNames,
    charDifficulties: charDifficulties,
    charProgress: charProgress,
    presets: presets,
    editMode: editMode,
    presetMode: presetMode,

    setCharNames: setCharNames,
    setCharDifficulties: setCharDifficulties,
    setCharProgress: setCharProgress,
    setPresets: setPresets,
    setEditMode: setEditMode,
    setPresetMode: setPresetMode,

    setForceUpdate: setForceUpdate
  }

  return (
    <statesContext.Provider value={statesData}>
      <BossingCalculations/>
      <ModeControlC/>
      {presetMode ? <PresetTableC/> : <BossingTableC/>}
    </statesContext.Provider>
  );
}

export default Bossing;