import { useState, useContext } from "react";
import { statesContext } from "../../../Bossing"; //states
import AddCharP from "../presentational/AddCharP";

function AddCharC(props) {
    //hooks
    const [newChar, setNewChar] = useState(""); //state hook for the new character
    const { setCharNames, setCharDifficulties, setCharPresets, setCharProgress } = useContext(statesContext);

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
        setCharNames((prev) => [...prev, newChar]);
        setCharDifficulties((prev) => [...prev, initialDifficulties]);
        setCharPresets((prev) => [...prev, -1]);
        setCharProgress((prev) => [...prev, initialProgress]);

        setNewChar("");
    }

    return (
        <AddCharP newChar={newChar} handleNewChar={handleNewChar} addNewChar={addNewChar}/>
    );
}

export default AddCharC;