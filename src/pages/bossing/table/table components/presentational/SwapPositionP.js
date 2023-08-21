import { useContext } from "react";
import { statesContext } from "../../../Bossing";
import styles from "../../../../../styles/buttons.module.css";

//presentation that swaps character order
function SwapPositionP(props) {
    
    //fetch needed css styles
    const style = styles.btn;

    //fetch needed states from context
    const { characters } = useContext(statesContext);

    //find position for disabling first/last purposes
    const position = characters.findIndexOfCharacter(props.character)

    return (
        <>
            <button key={"c" + position + "swapup"}   id={"c" + position + "swapup"}   className={style} onClick={() => props.swapUp(props.character)}>˄</button>
            <button key={"c" + position + "swapdown"} id={"c" + position + "swapdown"} className={style} onClick={() => props.swapDown(props.character)}>˅</button>
        </>
    );
}

export default SwapPositionP;