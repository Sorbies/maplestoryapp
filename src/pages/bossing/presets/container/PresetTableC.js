import { useEffect, useContext } from "react";
import { statesContext } from "../../Bossing";
import PresetTableP from "../presentational/PresetTableP";
import { bossData } from "../../../../constants/BossData";

function PresetTableC(props) {
    const { presets, editMode } = useContext(statesContext);

    //hooks
    //effect hook that disables buttons for invalid boss difficulties when new characters are added or when edit mode is turned on
    useEffect(() => {
        for (const preset of presets) {
            for (const boss in preset["content"]) {
                for (let difficulty = 0; difficulty <= 4; difficulty++) {
                    if (bossData[boss]["modes"][difficulty] === null) {
                        let button = document.getElementById("preset diff " + preset["key"] + " " + bossData[boss]["key"] + " " + difficulty);
                        if (button != null) button.setAttribute("hidden", true);
                    }
                }
            }
        }
    }, [presets, editMode]);
    //effect hook that disables the up swap for the first preset and the down swap for the last preset
    useEffect(() => {
        console.log("disabling edge case swap buttons")
        for (let i = 0; i < presets.length; i++) {
            let swapUpButton = document.getElementById("p" + i + "swapup");
            if (swapUpButton != null) swapUpButton.removeAttribute("disabled");
            let swapDownButton = document.getElementById("p" + i + "swapdown");
            if (swapDownButton != null) swapDownButton.removeAttribute("disabled");
        }

        let firstButtonUp = document.getElementById("p" + 0 + "swapup");
        let lastButtonDown = document.getElementById("p" + (presets.length - 1) + "swapdown");

        if (firstButtonUp != null && lastButtonDown != null) {
            firstButtonUp.setAttribute("disabled", true);
            lastButtonDown.setAttribute("disabled", true);
        }
    }, [editMode, presets.length]);

    return (
        <>
            <PresetTableP />
        </>
    )
}

export default PresetTableC;