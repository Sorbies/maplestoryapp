import { useContext } from "react"; //hooks
import { statesContext } from "../../Bossing"; //contexts
import BossingStats from "../presentational/BossingStats"; //components
import { bossData } from "../../../../constants/BossData"; //constants

//controller that calculates bossing statistics
function BossingCalculations(props) {

    //fetch needed states from context
    const { characters, presets } = useContext(statesContext);

    //function that calculates the current accrued income based on the already cleared bosses
    const calcCurrentIncome = () => {
        let income = 0;
        for (const character of characters.getCharacters()) {
            for (const boss in bossData) {
                let preset = presets.findPresetByName(character.getPreset());
                let difficulty = preset.getBossDifficulty(boss);
                if (character.getBossStatus(boss)) {
                    income += bossData[boss]["prices"][difficulty];
                }
            }
        }
        return income;
    }
    //function that calculates the max income possible if all available bosses are cleared
    const calcMaxIncome = () => {
        let income = 0;
        for (const character of characters.getCharacters()) {
            for (const boss in bossData) {
                let preset = presets.findPresetByName(character.getPreset());
                let difficulty = preset.getBossDifficulty(boss);
                if (difficulty > 0) {
                    income += bossData[boss]["prices"][difficulty];
                }
            }
        }
        return income;
    }
    //function that counts the number of boss crystals sold based on already cleared bosses
    const countCurrentCrystals = () => {
        let count = 0;
        for (const character of characters.getCharacters()) {
            let preset = presets.findPresetByName(character.getPreset());
            for (const boss in bossData) {
                if (character.getBossStatus(boss) && preset.getBossDifficulty(boss) !== 0) {
                    count += 1;
                }
            }
        }
        return count;
    }
    //function that counts the max number of boss crystals of all available bosses
    const countMaxCrystals = () => {
        let count = 0;
        for (const character of characters.getCharacters()) {
            for (const boss in bossData) {
                let preset = presets.findPresetByName(character.getPreset());
                let difficulty = preset.getBossDifficulty(boss);
                if (difficulty > 0) {
                    count += 1;
                }
            }
        }
        return count;
    }

    return (
        <>
            <BossingStats calcCurrentIncome={calcCurrentIncome} calcMaxIncome={calcMaxIncome}
                countCurrentCrystals={countCurrentCrystals} countMaxCrystals={countMaxCrystals} />
        </>
    )
}

export default BossingCalculations;
