import { useState, useContext } from "react"; //hooks
import { statesContext } from "../../../Bossing"; //states
import AddPresetP from "../presentational/AddPresetP";
import { bossData } from "../../../../../constants/BossData";

function AddPresetC(props) {
    const [newName, setNewName] = useState(""); //state hook for the new character
    const { presets, setPresets, numP, setNumP } = useContext(statesContext);

    //functions
    //Keeps track of input in the add new character field
    const handleNewName = (e) => {
        setNewName(e.target.value);
    }

    const addNewPreset = () => {
        let newPresets = structuredClone(presets);

        let newContent = {}
        for (const boss in bossData) { newContent[boss] = 0; }

        let newPreset = {
            name: newName,
            key: numP,
            content: newContent
        }

        newPresets.push(newPreset);
        setPresets(newPresets);
        setNumP((prev) => prev + 1);
        setNewName("");
    }

    return (
        <>
            <AddPresetP newName={newName} handleNewName={handleNewName} addNewPreset={addNewPreset}/>
        </>
    );
}

export default AddPresetC;