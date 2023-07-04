import { useEffect, useContext } from "react"; //hooks
import { statesContext } from "../../Bossing";
import BossingTableP from "../presentational/BossingTableP"; //components
import { bosses } from "../../BossingData"; //constants

function BossingTableC(props) {
    //states
    const { charNames, charDifficulties, editMode } = useContext(statesContext);

    //hooks
    //effect hook that disables buttons for invalid boss difficulties when new characters are added or when edit mode is turned on
    useEffect(() => {
        for (let charIndex = 0; charIndex < charNames.length; charIndex++) {
            for (let bossIndex = 0; bossIndex < charDifficulties[charIndex].length; bossIndex++) {
                for (let difficulty = 1; difficulty <= 5; difficulty++) {
                    if (bosses[bossIndex][difficulty] === 0) {
                        let button = document.getElementById("c" + charIndex + "b" + bossIndex + "d" + difficulty);
                        if (button != null) button.setAttribute("hidden", true);
                    }
                }
            }
        }
    }, [charNames, editMode]);
    //effect hook that disables the clear status button for skipped bosses
    useEffect(() => {
        for (let charIndex = 0; charIndex < charNames.length; charIndex++) {
            for (let bossIndex = 0; bossIndex < charDifficulties[charIndex].length; bossIndex++) {
                let button = document.getElementById("c" + charIndex + "b" + bossIndex + "button");
                if (button != null) {
                    if (charDifficulties[charIndex][bossIndex] === 1) {
                        button.setAttribute("disabled", true);
                    } else {
                        button.removeAttribute("disabled");
                    }
                }
            }
        }
    }, [charDifficulties]);
    //effect hook that disables the up swap for the first character and the down swap for the last character
    useEffect(() => {
        console.log("disabling edge case swap buttons")
        if (editMode) {
            let firstButtonUp = document.getElementById("c" + 0 + "swapup");
            let lastButtonDown = document.getElementById("c" + (charNames.length - 1) + "swapdown");

            if (firstButtonUp != null && lastButtonDown != null) {
                firstButtonUp.setAttribute("disabled", true);
                lastButtonDown.setAttribute("disabled", true);
            }
        }
    }, [editMode]);

    //functions


    //Turns the number from charDifficulties into English
    const translateDifficulty = (difficulty) => {
        let answer = "Error";
        switch (difficulty) {
            case 1:
                answer = "Skip";
                break;
            case 2:
                answer = "Easy";
                break;
            case 3:
                answer = "Normal";
                break;
            case 4:
                answer = "Hard";
                break;
            case 5:
                answer = "Extreme";
                break;
            default:
                answer = "Error";
        }
        return answer;
    }

    return (
        <>
            <BossingTableP translateDifficulty={translateDifficulty} />
        </>

    )
}

export default BossingTableC;