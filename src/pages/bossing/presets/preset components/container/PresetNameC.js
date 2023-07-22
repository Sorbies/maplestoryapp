import { useContext } from "react";
import { statesContext } from "../../../Bossing";
import PresetNameP from "../presentational/PresetNameP";

function PresetNameC(props) {
    //states
    const { presets, setPresets, characters, setCharacters } = useContext(statesContext);

    //functions
    const handleNameChange = (e) => {
        let newPresets = structuredClone(presets);
        let presetIndex = presets.indexOf(props.preset);
        newPresets[presetIndex]["name"] = e.target.value;

        //replace instances of the old name with the new name
        let oldPreset = props.preset["name"];
        let newCharacters = structuredClone(characters);
        for (let character of newCharacters) {
            if (character["preset"] === oldPreset) {
                character["preset"] = e.target.value;
            }
        }

        setPresets(newPresets);
        setCharacters(newCharacters);

    }

    return (
        <PresetNameP preset={props.preset} handleNameChange={handleNameChange}/>
    )
}

export default PresetNameC;