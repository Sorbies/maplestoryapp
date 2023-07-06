import { useContext } from "react"; //hooks
import { statesContext } from "../../Bossing";
import AddCharC from "../table components/container/AddCharC"; //components
import ChangeDifficultyC from "../table components/container/ChangeDifficultyC";
import ChangeProgressC from "../table components/container/ChangeProgressC";
import CharacterNameC from "../table components/container/CharacterNameC";
import DeleteCharC from "../table components/container/DeleteCharC";
import SwapPositionC from "../table components/container/SwapPositionC";
import { bosses } from "../../BossingData"; //constants
import styles from "../style/tables.module.css"; //styles

function BossingTableP(props) {
    //states
    const { charNames, charDifficulties, editMode } = useContext(statesContext);
    
    const tableStyle = styles.table;

    //functions

    return (
        <>
            <br/>
            <table className={tableStyle}>

                <thead>
                    {/* Creates the header row of boss names */}
                    <tr>
                        <th className={tableStyle}>Character</th>
                        {bosses.map((boss, index) => <th  className={tableStyle} key={"boss" + index}>{boss[0]}</th>)}
                        {editMode && <th className={tableStyle}>Delete</th>}
                    </tr>
                </thead>

                <tbody>
                    {/* Creates a row for each character, then data for the bosses they clear 
                    keys: c stands for char, b stands for boss, d stands for difficulty */}
                    {charNames.map((charName, charIndex) => {
                        return (
                            <tr key={"row" + charIndex}>
                                {/* The character name */}
                                <td  className={tableStyle} key={"c" + charIndex}>
                                    <CharacterNameC charName={charName} charIndex={charIndex}/>
                                    <br/>
                                    {editMode && <SwapPositionC charIndex={charIndex}/>}
                                </td>

                                {/* The checkboxes */}
                                {charDifficulties[charIndex].map((difficulty, bossIndex) => {
                                    return (
                                        <td  className={tableStyle} key={"c" + charIndex + "b" + bossIndex}>
                                            {props.translateDifficulty(difficulty)} <br />
                                            <ChangeProgressC charIndex={charIndex} bossIndex={bossIndex} />
                                            <br />
                                            {editMode && <>
                                                <ChangeDifficultyC charIndex={charIndex} bossIndex={bossIndex} difficulty={1} />
                                                <ChangeDifficultyC charIndex={charIndex} bossIndex={bossIndex} difficulty={2} />
                                                <ChangeDifficultyC charIndex={charIndex} bossIndex={bossIndex} difficulty={3} />
                                                <ChangeDifficultyC charIndex={charIndex} bossIndex={bossIndex} difficulty={4} />
                                                <ChangeDifficultyC charIndex={charIndex} bossIndex={bossIndex} difficulty={5} /></>}


                                        </td>
                                    )
                                })}

                                {/* The delete button */}
                                {editMode && <td className={tableStyle} >
                                    <DeleteCharC charIndex={charIndex} />
                                </td>}


                            </tr>
                        )
                    })}
                </tbody>

            </table>
            {editMode && <div><AddCharC /></div>}
        </>
    );
}

export default BossingTableP;