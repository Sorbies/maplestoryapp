import { useContext } from "react";
import { statesContext } from "../../../Bossing";
import styles from "../style/buttons.module.css";

function ChangePresetP(props) {
    const { presetNames, charPresets } = useContext(statesContext);
    const style = styles.btn + " " + styles.normal;

    console.log(charPresets);

    return (
        <>
            Hello <br/>
            Preset: {props.getPresetName(props.charIndex)} <br/>
            {presetNames.map((presetName, nameIndex) => {
                return (
                    <>
                        <button key={"c" + props.charIndex + "p" + nameIndex} className={style} onClick={() => props.setCharPreset(props.charIndex, nameIndex)}>
                            {presetName}
                        </button> <br/>
                    </>
                )
            })}
        </>
    );

}

export default ChangePresetP;