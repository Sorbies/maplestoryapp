import { useContext } from "react";
import { statesContext } from "../../../Bossing";
import styles from "../../../../../styles/buttons.module.css";

function SwapPositionP(props) {
    const style = styles.btn;
    const { presets } = useContext(statesContext);
    const position = presets.findIndexOfPreset(props.preset);
    return (
        <>
            <button key={"p" + position + "swapup"}   id={"p" + position + "swapup"}   className={style} onClick={() => props.swapUp(props.preset)}>˄</button>
            <button key={"p" + position + "swapdown"} id={"p" + position + "swapdown"} className={style} onClick={() => props.swapDown(props.preset)}>˅</button>
        </>
    );
}

export default SwapPositionP;