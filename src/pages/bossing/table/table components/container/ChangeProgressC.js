import { useState, useEffect, useContext } from "react"; //hooks
import { statesContext } from "../../../Bossing"; //states
import ChangeProgressP from "../presentational/ChangeProgressP"; //css
import styles from "../style/buttons.module.css";

function ChangeProgressC(props) {
    //states
    const { charProgress, setCharProgress, charDifficulties, presetMode } = useContext(statesContext);
    const [style, setStyle] = useState(styles.btn);
    const [buttonText, setButtonText] = useState("Default");
    
    //variables
    const isDone = charProgress[props.charIndex][props.bossIndex];

    //hooks
    //this effect hook determines what styling and text the progress button should display
    useEffect(() => {
        let newStyle = styles.btn + " ";
        if (charDifficulties[props.charIndex][props.bossIndex] === 1) {
            newStyle += styles.disabled;
            setStyle(newStyle);
            setButtonText("Disabled");
        } else {
            newStyle += isDone ? styles.clear : styles.notDone;
            setStyle(newStyle);
            setButtonText(isDone ? "Clear" : "Not Done");
        }
    }, [charProgress, charDifficulties, presetMode, isDone]);

    //functions
    //This function will allow updating the clear status of the character's bosses.
    const handleCharProgress = (charIndex, bossIndex) => {
        let newProgress = [...charProgress]
        newProgress[charIndex][bossIndex] = !charProgress[charIndex][bossIndex];
        setCharProgress(newProgress);
    }

    return (
        <ChangeProgressP charIndex={props.charIndex} bossIndex={props.bossIndex} 
            handleCharProgress={handleCharProgress}
            style={style} buttonText={buttonText}/>
    );
}

export default ChangeProgressC;