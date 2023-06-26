import { bosses } from "../../BossingData";
import AddCharC from "../table components/container/AddCharC";
import ChangeDifficultyC from "../table components/container/ChangeDifficultyC";
import ChangeProgressC from "../table components/container/ChangeProgressC";
import DeleteCharC from "../table components/container/DeleteCharC";

function BossingTableP(props) {
    //Turns the number from charDifficulties into English
    const translateDifficulty = (difficulty) => {
        let answer = "Error";
        switch (difficulty) {
            case 1:
                answer = "Skip";
                break;
            case 2:
                answer = "Easy";
                break;
            case 3:
                answer = "Normal";
                break;
            case 4:
                answer = "Hard";
                break;
            case 5:
                answer = "Extreme";
                break;
            default:
                answer = "Error";
        }
        return answer;
    }

    return (
        <>
            {/* Edit button */}
            <button>Edit</button>
            <table>

                <thead>
                    {/* Creates the header row of boss names */}
                    <tr>
                        <th>Character</th>
                        {bosses.map((boss, index) => <th key={"boss" + index}>{boss[0]}</th>)}
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {/* Creates a row for each character, then data for the bosses they clear 
                    keys: c stands for char, b stands for boss, d stands for difficulty */}
                    {props.charNames.map((charName, charIndex) => {
                        return (
                            <tr key={"row" + charIndex}>
                                {/* The character name */}
                                <td key={"c" + charIndex}>{charName}</td>

                                {/* The checkboxes */}
                                {props.charDifficulties[charIndex].map((difficulty, bossIndex) => {
                                    return (
                                        <td key={"c" + charIndex + "b" + bossIndex}>
                                            {translateDifficulty(difficulty)} <br />
                                            <ChangeProgressC charIndex={charIndex} bossIndex={bossIndex} charProgress={props.charProgress} setCharProgress={props.setCharProgress}/>
                                            <br />
                                            <ChangeDifficultyC charIndex={charIndex} bossIndex={bossIndex} charDifficulties={props.charDifficulties} setCharDifficulties={props.setCharDifficulties} difficulty={1}/>
                                            <ChangeDifficultyC charIndex={charIndex} bossIndex={bossIndex} charDifficulties={props.charDifficulties} setCharDifficulties={props.setCharDifficulties} difficulty={2}/>
                                            <ChangeDifficultyC charIndex={charIndex} bossIndex={bossIndex} charDifficulties={props.charDifficulties} setCharDifficulties={props.setCharDifficulties} difficulty={3}/>
                                            <ChangeDifficultyC charIndex={charIndex} bossIndex={bossIndex} charDifficulties={props.charDifficulties} setCharDifficulties={props.setCharDifficulties} difficulty={4}/>
                                            <ChangeDifficultyC charIndex={charIndex} bossIndex={bossIndex} charDifficulties={props.charDifficulties} setCharDifficulties={props.setCharDifficulties} difficulty={5}/>
                                        </td>
                                    )
                                })}

                                {/* The delete button */}
                                <td>
                                    <DeleteCharC
                                        charNames={props.charNames} setCharNames={props.setCharNames}
                                        charDifficulties={props.charDifficulties} setCharDifficulties={props.setCharDifficulties}
                                        charProgress={props.charProgress} setCharProgress={props.setCharProgress}
                                        charIndex={charIndex} />
                                </td>


                            </tr>
                        )
                    })}
                </tbody>

            </table>
            <AddCharC charNames={props.charNames} setCharNames={props.setCharNames}
                charDifficulties={props.charDifficulties} setCharDifficulties={props.setCharDifficulties}
                charProgress={props.charProgress} setCharProgress={props.setCharProgress} />
        </>
    );
}

export default BossingTableP;