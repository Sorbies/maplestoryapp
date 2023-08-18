import { useContext } from "react"; //hooks
import { statesContext } from "../../Bossing";
import AddCharC from "../table components/container/AddCharC"; //components
import ChangePresetC from "../table components/container/ChangePresetC";
import ChangeProgressC from "../table components/container/ChangeProgressC";
import CharacterNameC from "../table components/container/CharacterNameC";
import CheckAllC from "../table components/container/CheckAllC";
import DeleteCharC from "../table components/container/DeleteCharC";
import SwapPositionC from "../table components/container/SwapPositionC";
import { bossData } from "../../../../constants/BossData"; //constants
import styles from "../../../../styles/tables.module.css"; //styles

function BossingTableP(props) {
    //states
    const { characters, presets } = useContext(statesContext);

    const tableStyle = styles.table;
    const bossStyle = styles.bosses;
    const columnStyle = styles.column;

    //functions

    return (
        <>
            <table className={tableStyle}>

                <thead>
                    {/* Creates the header row of boss names */}
                    <tr>
                        <th className={tableStyle}></th>
                        <th className={tableStyle}>Character</th>
                        <th className={tableStyle}>Preset</th>
                        <th className={tableStyle}></th>
                        {Object.keys(bossData).map((boss) => {
                            return (
                                <th className={tableStyle + " " + columnStyle} key={boss}>
                                    <img className={bossStyle} src={bossData[boss]["img"]} alt={boss} />
                                </th>
                            )
                        })}
                        <th className={tableStyle}>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {/* Creates a row for each character, then data for the bosses they clear 
                    keys: c stands for char, b stands for boss, d stands for difficulty */}
                    {characters.getCharacters().map((character) => {
                        return (
                            <tr key={"row " + character.getKey()}>
                                <td className={tableStyle} key={"swap cell " + character.getKey()}>
                                    <SwapPositionC character={character} />
                                </td>
                                <td className={tableStyle} key={"char cell " + character.getKey()}>
                                    <CharacterNameC character={character} />
                                </td>

                                <td className={tableStyle} key={"char preset cell " + character.getKey()}>
                                    <ChangePresetC character={character} />
                                </td>

                                <td className={tableStyle}>
                                    <CheckAllC character={character} />
                                </td>

                                {/* The checkboxes */}
                                {Object.keys(bossData).map((boss) => {
                                    let preset = presets.findPresetByName(character.getPreset());
                                    let difficulty = preset.getBossDifficulty(boss);
                                    return (
                                        <td className={tableStyle} key={"boss cell " + character.getKey() + " " + bossData[boss]["key"]}>
                                            {bossData[boss]["modes"][difficulty]} <br />
                                            <ChangeProgressC character={character} boss={boss} />

                                        </td>
                                    )
                                })}

                                {/* The delete button */}
                                <td className={tableStyle} key={"char delete " + character.getKey()}>
                                    <DeleteCharC character={character} />
                                </td>

                            </tr>
                        )
                    })}
                </tbody>

            </table>
            <div><AddCharC /></div>
        </>
    );
}

export default BossingTableP;