import { useContext } from "react";
import { statesContext } from "../../Bossing";

function ModeControlP(props) {
    const { editMode, presetMode } = useContext(statesContext);

    return (
        <>
            {/* Edit button */}
            <button onClick={props.toggleEditing}>
                {editMode ? "Disable Edit Mode" : "Enable Edit Mode"}
            </button>
            {/* Preset button */}
            <button onClick={props.togglePreset}>
                {presetMode ? "Return to Character Sheet" : "Edit Presets"}
            </button>
        </>
    );
}

export default ModeControlP;