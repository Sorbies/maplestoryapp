import { useEffect, useContext } from "react";
import { statesContext } from "../../Bossing";
import PresetTableP from "../presentational/PresetTableP";
import { bosses } from "../../BossingData";

function PresetTableC(props) {
    const { presetNames, presets, editMode } = useContext(statesContext);

    //hooks
    //effect hook that disables buttons for invalid boss difficulties when new characters are added or when edit mode is turned on
    useEffect(() => {
        for (let presetIndex = 0; presetIndex < presetNames.length; presetIndex++) {
            for (let bossIndex = 0; bossIndex < presets[presetIndex].length; bossIndex++) {
                for (let difficulty = 1; difficulty <= 5; difficulty++) {
                    if (bosses[bossIndex][difficulty] === 0) {
                        let button = document.getElementById("p" + presetIndex + "b" + bossIndex + "d" + difficulty);
                        if (button != null) button.setAttribute("hidden", true);
                    }
                }
            }
        }
    }, [presets, presetNames, editMode]);
    //effect hook that disables the up swap for the first character and the down swap for the last character
    useEffect(() => {
        console.log("disabling edge case swap buttons")
        if (editMode) {
            let firstButtonUp = document.getElementById("p" + 0 + "swapup");
            let lastButtonDown = document.getElementById("p" + (presetNames.length - 1) + "swapdown");

            if (firstButtonUp != null && lastButtonDown != null) {
                firstButtonUp.setAttribute("disabled", true);
                lastButtonDown.setAttribute("disabled", true);
            }
        }
    }, [editMode, presetNames.length]);

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
            <PresetTableP translateDifficulty={translateDifficulty}/>
        </>
    )
}

export default PresetTableC;