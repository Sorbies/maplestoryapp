import styles from "../style/buttons.module.css";

function SwapPositionP(props) {
    const style = styles.btn
    
    return (
        <>
            <button id={"c" + props.charIndex + "swapup"}   className={style} onClick={() => props.swapUp(props.charIndex)}>˄</button>
            <button id={"c" + props.charIndex + "swapdown"} className={style} onClick={() => props.swapDown(props.charIndex)}>˅</button>
        </>
    );
}

export default SwapPositionP;