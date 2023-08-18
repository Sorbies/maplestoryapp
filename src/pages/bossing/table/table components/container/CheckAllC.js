import { useState, useEffect, useContext } from "react";
import { statesContext } from "../../../Bossing";
import CheckAllP from "../presentational/CheckAllP";
import styles from "../../../../../styles/buttons.module.css";

function CheckAllC(props) {
    const { characters, setCharacters, presets } = useContext(statesContext);
    const [allTrue, setAllTrue] = useState(false);
    const [style, setStyle] = useState(styles.btn);
    const [buttonText, setButtonText] = useState("Default");

    //hook that maintains allTrue's trueness whenever a character progress update happens
    useEffect(() => {
        let checkingAllTrue = true;
        let preset = presets.findPresetByName(props.character.getPreset());
        for (const boss in props.character.getProgress()) {
            if (!props.character.getBossStatus(boss) && preset.getBossDifficulty(boss) !== 0) {
                checkingAllTrue = false;
                break;
            }
        }
        setAllTrue(checkingAllTrue);
    }, [props.character])

    //hook that customizes the style of the check all button
    useEffect(() => {
        let newStyle = styles.btn + " ";
        newStyle += allTrue ? styles.notDone : styles.clear;
        setStyle(newStyle);
        setButtonText(allTrue ? "✖ All" : "✔ All");
    }, [allTrue])

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