import { useState, useContext } from "react";
import { statesContext } from "../../../Bossing"; //states
import AddCharP from "../presentational/AddCharP";
import { CharacterBossing } from "../../../../../data/bossing/CharacterBossing";

//controller for adding a character
function AddCharC(props) {

    //fetch needed states from context
    const { characters, setCharacters, numC, setNumC } = useContext(statesContext);

    //new state to store the user's input for the new name
    const [newName, setNewName] = useState("");

    //function that keeps track of input in the add new character field
    const handleNewName = (e) => {
        setNewName(e.target.value);
    }

    //function that adds the new character into storage
    const addNewChar = () => {
        //deep copy state, add to it, then set new state
        let newCharacters = characters.copy();
        let newCharacter = new CharacterBossing(newName, numC);
        newCharacters.addCharacter(newCharacter);

        setCharacters(newCharacters);
        setNumC((prev) => prev + 1);
        setNewName("");
    }

    return (
        <AddCharP newName={newName} handleNewName={handleNewName} addNewChar={addNewChar}/>
    );
}

export default AddCharC;