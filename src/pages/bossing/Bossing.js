import { useState, useEffect } from "react";
import BossingStats from "./stats/presentational/BossingStats";
import BossingTable from "./table/presentational/BossingTable";
import BossingCalculations from "./stats/container/BossingCalculations";
import { bosses, bossPrices } from "./BossingData";

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

  const [charNames, setCharNames] = usePersistingState("charNames", ["Schwarmeeze", "toetocher"]); //hook for char names

  const mainDiffs = [1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 1]; //dummy initial difficulties
  const [charDifficulties, setCharDifficulties] = usePersistingState("charDifficulties", [mainDiffs, mainDiffs]); //hook for char difficulties (boss difficulties that the char can run)

  const falses = [false, false, false, false, false, false, false, false, false, false, false, false,  //dummy initial clear status
    false, false, false, false, false, false, false, false, false, false, false]
  const [charProgress, setCharProgress] = usePersistingState("charProgress", [falses, falses]) //hook for char progress (boss clear status for the week)



  //This function will allow updating the clear status of the character's bosses.
  const handleProgress = (prevProgress, charIndex, bossIndex) => {
    let newProgress = [...prevProgress]
    newProgress[charIndex][bossIndex] = !prevProgress[charIndex][bossIndex];
    setCharProgress(newProgress);
  }

  return (
    <>
      <BossingCalculations charNames={charNames} charDifficulties={charDifficulties} charProgress={charProgress}/>
      <BossingTable bosses={bosses}
        charNames={charNames} setCharNames={setCharNames}
        charDifficulties={charDifficulties} setCharDifficulties={setCharDifficulties}
        charProgress={charProgress} handleProgress={handleProgress} />
    </>
  );
}

export default Bossing;