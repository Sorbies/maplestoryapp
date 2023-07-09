import { useContext } from "react"; //hooks
import { statesContext } from "../../Bossing"; //states
import AddPresetC from "../preset components/container/AddPresetC"; //components
import ChangeDifficultyC from "../preset components/container/ChangeDifficultyC";
import DeletePresetC from "../preset components/container/DeletePresetC";
import PresetNameC from "../preset components/container/PresetNameC";
import { bosses } from "../../BossingData"; //constants
import styles from "../../table/style/tables.module.css";//styles


function PresetTableP(props) {
    const { presets, presetNames } = useContext(statesContext);

    const tableStyle = styles.table;

    return (
        <>
            <br />
            PRESETS
            <br />
            <table className={tableStyle}>

                <thead>
                    {/* Creates the header row of boss names */}
                    <tr>
                        <th className={tableStyle}>Preset</th>
                        {bosses.map((boss, index) => <th className={tableStyle} key={"boss" + index}>{boss[0]}</th>)}
                        <th className={tableStyle}>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {presetNames.map((presetName, presetIndex) => {
                        return (
                            <tr key={"row" + presetIndex}>
                                <td className={tableStyle} key={"p" + presetIndex}>
                                    <PresetNameC presetName={presetName} presetIndex={presetIndex}/>
                                </td>

                                {/* The checkboxes */}
                                {presets[presetIndex].map((difficulty, bossIndex) => {
                                    return (
                                        <td  className={tableStyle} key={"p" + presetIndex + "b" + bossIndex}>
                                            {props.translateDifficulty(difficulty)}
                                            <br />
                                            <ChangeDifficultyC presetIndex={presetIndex} bossIndex={bossIndex} difficulty={1} />
                                            <ChangeDifficultyC presetIndex={presetIndex} bossIndex={bossIndex} difficulty={2} />
                                            <ChangeDifficultyC presetIndex={presetIndex} bossIndex={bossIndex} difficulty={3} />
                                            <ChangeDifficultyC presetIndex={presetIndex} bossIndex={bossIndex} difficulty={4} />
                                            <ChangeDifficultyC presetIndex={presetIndex} bossIndex={bossIndex} difficulty={5} />


                                        </td>
                                    )
                                })}

                                {/* The delete button */}
                                <td className={tableStyle} >
                                    <DeletePresetC presetIndex={presetIndex} />
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>

            </table>
            <AddPresetC />
        </>
    )
}

export default PresetTableP;