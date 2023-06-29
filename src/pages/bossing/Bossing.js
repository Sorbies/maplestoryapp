import { useState, useEffect, createContext } from "react"; //hooks
import BossingCalculations from "./stats/container/BossingCalculations"; //components
import BossingTableC from "./table/container/BossingTableC";

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
    }, [someState]);
    return [someState, setSomeState]
  }

  const [charNames, setCharNames] = usePersistingState("charNames", []); //hook for char names
  const [charDifficulties, setCharDifficulties] = usePersistingState("charDifficulties", []); //hook for char difficulties (boss difficulties that the char can run)
  const [charProgress, setCharProgress] = usePersistingState("charProgress", []) //hook for char progress (boss clear status for the week)
  const [editMode, setEditMode] = useState(false);

  const statesData = {
    charNames: charNames,
    charDifficulties: charDifficulties,
    charProgress: charProgress,
    editMode: editMode,
    setCharNames: setCharNames,
    setCharDifficulties: setCharDifficulties,
    setCharProgress: setCharProgress,
    setEditMode: setEditMode
  }

  return (
    <statesContext.Provider value={statesData}>
      <BossingCalculations/>
      <BossingTableC/>
    </statesContext.Provider>
  );
}

export default Bossing;