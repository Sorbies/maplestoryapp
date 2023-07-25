import { useState, useContext } from "react";
import { statesContext } from "../../../Bossing"; //states
import AddCharP from "../presentational/AddCharP";
import { bossData } from "../../../../../constants/BossData";

function AddCharC(props) {
    //hooks
    const [newName, setNewName] = useState(""); //state hook for the new character
    const { characters, setCharacters, numC, setNumC } = useContext(statesContext);

    //functions
    //Keeps track of input in the add new character field
    const handleNewName = (e) => {
        setNewName(e.target.value);
    }

    //Adds a new entry into all the states when user adds a new character
    const addNewChar = () => {
        let newCharacters = structuredClone(characters);

        let newProgress = {};
        for (const boss in bossData) { newProgress[boss] = false; }

        let newCharacter = {
            name: newName,
            key: numC,
            preset: "None",
            progress: newProgress
        };

        newCharacters.push(newCharacter);
        setCharacters(newCharacters);
        setNumC((prev) => prev + 1);
        setNewName("");
    }

    return (
        <AddCharP newName={newName} handleNewName={handleNewName} addNewChar={addNewChar}/>
    );
}

export default AddCharC;