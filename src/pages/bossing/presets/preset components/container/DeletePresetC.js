import { useContext } from "react"; //hooks
import { statesContext } from "../../../Bossing"; //states
import DeletePresetP from "../presentational/DeletePresetP"; //components

function DeletePresetC(props) {
    //states
    const { presets, setPresets, characters, setCharacters } = useContext(statesContext); //retrieve necessary states

    //functions
    //Deletes an entry from the states when a user delets a character
    const deletePreset = (preset) => {
        let newPresets = presets.filter((prst) => prst !== preset);

        //replace instances of the old preset with none preset
        let oldPreset = preset["name"];
        let newCharacters = structuredClone(characters);
        for (let character of newCharacters) {
            if (character["preset"] === oldPreset) {
                character["preset"] = "None";
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