import { useContext } from "react";
import { statesContext } from "../../Bossing";
import styles from "../../../../styles/buttons.module.css";

//Presentation for enabling/disabling modes
function ModeControlP(props) {
    
    //fetch needed states from context
    const { presetMode } = useContext(statesContext);

    const style = styles.normal;

    return (
        <>
            {/* Preset button, text changes based on mode */}
            <button className={style} onClick={() => props.togglePreset()}>
                {presetMode ? "View Characters" : "View Presets"}
            </button>
        </>
    );
}

export default ModeControlP;