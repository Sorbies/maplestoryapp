import { useContext } from "react";
import { statesContext } from "../../../Bossing";
import PresetNameP from "../presentational/PresetNameP";

function PresetNameC(props) {
    //states
    const { presets, setPresets, characters, setCharacters } = useContext(statesContext);

    //functions
    const handleNameChange = (e) => {
        let newPresets = presets.copy();
        let presetIndex = presets.findIndexOfPreset(props.preset);
        newPresets.findPresetByIndex(presetIndex).setName(e.target.value);

        //replace instances of the old name with the new name
        let oldPresetName = props.preset.getName();
        let newCharacters = characters.copy();
        for (let character of newCharacters.getCharacters()) {
            if (character.getPreset() === oldPresetName) {
                character.setPreset(e.target.value);
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