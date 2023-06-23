import { useState, useEffect } from "react";
import BossingCalculations from "./stats/container/BossingCalculations";
import BossingTableEditor from "./table/container/BossingTableEditor";

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

  return (
    <>
      <BossingCalculations charNames={charNames} charDifficulties={charDifficulties} charProgress={charProgress}/>
      <BossingTableEditor
        charNames={charNames} setCharNames={setCharNames}
        charDifficulties={charDifficulties} setCharDifficulties={setCharDifficulties}
        charProgress={charProgress} setCharProgress={setCharProgress}/>
    </>
  );
}

export default Bossing;