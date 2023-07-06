import { useContext } from "react";
import { statesContext } from "../../../Bossing";

function PresetNameP(props) {
    //states
    const { editMode } = useContext(statesContext);

    //scripts
    let content;

    if (editMode) {content = <input type="text" value={props.presetName} onChange={props.handleNameChange}/>;} 
    else {content = props.presetName;}

    return (
        <>
            {content}
        </>
    )
}

export default PresetNameP;