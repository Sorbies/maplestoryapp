import { bossPrices } from "../../BossingData";
import BossingStats from "../presentational/BossingStats";

function BossingCalculations(props) {
    const calcCurrentIncome = () => {
        let income = 0;
        for (let charIndex = 0; charIndex < props.charProgress.length; charIndex++) {
            for (let bossIndex = 0; bossIndex < props.charProgress[charIndex].length; bossIndex++) {
                let currDifficulty = props.charDifficulties[charIndex][bossIndex]
                if (props.charProgress[charIndex][bossIndex]) {
                    income += bossPrices[bossIndex][currDifficulty];
                }
            }
        }
        return income;
    }
    const calcMaxIncome = () => {
        let income = 0;
        for (let charIndex = 0; charIndex < props.charProgress.length; charIndex++) {
            for (let bossIndex = 0; bossIndex < props.charProgress[charIndex].length; bossIndex++) {
                let currDifficulty = props.charDifficulties[charIndex][bossIndex]
                if (currDifficulty > 1) {
                    income += bossPrices[bossIndex][currDifficulty];
                }
            }
        }
        return income;
    }
    const countCurrentCrystals = () => {
        let count = 0;
        for (let charIndex = 0; charIndex < props.charProgress.length; charIndex++) {
            for (let bossIndex = 0; bossIndex < props.charProgress[charIndex].length; bossIndex++) {
                if (props.charProgress[charIndex][bossIndex]) {
                    count += 1;
                }
            }
        }
        return count;
    }
    const countMaxCrystals = () => {
        let count = 0;
        for (let charIndex = 0; charIndex < props.charProgress.length; charIndex++) {
            for (let bossIndex = 0; bossIndex < props.charProgress[charIndex].length; bossIndex++) {
                let currDifficulty = props.charDifficulties[charIndex][bossIndex]
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
