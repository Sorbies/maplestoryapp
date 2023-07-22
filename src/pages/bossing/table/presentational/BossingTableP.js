import { useContext } from "react"; //hooks
import { statesContext } from "../../Bossing";
import AddCharC from "../table components/container/AddCharC"; //components
import ChangePresetC from "../table components/container/ChangePresetC";
import ChangeProgressC from "../table components/container/ChangeProgressC";
import CharacterNameC from "../table components/container/CharacterNameC";
import DeleteCharC from "../table components/container/DeleteCharC";
import SwapPositionC from "../table components/container/SwapPositionC";
import { bossData } from "../../BossingData"; //constants
import styles from "../style/tables.module.css"; //styles

function BossingTableP(props) {
    //states
    const { characters, editMode, presets } = useContext(statesContext);
    
    const tableStyle = styles.table;

    //functions

    return (
        <>
            <table className={tableStyle}>

                <thead>
                    {/* Creates the header row of boss names */}
                    <tr>
                        <th className={tableStyle}>Character</th>
                        {Object.keys(bossData).map((boss) => <th  className={tableStyle} key={boss}>{boss}</th>)}
                        {editMode && <th className={tableStyle}>Delete</th>}
                    </tr>
                </thead>

                <tbody>
                    {/* Creates a row for each character, then data for the bosses they clear 
                    keys: c stands for char, b stands for boss, d stands for difficulty */}
                    {characters.map((character) => {
                        return (
                            <tr key={"row " + character["key"]}>
                                {/* The character name */}
                                <td  className={tableStyle} key={"char cell " + character["key"]}>
                                    <CharacterNameC character={character}/>
                                    <br/>
                                    {editMode && <ChangePresetC character={character}/>}
                                    
                                    {editMode && <SwapPositionC character={character}/>}
                                </td>

                                {/* The checkboxes */}
                                {Object.keys(bossData).map((boss) => {
                                    let preset = presets.filter(prst => {return prst.name === character["preset"]})[0]
                                    let difficulty = preset["content"][boss];
                                    return (
                                        <td className={tableStyle} key={"boss cell " + character["key"] + " " + bossData[boss]["key"]}>
                                            {bossData[boss]["modes"][difficulty]} <br />
                                            <ChangeProgressC character={character} boss={boss} />

                                        </td>
                                    )
                                })}

                                {/* The delete button */}
                                {editMode && <td className={tableStyle} key={"char delete " + character["key"]}>
                                    <DeleteCharC character={character} />
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