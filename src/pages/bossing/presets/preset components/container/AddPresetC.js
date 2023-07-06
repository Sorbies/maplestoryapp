import { useState, useContext } from "react"; //hooks
import { statesContext } from "../../../Bossing"; //states
import AddPresetP from "../presentational/AddPresetP";

function AddPresetC(props) {
    const [newPreset, setNewPreset] = useState(""); //state hook for the new character
    const { setPresets, setPresetNames } = useContext(statesContext);

    const initialPreset = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    //functions
    //Keeps track of input in the add new character field
    const handleNewPreset = (e) => {
        setNewPreset(e.target.value);
    }

    const addNewPreset = () => {
        setPresetNames((prev) => [...prev, newPreset]);
        setPresets((prev) => [...prev, initialPreset]);

        setNewPreset("");
    }

    return (
        <>
            <AddPresetP newPreset={newPreset} handleNewPreset={handleNewPreset} addNewPreset={addNewPreset}/>
        </>
    );
}

export default AddPresetC;