import ChangeDifficultyP from "../presentational/ChangeDifficultyP";

function ChangeDifficultyC(props) {

    //Updates the clear difficulty a character does for that boss
    const handleDifficulty = (difficulty, charIndex, bossIndex) => {
        let newCharDifficulties = [...props.charDifficulties];
        newCharDifficulties[charIndex][bossIndex] = difficulty;

        props.setCharDifficulties(newCharDifficulties);
    }

    let symbol = "";
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
        <ChangeDifficultyP charIndex={props.charIndex} bossIndex={props.bossIndex} handleDifficulty={handleDifficulty} difficulty={props.difficulty} symbol={symbol}/>
    );

}

export default ChangeDifficultyC;