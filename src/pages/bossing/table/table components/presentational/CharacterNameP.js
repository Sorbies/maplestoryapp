import { useContext } from "react";
import { statesContext } from "../../../Bossing";

function CharacterNameP(props) {
    //states
    const { editMode } = useContext(statesContext);

    //scripts
    let content;

    if (editMode) {content = <input type="text" value={props.charName} onChange={() => props.handleNameChange}/>;} 
    else {content = props.charName;}

    return (
        <>
            {content}
        </>
    )
}

export default CharacterNameP;