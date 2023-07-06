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
    const handleDifficulty = (difficulty, presetIndex, bossIndex) => {
        let newPresets = [...presets];
        newPresets[presetIndex][bossIndex] = difficulty;

        setPresets(newPresets);
    }

    //script
    switch (props.difficulty) {
        case 1:
            symbol = "∅";
            break;
        case 2:
            symbol = "E";
            break;
        case 3:
            symbol = "N";
            break;
        case 4:
            symbol = "H";
            break;
        case 5:
            symbol = "X";
            break;
        default:
            symbol = "";
    }

    return (
        <ChangeDifficultyP presetIndex={props.presetIndex} bossIndex={props.bossIndex} handleDifficulty={handleDifficulty} difficulty={props.difficulty} symbol={symbol}/>
    );

}

export default ChangeDifficultyC;