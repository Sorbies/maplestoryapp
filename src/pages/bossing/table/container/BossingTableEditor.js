import { useState, useEffect } from "react";
import BossingTable from "../presentational/BossingTable";
import { bosses } from "../../BossingData";

function BossingTableEditor(props) {
    //hooks
    const [newChar, setNewChar] = useState(""); //state hook for the new character
    //effect hook that disables buttons for invalid boss difficulties when new characters are added
    useEffect(() => {
        for (let charIndex = 0; charIndex < props.charNames.length; charIndex++) {
            for (let bossIndex = 0; bossIndex < props.charDifficulties[charIndex].length; bossIndex++) {
                for (let difficulty = 1; difficulty <= 5; difficulty++) {
                    if (bosses[bossIndex][difficulty] === 0) {
                        let button = document.getElementById("c" + charIndex + "b" + bossIndex + "d" + difficulty);
                        button.setAttribute("disabled", true);
                    }
                }
            }
        }
    }, [props.charNames]);
    //effect hook that disables the clear status button for skipped bosses
    useEffect(() => {
        for (let charIndex = 0; charIndex < props.charNames.length; charIndex++) {
            for (let bossIndex = 0; bossIndex < props.charDifficulties[charIndex].length; bossIndex++) {
                let button = document.getElementById("c" + charIndex + "b" + bossIndex + "button");
                if (props.charDifficulties[charIndex][bossIndex] === 1) {
                    button.setAttribute("disabled", true);
                } else {
                    button.removeAttribute("disabled");
                }
            }
        }
    });

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

    //Updates the clear difficulty a character does for that boss
    const handleDifficulty = (difficulty, charIndex, bossIndex) => {
        let newCharDifficulties = [...props.charDifficulties];
        newCharDifficulties[charIndex][bossIndex] = difficulty;

        props.setCharDifficulties(newCharDifficulties);
        console.log(props.charDifficulties);
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
                charDifficulties={props.charDifficulties} handleDifficulty={handleDifficulty}
                charProgress={props.charProgress} handleProgress={handleProgress}
                newChar={newChar} handleNewChar={handleNewChar} />
        </>

    )
}

export default BossingTableEditor;