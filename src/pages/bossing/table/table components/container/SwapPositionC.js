import { useEffect, useContext } from "react";
import { statesContext } from "../../../Bossing";
import SwapPositionP from "../presentational/SwapPositionP";

function SwapPositionC(props) {
    //states
    const { characters, setCharacters } = useContext(statesContext);

    //effect hook that disables the up swap for the first character and the down swap for the last character
    useEffect(() => {
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

    }, [characters]);

    //functions
    //generic swap function for two items in an array
    const swap = (index1, index2, container) => {
        if (index1 >= 0 && index1 < container.length && index2 >= 0 && index2 < container.length) {
            [container[index1], container[index2]] = [container[index2], container[index1]];
        }
    }

    //swap current char state info with that of previous. Edge case is handled in swap
    const swapUp = (character) => {
        let charIndex = characters.indexOf(character);
        let newCharacters = structuredClone(characters);
        swap(charIndex, charIndex - 1, newCharacters);
        setCharacters(newCharacters);
    }
    //swap current char state info with that of next. Edge case is handled in swap
    const swapDown = (character) => {
        let charIndex = characters.indexOf(character);
        let newCharacters = structuredClone(characters);
        swap(charIndex, charIndex + 1, newCharacters);
        setCharacters(newCharacters);
    }

    return (
        <SwapPositionP character={props.character} swapUp={swapUp} swapDown={swapDown} />
    );
}

export default SwapPositionC;