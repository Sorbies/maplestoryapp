import { useContext } from "react";
import { statesContext } from "../../../Bossing";
import ChangePresetP from "../presentational/ChangePresetP";

function ChangePresetC(props) {
    const { presetNames, charPresets, setCharPresets } = useContext(statesContext);

    function getPresetName(charIndex) {
        const charPresetIndex = charPresets[charIndex]; //gets the preset index for the preset that the char (chosen by charIndex) is using
        if (charPresetIndex >= 0) {
            return presetNames[charPresetIndex];
        }
        return "None";
    }

    function setCharPreset(charIndex, presetIndex) {
        let newCharPresets = [...charPresets];
        newCharPresets[charIndex] = presetIndex;
        setCharPresets(newCharPresets);
    }

    return (
        <>
            <ChangePresetP charIndex={props.charIndex} getPresetName={getPresetName} setCharPreset={setCharPreset}/>
        </>
    )
}

export default ChangePresetC;