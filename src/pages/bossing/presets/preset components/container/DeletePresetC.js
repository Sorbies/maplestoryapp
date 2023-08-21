import { useContext } from "react"; //hooks
import { statesContext } from "../../../Bossing"; //states
import DeletePresetP from "../presentational/DeletePresetP"; //components

//controller for deleting a preset from the storage
/* props: 
    preset: the specific preset that corresponds to this button. passed down to presentation
*/
function DeletePresetC(props) {
    
    //fetch needed states from context
    const { presets, setPresets, characters, setCharacters } = useContext(statesContext); //retrieve necessary states

    //Deletes an entry from the states when a user deletes a character
    const deletePreset = (preset) => {
        let newPresets = presets.copy();
        newPresets.deletePreset(preset);

        //after deleting the preset, some cleanup is required
        //all characters using that preset must be changed to another valid preset
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