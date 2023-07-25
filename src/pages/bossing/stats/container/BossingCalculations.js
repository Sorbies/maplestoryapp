import { useContext } from "react"; //hooks
import { statesContext } from "../../Bossing"; //contexts
import BossingStats from "../presentational/BossingStats"; //components
import { bossData } from "../../../../constants/BossData"; //constants

function BossingCalculations(props) {
    const { characters, presets } = useContext(statesContext); //retrieve necessary states

    const calcCurrentIncome = () => {
        let income = 0;
        for (const character of characters) {
            for (const boss in bossData) {
                let preset = presets.filter(prst => {return prst.name === character["preset"]})[0]
                let difficulty = preset["content"][boss]
                if (character["progress"][boss]) {
                    income += bossData[boss]["prices"][difficulty];
                }
            }
        }
        return income;
    }
    const calcMaxIncome = () => {
        let income = 0;
        for (const character of characters) {
            for (const boss in bossData) {
                let preset = presets.filter(prst => {return prst.name === character["preset"]})[0]
                let difficulty = preset["content"][boss]
                if (difficulty > 0) {
                    income += bossData[boss]["prices"][difficulty];
                }
            }
        }
        return income;
    }
    const countCurrentCrystals = () => {
        let count = 0;
        for (const character of characters) {
            for (const boss in bossData) {
                if (character["progress"][boss]) {
                    count += 1;
                }
            }
        }
        return count;
    }
    const countMaxCrystals = () => {
        let count = 0;
        for (const character of characters) {
            for (const boss in bossData) {
                let preset = presets.filter(prst => {return prst.name === character["preset"]})[0]
                let difficulty = preset["content"][boss]
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
