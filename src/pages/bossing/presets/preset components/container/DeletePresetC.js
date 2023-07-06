import { useContext } from "react"; //hooks
import { statesContext } from "../../../Bossing"; //states
import DeletePresetP from "../presentational/DeletePresetP"; //components

function DeletePresetC(props) {
    //states
    const { presetNames, presets } = useContext(statesContext); //retrieve necessary states
    const { setPresetNames, setPresets } = useContext(statesContext); //retrieve necessary states

    //functions
    //Deletes an entry from the states when a user delets a character
    const deletePreset = (presetIndex) => {
        let newPresetNames = presetNames.filter((name, index) => index !== presetIndex);
        let newPresets = presets.filter((difficulties, index) => index !== presetIndex);

        setPresetNames(newPresetNames);
        setPresets(newPresets);
    }

    return (
        <DeletePresetP deletePreset={deletePreset} presetIndex={props.presetIndex}/>
    );
}

export default DeletePresetC;