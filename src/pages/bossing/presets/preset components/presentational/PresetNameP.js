import { useState } from "react";
import styles from "../../../../../styles/buttons.module.css";

//presentation for displaying preset name
/* props: 
    preset: this component's relevant preset
    handleNameChange: function that updates the name of the preset
*/
function PresetNameP(props) {
    
    //state that determines whether to display an input field for editing or noneditable text
    const [editMode, setEditMode] = useState(false);

    const style = styles.normal;

    //determine what the content of this component should be based on editmode
    let content;
    if (editMode) { content = <input type="text" value={props.preset.getName()} onChange={props.handleNameChange} />; }
    else { content = props.preset.getName(); }

    return (
        <>
            {content} <br />
            <button className={style} onClick={() => setEditMode((prev) => !prev)}>
                {editMode ? "Confirm" : "Edit"}
            </button>
        </>
    )
}

export default PresetNameP;