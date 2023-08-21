import { useState, useEffect, useContext } from "react";
import { statesContext } from "../../../Bossing";
import CheckAllP from "../presentational/CheckAllP";
import styles from "../../../../../styles/buttons.module.css";

//controller for checking all bosses at once
/* props: 
    character: the character this component belongs to
*/
function CheckAllC(props) {

    //fetch needed states from context
    const { characters, setCharacters, presets } = useContext(statesContext);

    //state for determining if all boxes are checked
    const [allTrue, setAllTrue] = useState(false);

    //states for determining button content
    const [style, setStyle] = useState(styles.btn);
    const [buttonText, setButtonText] = useState("Default");

    //effect hook to update allTrue every time the boss statuses change
    useEffect(() => {
        updateAllTrue();
    }, [props.character])
    const updateAllTrue = () => {
        let checkingAllTrue = true;
        let preset = presets.findPresetByName(props.character.getPreset());
        for (const boss in props.character.getProgress()) {
            //if boss is not done and the boss isn't a skipped one, we know it's not all true anymore
            if (!props.character.getBossStatus(boss) && preset.getBossDifficulty(boss) !== 0) {
                checkingAllTrue = false;
                break;
            }
        }
        setAllTrue(checkingAllTrue);
    }

    //effect hook that customizes the style of the check all button
    //if not all true, the button will read check all, or uncheck all otherwise
    useEffect(() => {
        setButtonStyle();
    }, [allTrue])
    const setButtonStyle = () => {
        let newStyle = styles.btn + " ";
        newStyle += allTrue ? styles.notDone : styles.clear;
        setStyle(newStyle);
        setButtonText(allTrue ? "✖ All" : "✔ All");
    }

    //function that updates every boss for this character to done or not done depending on allTrue
    const toggleAllBoxes = () => {
        let newCharacters = characters.copy();
        let relevantCharacter = newCharacters.findCharacter(props.character);

        if (allTrue) {
            for (const boss in relevantCharacter.getProgress()) {
                relevantCharacter.setBossStatus(boss, false);
            }
        }
        else {
            for (const boss in relevantCharacter.getProgress()) {
                let preset = presets.findPresetByName(props.character.getPreset());
                if (preset.getBossDifficulty(boss) !== 0) {
                    relevantCharacter.setBossStatus(boss, true);
                }
            }            
        }
        
        setCharacters(newCharacters);
    }

    return (
        <CheckAllP toggleAllBoxes={toggleAllBoxes} character={props.character} style={style} buttonText={buttonText}/>
    )
}

export default CheckAllC;