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
                answer = "Chaos/Hard";
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
                {/* Creates a row for each character, then data for the bosses they clear */}
                {props.charNames.map( (charName, charIndex) => { return (
                    <tr key={"row" + charIndex}>
                        {/* The character name */}
                        <td key={"char" + charIndex}>{charName}</td>
                        {/* The checkboxes */ }
                        {props.charDifficulties[charIndex].map( (difficulty, bossIndex) => { return (
                            <td key={"char" + charIndex + "boss" + bossIndex}>
                                {translateDifficulty(difficulty)} <br/>
                                <button type="button" key={"char" + charIndex + "boss" + bossIndex + "button"} 
                                        onClick={() => props.handleProgress(charIndex, bossIndex)}>
                                    {props.charProgress[charIndex][bossIndex] ? "Clear" : "Not Done"}
                                </button>
                                <button type="button" key={"char" + charIndex + "boss" + bossIndex + "difficulty" + 1 + "button"} className="difficulty" onClick={() => {props.handleDifficulty(1, charIndex, bossIndex)}}>Skip</button>
                                <button type="button" key={"char" + charIndex + "boss" + bossIndex + "difficulty" + 2 + "button"} className="difficulty" onClick={() => {props.handleDifficulty(2, charIndex, bossIndex)}}>Easy</button>
                                <button type="button" key={"char" + charIndex + "boss" + bossIndex + "difficulty" + 3 + "button"} className="difficulty" onClick={() => {props.handleDifficulty(3, charIndex, bossIndex)}}>Normal</button>
                                <button type="button" key={"char" + charIndex + "boss" + bossIndex + "difficulty" + 4 + "button"} className="difficulty" onClick={() => {props.handleDifficulty(4, charIndex, bossIndex)}}>Chaos/Hard</button>
                                <button type="button" key={"char" + charIndex + "boss" + bossIndex + "difficulty" + 5 + "button"} className="difficulty" onClick={() => {props.handleDifficulty(5, charIndex, bossIndex)}}>Extreme</button>
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