import { useContext } from "react";
import { statesContext } from "../../../Bossing";
import styles from "../../../../../styles/buttons.module.css";

function SwapPositionP(props) {
    const style = styles.btn;
    const { characters } = useContext(statesContext);
    const position = characters.findIndexOfCharacter(props.character)
    return (
        <>
            <button key={"c" + position + "swapup"}   id={"c" + position + "swapup"}   className={style} onClick={() => props.swapUp(props.character)}>˄</button>
            <button key={"c" + position + "swapdown"} id={"c" + position + "swapdown"} className={style} onClick={() => props.swapDown(props.character)}>˅</button>
        </>
    );
}

export default SwapPositionP;