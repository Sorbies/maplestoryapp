import { useState, useEffect, useContext } from "react";
import { statesContext } from "../../../Bossing";
import styles from "../../../../../styles/buttons.module.css";

function ChangePresetP(props) {
    const [ showDrop, setShowDrop ] = useState(false);
    const { presets } = useContext(statesContext);

    const buttonStyle = styles.btn + " " + styles.normal;
    const dropStyle = styles.dropdown;
    const dropContStyle = styles["dropdown-content"];

    //enables the dropdown contents to show or not
    useEffect(() => {
        const dropdownContent = document.getElementById("dropdown content " + props.character["key"]);
        if (dropdownContent != null) {
            if (showDrop) {
                dropdownContent.style.display = "block";
            }
            else {
                dropdownContent.style.display = "none";
            }
        }
    }, [showDrop, props.character]);

    const toggleShowDrop = () => {
        setShowDrop((prev) => !prev);
    }

    return (
        <>
            <button className={buttonStyle + " " + dropStyle} onClick={toggleShowDrop} key={"dropdown header " + props.character.getKey()}>
                {props.character.getPreset() + " ˅"}
            </button> 
            <br />

            <div className={dropContStyle} key={"dropdown content " + props.character.getKey()} id={"dropdown content " + props.character.getKey()}>
                {presets.getPresets().map((preset) => {
                    return (
                        <>
                            <button className={buttonStyle} onClick={() => props.setCharPreset(preset.getName())}
                                key={"char preset " + props.character.getKey() + " " + preset.getKey()}
                                id={"char preset " + props.character.getKey() + " " + preset.getKey()}>
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