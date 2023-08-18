import { bossData } from "../../../../../constants/BossData";

function ChangeProgressP(props) {
    //variables
    const id = "progress button " + props.character.getKey() + " " + bossData[props.boss]["key"];

    return (
        <button type="button" key={id} id={id} className={props.style} 
            onClick={() => props.handleCharProgress(props.character, props.boss)}>
            {props.buttonText}
        </button>
    );
}

export default ChangeProgressP;