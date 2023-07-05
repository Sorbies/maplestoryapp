import { useState, useEffect, useContext } from "react";
import { statesContext } from "../../../Bossing";
import styles from "../style/ChangeProgressP.module.css";

function ChangeProgressP(props) {
    const { charProgress, charDifficulties, presetMode } = useContext(statesContext);
    const [style, setStyle] = useState(styles.btn);
    const [buttonText, setButtonText] = useState("Default");

    //variables
    const id = "c" + props.charIndex + "b" + props.bossIndex + "button";

    //TODO: this effect does happen after disabling presetMode. but still, the style doesn't change. why?
    useEffect(() => {
            let newStyle = styles.btn + " ";
            if (charDifficulties[props.charIndex][props.bossIndex] === 1) {
                newStyle += styles.disabled;
                setStyle(newStyle);
                setButtonText("Disabled");
            } else {
                newStyle += props.isDone ? styles.clear : styles.notDone;
                setStyle(newStyle);
                setButtonText(props.isDone ? "Clear" : "Not Done");   
            }
    }, [charProgress, charDifficulties, presetMode, props.isDone]);


    return (
        <button type="button" key={id} id={id} className={style} 
            onClick={() => props.handleCharProgress(props.charIndex, props.bossIndex)}>
            {buttonText}
        </button>
    );
}

export default ChangeProgressP;