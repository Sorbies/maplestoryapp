import { useEffect, useContext } from "react";
import { statesContext } from "../../../Bossing";
import SwapPositionP from "../presentational/SwapPositionP";

function SwapPositionC(props) {
    const { presets, setPresets } = useContext(statesContext);

    //effect hook that disables the up swap for the first preset and the down swap for the last preset
    useEffect(() => {
        for (let i = 0; i < presets.getLength(); i++) {
            let swapUpButton = document.getElementById("p" + i + "swapup");
            if (swapUpButton != null) swapUpButton.removeAttribute("disabled");
            let swapDownButton = document.getElementById("p" + i + "swapdown");
            if (swapDownButton != null) swapDownButton.removeAttribute("disabled");
        }

        //since there's a hidden "None preset", the ids being searched don't exactly copy the characters version
        let firstButtonUp = document.getElementById("p" + 1 + "swapup");
        let lastButtonDown = document.getElementById("p" + (presets.getLength() - 1) + "swapdown");

        console.log(firstButtonUp);
        if (firstButtonUp != null && lastButtonDown != null) {
            firstButtonUp.setAttribute("disabled", true);
            lastButtonDown.setAttribute("disabled", true);
        }
    }, [presets.length]);

    //functions
    //swap current char state info with that of previous. Edge case is handled in swap
    const swapUp = (preset) => {
        let newPresets = presets.copy();
        let presetIndex = newPresets.findIndexOfPreset(preset);
        newPresets.swap(presetIndex, presetIndex - 1);
        setPresets(newPresets);
    }
    //swap current char state info with that of next. Edge case is handled in swap
    const swapDown = (preset) => {
        let newPresets = presets.copy();
        let presetIndex = newPresets.findIndexOfPreset(preset);
        newPresets.swap(presetIndex, presetIndex + 1);
        setPresets(newPresets);
    }

    return (
        <SwapPositionP preset={props.preset} swapUp={swapUp} swapDown={swapDown}/>
    )
}

export default SwapPositionC;