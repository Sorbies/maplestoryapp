import { useEffect, useContext } from "react";
import { statesContext } from "../../../Bossing";
import SwapPositionP from "../presentational/SwapPositionP";

function SwapPositionC(props) {
    //states
    const { characters, setCharacters } = useContext(statesContext);

    //effect hook that disables the up swap for the first character and the down swap for the last character
    useEffect(() => {
        for (let i = 0; i < characters.getLength(); i++) {
            let swapUpButton = document.getElementById("c" + i + "swapup");
            if (swapUpButton != null) swapUpButton.removeAttribute("disabled");
            let swapDownButton = document.getElementById("c" + i + "swapdown");
            if (swapDownButton != null) swapDownButton.removeAttribute("disabled");
        }

        let firstButtonUp = document.getElementById("c" + 0 + "swapup");
        let lastButtonDown = document.getElementById("c" + (characters.getLength() - 1) + "swapdown");

        if (firstButtonUp != null && lastButtonDown != null) {
            firstButtonUp.setAttribute("disabled", true);
            lastButtonDown.setAttribute("disabled", true);
        }

    }, [characters]);

    //functions
    //swap current char state info with that of previous. Edge case is handled in swap
    const swapUp = (character) => {
        let newCharacters = characters.copy();
        let charIndex = newCharacters.findIndexOfCharacter(character);
        newCharacters.swap(charIndex, charIndex - 1);
        setCharacters(newCharacters);
    }
    //swap current char state info with that of next. Edge case is handled in swap
    const swapDown = (character) => {
        let newCharacters = characters.copy();
        let charIndex = newCharacters.findIndexOfCharacter(character);
        newCharacters.swap(charIndex, charIndex + 1);
        setCharacters(newCharacters);
    }

    return (
        <SwapPositionP character={props.character} swapUp={swapUp} swapDown={swapDown} />
    );
}

export default SwapPositionC;