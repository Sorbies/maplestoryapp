import { useState, useEffect, useContext } from "react"; //hooks
import { statesContext } from "../../../Bossing"; //states
import ChangeProgressP from "../presentational/ChangeProgressP"; //css
import styles from "../style/buttons.module.css";

function ChangeProgressC(props) {
    //states
    const { characters, setCharacters, presets } = useContext(statesContext);
    const [style, setStyle] = useState(styles.btn);
    const [buttonText, setButtonText] = useState("Default");
    
    //variables
    const isDone = props.character["progress"][props.boss];

    //hooks
    //this effect hook determines what styling and text the progress button should display
    useEffect(() => {
        let newStyle = styles.btn + " ";
        let preset = presets.filter(prst => {return prst.name === props.character["preset"]})[0]
        if (preset["content"][props.boss] === 0) {
            newStyle = styles.disabled; //do Not inherit btn if disabled
            setStyle(newStyle);
            setButtonText("Disabled");
        } else {
            newStyle += isDone ? styles.clear : styles.notDone;
            setStyle(newStyle);
            setButtonText(isDone ? "Clear" : "Not Done");
        }
    }, [characters, presets, props.character, props.boss, isDone]);

    //functions
    //This function will allow updating the clear status of the character's bosses.
    const handleCharProgress = (character, boss) => {
        let charIndex = characters.indexOf(character);
        let newCharacters = structuredClone(characters);
        newCharacters[charIndex]["progress"][boss] = !newCharacters[charIndex]["progress"][boss];
        setCharacters(newCharacters);
    }

    return (
        <ChangeProgressP character={props.character} boss={props.boss}
            handleCharProgress={handleCharProgress}
            style={style} buttonText={buttonText}/>
    );
}

export default ChangeProgressC;