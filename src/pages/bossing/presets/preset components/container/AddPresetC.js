import { useState, useContext } from "react"; //hooks
import { statesContext } from "../../../Bossing"; //states
import AddPresetP from "../presentational/AddPresetP";
import { Preset } from "../../../../../data/bossing/Preset";

//controller for adding a new preset
function AddPresetC(props) {
    //state to store the new name being entered by user
    const [newName, setNewName] = useState("");

    //fetch needed states from context
    const { presets, setPresets, numP, setNumP } = useContext(statesContext);

    //function that constantly stores the user input in the state
    const handleNewName = (e) => {
        setNewName(e.target.value);
    }

    //function that adds the new preset to the local storage
    const addNewPreset = () => {

        //first deep copy before changing the state
        let newPresets = presets.copy();

        //add the new preset to the copy
        let newPreset = new Preset(newName, numP);
        newPresets.addPreset(newPreset);

        setPresets(newPresets);        //set state to new copy
        setNumP((prev) => prev + 1);   //update numP for key purposes
        setNewName("");                //reset the name
    }

    return (
        <>
            <AddPresetP newName={newName} handleNewName={handleNewName} addNewPreset={addNewPreset} />
        </>
    );
}

export default AddPresetC;