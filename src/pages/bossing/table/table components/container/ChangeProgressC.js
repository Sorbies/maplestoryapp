import { useState, useEffect, useContext } from "react"; //hooks
import { statesContext } from "../../../Bossing"; //states
import ChangeProgressP from "../presentational/ChangeProgressP"; //css
import styles from "../../../../../styles/buttons.module.css";
import { bossData } from "../../../../../constants/BossData";

//controller for changing the clear status of the relevant boss for the relevant character
/* props: 
    character: the character this component belongs to
    boss: the boss this component corresponds to
*/
function ChangeProgressC(props) {
    
    //fetch needed states from context
    const { characters, setCharacters, presets } = useContext(statesContext);
    
    //states that specify what the progress buttons look like
    const [style, setStyle] = useState(styles.btn);
    const [buttonText, setButtonText] = useState("Default");
    
    //variable to determine if this character has done this boss
    const isDone = props.character["progress"][props.boss];

    //this effect hook determines what styling and text the progress button should display
    useEffect(() => {
        styleProgressButton();
    }, [characters, presets, props.character, props.boss, isDone]);
    const styleProgressButton = () => {
        //base style
        let newStyle = styles.btn + " ";

        //locate the preset and check its current difficulty for the boss
        let preset = presets.findPresetByName(props.character.getPreset());
        if (preset.getBossDifficulty(props.boss) === 0) {
            //the skip button
            newStyle = styles.disabled;
            setStyle(newStyle);
            setButtonText("🛇");
        } else {
            //the done/not done button
            newStyle += isDone ? styles.clear : styles.notDone;
            setStyle(newStyle);
            setButtonText(isDone ? "✔" : "✖");
        }
    }

    //effect hook that disables the clear status button for skipped bosses
    useEffect(() => {
        disableUnusedButtons();
    }, [characters, presets]);
    const disableUnusedButtons = () => {
        for (const character of characters.getCharacters()) {
            let preset = presets.findPresetByName(character.getPreset());
            for (const boss in bossData) {
                let button = document.getElementById("progress button " + character.getKey() + " " + bossData[boss]["key"]);
                if (button != null) {
                    if (preset.getBossDifficulty(props.boss) === 0) {
                        button.setAttribute("disabled", true);
                    } else {
                        button.removeAttribute("disabled");
                    }
                }
            }
        }
    }

    //function that allows updating the clear status of the character's bosses.
    const handleCharProgress = (character, boss) => {
        let newCharacters = characters.copy();
        let relevantCharacter = newCharacters.findCharacter(character);
        relevantCharacter.setBossStatus(boss, !relevantCharacter.getBossStatus(boss))
        setCharacters(newCharacters);
    }

    return (
        <ChangeProgressP character={props.character} boss={props.boss}
            handleCharProgress={handleCharProgress}
            style={style} buttonText={buttonText}/>
    );
}

export default ChangeProgressC;