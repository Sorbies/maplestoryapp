import { useContext } from "react";
import { statesContext } from "../../../Bossing";
import styles from "../style/buttons.module.css";

function SwapPositionP(props) {
    const style = styles.btn;
    const { characters } = useContext(statesContext);
    const position = characters.indexOf(props.character)
    return (
        <>
            <button id={"c" + position + "swapup"}   className={style} onClick={() => props.swapUp(props.character)}>˄</button>
            <button id={"c" + position + "swapdown"} className={style} onClick={() => props.swapDown(props.character)}>˅</button>
        </>
    );
}

export default SwapPositionP;