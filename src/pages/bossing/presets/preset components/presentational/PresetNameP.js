import { useContext } from "react";
import { statesContext } from "../../../Bossing";

function PresetNameP(props) {
    //states
    const { editMode } = useContext(statesContext);

    //scripts
    let content;

    if (editMode) {content = <input type="text" value={props.preset["name"]} onChange={props.handleNameChange}/>;} 
    else {content = props.preset["name"];}

    return (
        <>
            {content}
        </>
    )
}

export default PresetNameP;