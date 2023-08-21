import { useEffect, useContext } from "react";
import { statesContext } from "../../../Bossing";
import SwapPositionP from "../presentational/SwapPositionP";

//controller that swaps the display order of presets/rows
/* props: 
    preset: the specific preset that corresponds to this component. passed down to presentation. 
*/
function SwapPositionC(props) {
    const { presets, setPresets } = useContext(statesContext);

    //effect hook that disables the up swap for the first preset and the down swap for the last preset
    useEffect(() => {
        reenableAllButtons();
        disableEdgeButtons();
    }, [presets.length]);
    //helper function for effect hook. reenables all swap buttons, to fix the buttons that were previously disabled but
    //whose new locations shouldn't be disabled anymore.
    const reenableAllButtons = () => {
        for (let i = 0; i < presets.getLength(); i++) {
            let swapUpButton = document.getElementById("p" + i + "swapup");
            if (swapUpButton != null) swapUpButton.removeAttribute("disabled");
            let swapDownButton = document.getElementById("p" + i + "swapdown");
            if (swapDownButton != null) swapDownButton.removeAttribute("disabled");
        }
    }
    //helper function for effect hook. disables the first and last buttons (nothing to swap with)
    const disableEdgeButtons = () => {
        //since there's a hidden "None preset", the ids being searched don't exactly match the characters version
        let firstButtonUp = document.getElementById("p" + 1 + "swapup");
        let lastButtonDown = document.getElementById("p" + (presets.getLength() - 1) + "swapdown");

        if (firstButtonUp != null && lastButtonDown != null) {
            firstButtonUp.setAttribute("disabled", true);
            lastButtonDown.setAttribute("disabled", true);
        }
    }

    //function that swaps current char state info with that of previous. Edge case is handled in swap
    const swapUp = (preset) => {
        let newPresets = presets.copy();
        let presetIndex = newPresets.findIndexOfPreset(preset);
        newPresets.swap(presetIndex, presetIndex - 1);
        setPresets(newPresets);
    }
    //function that swaps current char state info with that of next. Edge case is handled in swap
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