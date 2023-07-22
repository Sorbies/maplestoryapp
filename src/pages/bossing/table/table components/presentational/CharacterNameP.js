import { useContext } from "react";
import { statesContext } from "../../../Bossing";

function CharacterNameP(props) {
    //states
    const { editMode } = useContext(statesContext);

    //scripts
    let content;

    if (editMode) {content = <input type="text" value={props.character["name"]} onChange={props.handleNameChange}/>;} 
    else {content = props.character["name"]}

    return (
        <>
            {content}
        </>
    )
}

export default CharacterNameP;