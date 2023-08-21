import { useEffect, useContext } from "react"; //hooks
import { statesContext } from "../../../Bossing"; //states
import ChangeDifficultyP from "../presentational/ChangeDifficultyP";
import { bossData } from "../../../../../constants/BossData";

//controller for the different difficulty modes for each boss
/* props: 
    preset: the specific preset that corresponds to this button. passed down to presentation
    boss: the specific boss that corresponds to this button. passed down to presentation
    difficulty: the specific difficulty that corresponds to this button. used to display text
*/
function ChangeDifficultyC(props) {

    //fetch needed states from context
    const { presets, setPresets } = useContext(statesContext);
    
    //effect hook to hide the difficulties of bosses that don't exist in the game, for each of the presets
    useEffect(() => {
        disableInvalidBossDifficulties();
    }, [presets]);
    const disableInvalidBossDifficulties = () => {
        for (const preset of presets.getPresets()) {
            for (const boss in preset.getDifficulties()) {
                for (let difficulty = 0; difficulty <= 4; difficulty++) {
                    if (bossData[boss]["modes"][difficulty] === null) {
                        let button = document.getElementById("preset diff " + preset["key"] + " " + bossData[boss]["key"] + " " + difficulty);
                        if (button != null) button.setAttribute("hidden", true);
                    }
                }
            }
        }        
    }

    //function that updates the preset with the new desired difficulty to clear for a given boss
    const handleDifficulty = (difficulty, preset, boss) => {
        let newPresets = presets.copy();
        const presetIndex = presets.findIndexOfPreset(preset);
        newPresets.findPresetByIndex(presetIndex).setBossDifficulty(boss, difficulty);

        setPresets(newPresets);
    }

    //determine what to display for the button given the difficulty it corresponds to
    let symbol;
    switch (props.difficulty) {
        case 0:
            symbol = "∅";
            break;
        case 1:
            symbol = "E";
            break;
        case 2:
            symbol = "N";
            break;
        case 3:
            symbol = "H";
            break;
        case 4:
            symbol = "X";
            break;
        default:
            symbol = "";
    }

    return (
        <ChangeDifficultyP preset={props.preset} boss={props.boss} handleDifficulty={handleDifficulty} difficulty={props.difficulty} symbol={symbol}/>
    );

}

export default ChangeDifficultyC;