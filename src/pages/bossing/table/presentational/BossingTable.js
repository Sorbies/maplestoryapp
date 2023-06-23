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
                    {bosses.map( (boss, index) => <th key={"boss" + index}>{boss[0]}</th> )}
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
                                        onClick={() => {props.handleProgress(props.charProgress, charIndex, bossIndex);}}>
                                    {props.charProgress[charIndex][bossIndex] ? "Clear" : "Not Done"}
                                </button>
                            </td>
                        )})}
                    </tr>
                )})}
            </tbody>

        </table>
      </>
    );
  }
  
export default BossingTable;