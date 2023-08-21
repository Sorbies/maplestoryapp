import { bossData } from "../../../../../constants/BossData";

//presentation that changes clear status of a boss for a character
/* props: 
    character: the character this component belongs to
    boss: the boss this component corresponds to
    style: style of the button
    buttonText: content of the button
*/
function ChangeProgressP(props) {
    
    const id = "progress button " + props.character.getKey() + " " + bossData[props.boss]["key"];

    return (
        <button type="button" key={id} id={id} className={props.style} 
            onClick={() => props.handleCharProgress(props.character, props.boss)}>
            {props.buttonText}
        </button>
    );
}

export default ChangeProgressP;