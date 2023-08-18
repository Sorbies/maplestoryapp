import { useState, useContext } from "react"; //hooks
import { statesContext } from "../../../Bossing"; //states
import AddPresetP from "../presentational/AddPresetP";
import { Preset } from "../../../../../data/bossing/Preset";

function AddPresetC(props) {
    const [newName, setNewName] = useState(""); //state hook for the new character
    const { presets, setPresets, numP, setNumP } = useContext(statesContext);

    //functions
    //Keeps track of input in the add new character field
    const handleNewName = (e) => {
        setNewName(e.target.value);
    }

    const addNewPreset = () => {
        let newPresets = presets.copy();
        console.log(newPresets);
        let newPreset = new Preset(newName, numP);
        newPresets.addPreset(newPreset);
        console.log(newPresets);

        setPresets(newPresets);
        setNumP((prev) => prev + 1);
        setNewName("");

        //console.log(presets);
    }

    return (
        <>
            <AddPresetP newName={newName} handleNewName={handleNewName} addNewPreset={addNewPreset}/>
        </>
    );
}

export default AddPresetC;