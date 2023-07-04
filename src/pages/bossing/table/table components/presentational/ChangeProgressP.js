import { useState, useEffect, useContext } from "react";
import { statesContext } from "../../../Bossing";
import styles from "../style/ChangeProgressP.module.css";

function ChangeProgressP(props) {
    const { charProgress, presetMode } = useContext(statesContext);
    const [style, setStyle] = useState(null)
    const [buttonText, setButtonText] = useState("D");

    //variables
    const id = "c" + props.charIndex + "b" + props.bossIndex + "button";
    const button = document.getElementById(id);

    useEffect(() => {
        if (button != null) {
            let isDisabled = button.hasAttribute("disabled");
            let newStyle = styles.btn + " ";
            if (isDisabled) {
                newStyle += styles.disabled;
                setStyle(newStyle);
                setButtonText("Disabled");
            } else {
                newStyle += props.isDone ? styles.clear : styles.notDone;
                setStyle(newStyle);
                setButtonText(props.isDone ? "Clear" : "Not Done");    
            }
        }
    }, [charProgress, presetMode]);


    return (
        <button type="button" key={id} id={id} className={style} 
            onClick={() => props.handleCharProgress(props.charIndex, props.bossIndex)}>
            {buttonText}
        </button>
    );
}

export default ChangeProgressP;