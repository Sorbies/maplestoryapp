import { useContext } from "react";
import { statesContext } from "../../../Bossing";
import SwapPositionP from "../presentational/SwapPositionP";

function SwapPositionC(props) {
    //states
    const { charNames, charDifficulties, charProgress } = useContext(statesContext);
    const { setCharNames, setCharDifficulties, setCharProgress } = useContext(statesContext);

    //functions
    //generic swap function for two items in an array
    const swap = (index1, index2, container) => {
        if (index1 >= 0 && index1 < container.length && index2 >= 0 && index2 < container.length) {
            const temp = container[index1];
            container[index1] = container[index2];
            container[index2] = temp;
        }
    }

    //swap current char state info with that of previous. Edge case is handled in swap
    const swapUp = (charIndex) => {
        const newCharNames = [...charNames];
        const newCharDifficulties = [...charDifficulties];
        const newCharProgress = [...charProgress];
        
        swap(charIndex, charIndex - 1, newCharNames);
        swap(charIndex, charIndex - 1, newCharDifficulties);
        swap(charIndex, charIndex - 1, newCharProgress);

        setCharNames(newCharNames);
        setCharDifficulties(newCharDifficulties);
        setCharProgress(newCharProgress);
    }
    //swap current char state info with that of next. Edge case is handled in swap
    const swapDown = (charIndex) => {
        const newCharNames = [...charNames];
        const newCharDifficulties = [...charDifficulties];
        const newCharProgress = [...charProgress];
        
        swap(charIndex, charIndex + 1, newCharNames);
        swap(charIndex, charIndex + 1, newCharDifficulties);
        swap(charIndex, charIndex + 1, newCharProgress);

        setCharNames(newCharNames);
        setCharDifficulties(newCharDifficulties);
        setCharProgress(newCharProgress);
    }

    return (
        <SwapPositionP charIndex={props.charIndex} swapUp={swapUp} swapDown={swapDown}/>
    );
}

export default SwapPositionC;