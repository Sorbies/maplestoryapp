import { useState, useEffect, useContext } from "react";
import { statesContext } from "../../../Bossing";
import styles from "../../../../../styles/buttons.module.css";

//presentation that changes the active preset of the character
/* props: 
    character: the character this component belongs to
    setCharPreset: function that changes the char's active preset
    toggleShowDrop: function that changes the state showDrop / dropdown visibility
*/
function ChangePresetP(props) {
    
    //fetch needed states from context
    const { presets } = useContext(statesContext);

    //fetch needed css styles
    const buttonStyle = styles.btn + " " + styles.normal;
    const dropStyle = styles.dropdown;
    const dropContStyle = styles["dropdown-content"];

    const headerid = "dropdown header " + props.character.getKey();
    const contentdiv = "dropdown content " + props.character.getKey();

    return (
        <>
            {/* The current preset. click to open/close the menu */}
            <button className={buttonStyle + " " + dropStyle} onClick={props.toggleShowDrop} key={headerid} id={headerid}>
                {props.character.getPreset() + " ˅"}
            </button> 
            <br />

            {/* the hidden menu containing all presets */}
            <div className={dropContStyle} key={contentdiv} id={contentdiv}>
                {presets.getPresets().map((preset) => {
                    const contentpreset = "dropdown content char preset " + props.character.getKey() + " " + preset.getKey();
                    return (
                        <>
                            <button className={buttonStyle} key={contentpreset} id={contentpreset} onClick={() => props.setCharPreset(preset.getName())} > 
                                {preset["name"]}
                            </button> <br />
                        </>
                    )
                })}
            </div>
        </>
    );

}

export default ChangePresetP;