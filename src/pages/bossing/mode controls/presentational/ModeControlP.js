import { useContext } from "react";
import { statesContext } from "../../Bossing";
import styles from "../../../../styles/buttons.module.css";

function ModeControlP(props) {
    const { editMode, presetMode } = useContext(statesContext);
    const style = styles.normal;

    return (
        <>
            {/* Edit button */}
            <button className={style} onClick={() => props.toggleEditing()}>
                {editMode ? "Disable Edit Mode" : "Enable Edit Mode"}
            </button>
            {/* Preset button */}
            <button className={style} onClick={() => props.togglePreset()}>
                {presetMode ? "Return to Character Sheet" : "Edit Presets"}
            </button>
        </>
    );
}

export default ModeControlP;