import { useContext } from "react"; //hooks
import { statesContext } from "../../Bossing"; //states
import AddPresetC from "../preset components/container/AddPresetC"; //components
import ChangeDifficultyC from "../preset components/container/ChangeDifficultyC";
import DeletePresetC from "../preset components/container/DeletePresetC";
import PresetNameC from "../preset components/container/PresetNameC";
import { bossData } from "../../../../constants/BossData"; //constants
import styles from "../../../../styles/tables.module.css";//styles


function PresetTableP(props) {
    const { presets } = useContext(statesContext);

    const tableStyle = styles.table;

    return (
        <>
            <table className={tableStyle}>

                <thead>
                    {/* Creates the header row of boss names */}
                    <tr>
                        <th className={tableStyle}>Preset</th>
                        {Object.keys(bossData).map((boss) => <th className={tableStyle} key={boss}>{boss}</th>)}
                        <th className={tableStyle}>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {presets.getPresets().map((preset) => {
                        return (
                            <>
                                {(preset.getName() !== "None") && <tr key={"row " + preset["key"]}>
                                    <td className={tableStyle} key={"preset cell " + preset["key"]}>
                                        <PresetNameC preset={preset} />
                                    </td>

                                    {/* The checkboxes */}
                                    {Object.keys(preset.getDifficulties()).map((boss) => {
                                        let difficulty = preset.getBossDifficulty(boss);

                                        return (
                                            <td className={tableStyle} key={"preset boss cell " + preset.getKey() + " " + bossData[boss]["key"]}>
                                                {bossData[boss]["modes"][difficulty]} <br />
                                                <ChangeDifficultyC preset={preset} boss={boss} difficulty={0} />
                                                <ChangeDifficultyC preset={preset} boss={boss} difficulty={1} />
                                                <ChangeDifficultyC preset={preset} boss={boss} difficulty={2} />
                                                <ChangeDifficultyC preset={preset} boss={boss} difficulty={3} />
                                                <ChangeDifficultyC preset={preset} boss={boss} difficulty={4} />


                                            </td>
                                        )
                                    })}

                                    {/* The delete button */}
                                    <td className={tableStyle} key={"preset delete " + preset.getKey()}>
                                        <DeletePresetC preset={preset} />
                                    </td>
                                </tr>}

                            </>
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