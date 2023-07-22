import { useContext } from "react";
import { statesContext } from "../../../Bossing";
import styles from "../style/buttons.module.css";

function ChangePresetP(props) {
    const { presets } = useContext(statesContext);
    const style = styles.btn + " " + styles.normal;

    return (
        <>
            Preset: {props.character["preset"]} <br/>
            {presets.map((preset) => {
                return (
                    <>
                        <button className={style} key={"char preset " + props.character["key"] + " " + preset["key"]}
                            onClick={() => props.setCharPreset(preset)}>
                            {preset["name"]}
                        </button> <br/>
                    </>
                )
            })}
        </>
    );

}

export default ChangePresetP;