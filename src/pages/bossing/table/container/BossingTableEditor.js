import { useState } from "react";
import BossingTable from "../presentational/BossingTable";

function BossingTableEditor(props) {
    //hooks
    const [newChar, setNewChar] = useState("");

    //variables
    const initialDifficulties = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; //dummy initial difficulties
    const initialProgress = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

    //functions

    //Keeps track of input in the add new character field
    const handleNewChar = (e) => {
        setNewChar(e.target.value);
    }

    //Adds a new entry into all the states when user adds a new character
    const addNewChar = () => {
        props.setCharNames((prev) => [...prev, newChar]);
        props.setCharDifficulties((prev) => [...prev, initialDifficulties]);
        props.setCharProgress((prev) => [...prev, initialProgress]);

        setNewChar("");
    }

    //Deletes an entry from the states when a user delets a character
    const deleteChar = (charIndex) => {
        let newCharNames = props.charNames.filter((name, index) => index !== charIndex);
        let newCharDifficulties = props.charDifficulties.filter((difficulties, index) => index !== charIndex);
        let newCharProgress = props.charProgress.filter((progress, index) => index !== charIndex);

        props.setCharNames(newCharNames);
        props.setCharDifficulties(newCharDifficulties);
        props.setCharProgress(newCharProgress);
    }

    //This function will allow updating the clear status of the character's bosses.
    const handleProgress = (charIndex, bossIndex) => {
        let newProgress = [...props.charProgress]
        newProgress[charIndex][bossIndex] = !props.charProgress[charIndex][bossIndex];
        props.setCharProgress(newProgress);
    }

    return (
        <>
            <BossingTable
                charNames={props.charNames} addNewChar={addNewChar} deleteChar={deleteChar}
                charDifficulties={props.charDifficulties} setCharDifficulties={props.setCharDifficulties}
                charProgress={props.charProgress} handleProgress={handleProgress} 
                newChar={newChar} handleNewChar={handleNewChar} />
        </>

    )
}

export default BossingTableEditor;