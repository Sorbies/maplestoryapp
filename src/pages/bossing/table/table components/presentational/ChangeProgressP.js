import { useContext } from "react"; //hooks
import { statesContext } from "../../../Bossing"; //states

function ChangeProgressP(props) {
    const { charProgress } = useContext(statesContext);

    return (
        <button type="button" key={"c" + props.charIndex + "b" + props.bossIndex + "button"}
            id={"c" + props.charIndex + "b" + props.bossIndex + "button"}
            onClick={() => props.handleCharProgress(props.charIndex, props.bossIndex)}>
            {charProgress[props.charIndex][props.bossIndex] ? "Clear" : "Not Done"}
        </button>
    );
}

export default ChangeProgressP;