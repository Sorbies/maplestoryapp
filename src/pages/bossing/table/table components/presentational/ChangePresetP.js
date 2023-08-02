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
        console.log(showDrop);
    }

    return (
        <>
            <button className={buttonStyle + " " + dropStyle} onClick={toggleShowDrop} key={"dropdown header " + props.character["key"]}>
                {props.character["preset"] + " ˅"}
            </button> 
            <br />

            <div className={dropContStyle} key={"dropdown content " + props.character["key"]} id={"dropdown content " + props.character["key"]}>
                {presets.map((preset) => {
                    return (
                        <>
                            <button className={buttonStyle} onClick={() => props.setCharPreset(preset)}
                                key={"char preset " + props.character["key"] + " " + preset["key"]}
                                id={"char preset " + props.character["key"] + " " + preset["key"]}>
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