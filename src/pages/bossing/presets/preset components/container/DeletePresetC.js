import { useContext } from "react"; //hooks
import { statesContext } from "../../../Bossing"; //states
import DeletePresetP from "../presentational/DeletePresetP"; //components

function DeletePresetC(props) {
    //states
    const { presets, setPresets, characters, setCharacters } = useContext(statesContext); //retrieve necessary states

    //functions
    //Deletes an entry from the states when a user delets a character
    const deletePreset = (preset) => {
        let newPresets = presets.copy();
        newPresets.deletePreset(preset);

        //replace instances of the old preset with none preset
        let oldPresetName = preset.getName();
        let newCharacters = characters.copy();
        for (let character of newCharacters.getCharacters()) {
            if (character.getPreset() === oldPresetName) {
                character.setPreset("None");
            }
        }

        setPresets(newPresets);
        setCharacters(newCharacters);
    }

    return (
        <DeletePresetP deletePreset={deletePreset} preset={props.preset}/>
    );
}

export default DeletePresetC;