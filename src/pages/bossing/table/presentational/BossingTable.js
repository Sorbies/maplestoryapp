import { bosses } from "../../BossingData";

function BossingTable(props) {
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
        <table>

            <thead>
                {/* Creates the header row of boss names */}
                <tr>
                    <th>Character</th>
                    {bosses.map((boss, index) => <th key={"boss" + index}>{boss[0]}</th> )}
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
                {/* Creates a row for each character, then data for the bosses they clear 
                    keys: c stands for char, b stands for boss, d stands for difficulty */}
                {props.charNames.map( (charName, charIndex) => { return (
                    <tr key={"row" + charIndex}>
                        {/* The character name */}
                        <td key={"c" + charIndex}>{charName}</td>
                        {/* The checkboxes */ }
                        {props.charDifficulties[charIndex].map( (difficulty, bossIndex) => { return (
                            <td key={"c" + charIndex + "b" + bossIndex}>
                                {translateDifficulty(difficulty)} <br/>
                                <button type="button" key={"c" + charIndex + "b" + bossIndex + "button"}
                                                       id={"c" + charIndex + "b" + bossIndex + "button"}
                                        onClick={() => props.handleProgress(charIndex, bossIndex)}>
                                    {props.charProgress[charIndex][bossIndex] ? "Clear" : "Not Done"}
                                </button>
                                <br/>
                                <button type="button"         key={"c" + charIndex + "b" + bossIndex + "d" + 1} 
                                        className="difficulty" id={"c" + charIndex + "b" + bossIndex + "d" + 1} 
                                        onClick={() => {props.handleDifficulty(1, charIndex, bossIndex)}}>
                                    ∅
                                </button>
                                <button type="button"         key={"c" + charIndex + "b" + bossIndex + "d" + 2} 
                                        className="difficulty" id={"c" + charIndex + "b" + bossIndex + "d" + 2} 
                                        onClick={() => {props.handleDifficulty(2, charIndex, bossIndex)}}>
                                    E
                                </button>
                                <button type="button"         key={"c" + charIndex + "b" + bossIndex + "d" + 3} 
                                        className="difficulty" id={"c" + charIndex + "b" + bossIndex + "d" + 3}
                                        onClick={() => {props.handleDifficulty(3, charIndex, bossIndex)}}>
                                    N
                                </button>
                                <button type="button"         key={"c" + charIndex + "b" + bossIndex + "d" + 4} 
                                        className="difficulty" id={"c" + charIndex + "b" + bossIndex + "d" + 4}
                                        onClick={() => {props.handleDifficulty(4, charIndex, bossIndex)}}>
                                    H
                                </button>
                                <button type="button"         key={"c" + charIndex + "b" + bossIndex + "d" + 5} 
                                        className="difficulty" id={"c" + charIndex + "b" + bossIndex + "d" + 5}
                                        onClick={() => {props.handleDifficulty(5, charIndex, bossIndex)}}>
                                    X
                                </button>
                            </td>
                        )})}
                        {/* The delete button */}
                        <td>
                            <button type="button" onClick={() => props.deleteChar(charIndex)}>Delete</button>
                        </td>
                    </tr>
                )})}
            </tbody>

        </table>

        Add a new character: <input type="text" value={props.newChar} onChange={props.handleNewChar}/> <button onClick={props.addNewChar}>Add</button>
      </>
    );
  }
  
export default BossingTable;