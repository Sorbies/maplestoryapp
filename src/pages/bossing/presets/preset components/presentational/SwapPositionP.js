import { useContext } from "react";
import { statesContext } from "../../../Bossing";
import styles from "../../../../../styles/buttons.module.css";


//presentation for buttons that swap preset display orders in the table
/* props: 
    preset: specific preset for this component
    swapUp: function that swaps this preset with the one before
    swapDown: function that swaps this preset with the one after
*/
function SwapPositionP(props) {

    //fetch needed css styles
    const style = styles.btn;

    //fetch needed states from context
    const { presets } = useContext(statesContext);

    //get preset's position for finding the first/last buttons
    const position = presets.findIndexOfPreset(props.preset);
    return (
        <>
            <button key={"p" + position + "swapup"}   id={"p" + position + "swapup"}   className={style} onClick={() => props.swapUp(props.preset)}>˄</button>
            <button key={"p" + position + "swapdown"} id={"p" + position + "swapdown"} className={style} onClick={() => props.swapDown(props.preset)}>˅</button>
        </>
    );
}

export default SwapPositionP;