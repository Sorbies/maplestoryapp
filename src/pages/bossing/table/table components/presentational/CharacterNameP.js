import { useState } from "react";
import styles from "../../../../../styles/buttons.module.css";

//presentation for displaying character name
/* props: 
    character: the character this component belongs to
*/
function CharacterNameP(props) {
    
    //state for deciding whether to display input or uneditable text
    const [editMode, setEditMode] = useState(false);

    //fetch needed css styles
    const style = styles.normal;

    //determine content based on editmode
    let content;
    if (editMode) { content = <input type="text" value={props.character.getName()} onChange={props.handleNameChange} />; }
    else { content = props.character.getName() }

    return (
        <>
            {content} <br />
            <button className={style} onClick={() => setEditMode((prev) => !prev)}>
                { editMode ? "Confirm" : "Edit" }
            </button>
        </>
    )
}

export default CharacterNameP;