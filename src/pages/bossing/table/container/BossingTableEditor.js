import { useState } from "react";
import BossingTable from "../presentational/BossingTable";

function BossingTableEditor(props) {
    //hooks
    const [newChar, setNewChar] = useState("");

    //variables
    const initialDifficulties = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; //dummy initial difficulties
    const initialProgress = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

    //functions
    //This function will allow updating the clear status of the character's bosses.
    const handleProgress = (prevProgress, charIndex, bossIndex) => {
        let newProgress = [...prevProgress]
        newProgress[charIndex][bossIndex] = !prevProgress[charIndex][bossIndex];
        props.setCharProgress(newProgress);
    }

    const handleNewChar = (e) => {
        setNewChar(e.target.value);
    }

    const addNewChar = () => {
        props.setCharNames((prev) => [...prev, newChar]);
        props.setCharDifficulties((prev) => [...prev, initialDifficulties]);
        props.setCharProgress((prev) => [...prev, initialProgress]);

        setNewChar("");
    }

    return (
        <>
            <BossingTable
                charNames={props.charNames} setCharNames={props.setCharNames}
                charDifficulties={props.charDifficulties} setCharDifficulties={props.setCharDifficulties}
                charProgress={props.charProgress} handleProgress={handleProgress} 
                newChar={newChar} handleNewChar={handleNewChar} addNewChar={addNewChar}/>
        </>

    )
}

export default BossingTableEditor;