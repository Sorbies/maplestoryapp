import { useContext } from "react"; //hooks
import { statesContext } from "../../Bossing"; //states
import AddPresetC from "../preset components/container/AddPresetC"; //components
import ChangeDifficultyC from "../preset components/container/ChangeDifficultyC";
import DeletePresetC from "../preset components/container/DeletePresetC";
import PresetNameC from "../preset components/container/PresetNameC";
import SwapPositionC from "../preset components/container/SwapPositionC";
import { bossData } from "../../../../constants/BossData"; //constants
import styles from "../../../../styles/tables.module.css";//styles

//presentation for displaying the whole table of presets
function PresetTableP(props) {
    
    //fetch needed states from context
    const { presets } = useContext(statesContext);

    const tableStyle = styles.table;

    return (
        <>
            <table className={tableStyle}>

                <thead>
                    {/* Creates the column names */}
                    <tr>
                        <th></th>
                        <th className={tableStyle}>Preset</th>
                        {Object.keys(bossData).map((boss) => <th className={tableStyle} key={boss}>{boss}</th>)} 
                        <th className={tableStyle}>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {/* populates each row with content, which differs based on the column */}
                    {presets.getPresets().map((preset) => {
                        return (
                            <>
                                {/* hide just the default "None" row that isn't meant to be changed */}
                                {(preset.getName() !== "None") && <tr key={"row " + preset["key"]}>

                                    {/* first column - swap position buttons */}
                                    <td className={tableStyle} key={"swap cell " + preset.getKey()}>
                                        <SwapPositionC preset={preset} />
                                    </td>

                                    {/* second column - preset names */}
                                    <td className={tableStyle} key={"preset cell " + preset["key"]}>
                                        <PresetNameC preset={preset} />
                                    </td>

                                    {/* boss columns - the available difficulties */}
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

                                    {/* last column - The delete button */}
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

            {/* beneath the table - add a new preset button */}
            <AddPresetC />
        </>
    )
}

export default PresetTableP;