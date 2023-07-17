import { useContext } from "react"; //hooks
import { statesContext } from "../../Bossing"; //contexts
import BossingStats from "../presentational/BossingStats"; //components
import { bossPrices } from "../../BossingData"; //constants

function BossingCalculations(props) {
    const { charDifficulties, charProgress, presets, charPresets } = useContext(statesContext); //retrieve necessary states

    const calcCurrentIncome = () => {
        let income = 0;
        for (let charIndex = 0; charIndex < charProgress.length; charIndex++) {
            for (let bossIndex = 0; bossIndex < charProgress[charIndex].length; bossIndex++) {
                let currDifficulty = presets[charPresets[charIndex]][bossIndex]
                if (charProgress[charIndex][bossIndex]) {
                    income += bossPrices[bossIndex][currDifficulty];
                }
            }
        }
        return income;
    }
    const calcMaxIncome = () => {
        let income = 0;
        for (let charIndex = 0; charIndex < charProgress.length; charIndex++) {
            for (let bossIndex = 0; bossIndex < charProgress[charIndex].length; bossIndex++) {
                let currDifficulty = presets[charPresets[charIndex]][bossIndex]
                if (currDifficulty > 1) {
                    income += bossPrices[bossIndex][currDifficulty];
                }
            }
        }
        return income;
    }
    const countCurrentCrystals = () => {
        let count = 0;
        for (let charIndex = 0; charIndex < charProgress.length; charIndex++) {
            for (let bossIndex = 0; bossIndex < charProgress[charIndex].length; bossIndex++) {
                if (charProgress[charIndex][bossIndex]) {
                    count += 1;
                }
            }
        }
        return count;
    }
    const countMaxCrystals = () => {
        let count = 0;
        for (let charIndex = 0; charIndex < charProgress.length; charIndex++) {
            for (let bossIndex = 0; bossIndex < charProgress[charIndex].length; bossIndex++) {
                let currDifficulty = presets[charPresets[charIndex]][bossIndex]
                if (currDifficulty > 1) {
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
