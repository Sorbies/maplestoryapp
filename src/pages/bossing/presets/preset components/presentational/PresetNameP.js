import { useState } from "react";
import styles from "../../../../../styles/buttons.module.css";

function PresetNameP(props) {
    //states
    const [editMode, setEditMode] = useState(false);
    const style = styles.normal;

    //scripts
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