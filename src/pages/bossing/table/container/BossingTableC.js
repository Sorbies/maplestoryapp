import { useEffect, useContext } from "react"; //hooks
import { statesContext } from "../../Bossing";
import BossingTableP from "../presentational/BossingTableP"; //components
import { bossData } from "../../BossingData"; //constants

function BossingTableC(props) {
    //states
    const { characters, presets, editMode } = useContext(statesContext);

    //hooks
    //effect hook that disables the clear status button for skipped bosses
    useEffect(() => {
        for (const character of characters) {
            let preset = presets.filter(prst => {return prst.name === character["preset"]})[0]
            for (const boss in bossData) {
                let button = document.getElementById("progress button " + character["key"] + " " + bossData[boss]["key"]);
                if (button != null) {
                    if (preset["content"][boss] === 0) {
                        button.setAttribute("disabled", true);
                    } else {
                        button.removeAttribute("disabled");
                    }
                }
            }
        }
    }, [characters, presets]);
    //effect hook that disables the up swap for the first character and the down swap for the last character
    useEffect(() => {
        if (editMode) {
            for (let i = 0; i < characters.length; i++) {
                let swapUpButton = document.getElementById("c" + i + "swapup");
                if (swapUpButton != null) swapUpButton.removeAttribute("disabled");
                let swapDownButton = document.getElementById("c" + i + "swapdown");
                if (swapDownButton != null) swapDownButton.removeAttribute("disabled");
            }

            let firstButtonUp = document.getElementById("c" + 0 + "swapup");
            let lastButtonDown = document.getElementById("c" + (characters.length - 1) + "swapdown");

            if (firstButtonUp != null && lastButtonDown != null) {
                firstButtonUp.setAttribute("disabled", true);
                lastButtonDown.setAttribute("disabled", true);
            }
        }
    }, [characters, editMode]);

    return (
        <>
            <BossingTableP />
        </>

    )
}

export default BossingTableC;