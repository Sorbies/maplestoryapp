import { useContext } from "react";
import { statesContext } from "../../../Bossing";
import PresetNameP from "../presentational/PresetNameP";

//controller that displays the name of the preset
/* props: 
    preset: the specific preset that corresponds to this component. passed down to presentation.
*/
function PresetNameC(props) {
    
    //fetch needed states from context
    const { presets, setPresets, characters, setCharacters } = useContext(statesContext);

    //function that updates the name of the preset
    const handleNameChange = (e) => {

        //create a copy of the presets, then find the relevant preset in that new copy and modify it
        let newPresets = presets.copy();
        let presetIndex = presets.findIndexOfPreset(props.preset);
        newPresets.findPresetByIndex(presetIndex).setName(e.target.value);

        //cleanup required. need to update every character using that old preset to the new name
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