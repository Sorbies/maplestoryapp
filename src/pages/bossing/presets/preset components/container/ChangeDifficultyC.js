import { useContext } from "react"; //hooks
import { statesContext } from "../../../Bossing"; //states
import ChangeDifficultyP from "../presentational/ChangeDifficultyP";

function ChangeDifficultyC(props) {

    //states
    const { presets, setPresets } = useContext(statesContext);

    //variables
    let symbol;

    //functions
    //Updates the clear difficulty a character does for that boss
    const handleDifficulty = (difficulty, preset, boss) => {
        let newPresets = structuredClone(presets);
        const presetIndex = presets.indexOf(preset);
        newPresets[presetIndex]["content"][boss] = difficulty;

        setPresets(newPresets);
    }

    //script
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