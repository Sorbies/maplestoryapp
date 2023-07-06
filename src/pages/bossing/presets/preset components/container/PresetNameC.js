import { useContext } from "react";
import { statesContext } from "../../../Bossing";
import PresetNameP from "../presentational/PresetNameP";

function PresetNameC(props) {
    //states
    const { presetNames, setPresetNames} = useContext(statesContext);

    //functions
    const handleNameChange = (e) => {
        let newPresetNames = [...presetNames];
        newPresetNames[props.presetIndex] = e.target.value;

        setPresetNames(newPresetNames);
    }

    return (
        <PresetNameP presetName={props.presetName} presetIndex={props.presetIndex} handleNameChange={handleNameChange}/>
    )
}

export default PresetNameC;