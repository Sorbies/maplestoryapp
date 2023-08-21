import { bossData } from "../../../../../constants/BossData";
import styles from "../../../../../styles/buttons.module.css";

//presentation for changing difficulties
/* props: 
    preset: this component's relevant preset
    boss: this component's relevant boss
    difficulty: this component's relevant difficulty
    handleDifficulty: function that updates the storage with the new desired diff for the boss in the given preset
*/
function ChangeDifficultyP(props) {

    //fetch needed css styles
    const style = styles.normal;

    return (
        <button type="button" key={"preset diff " + props.preset.getKey() + " " + bossData[props.boss]["key"] + " " + props.difficulty}
            className={style} id={"preset diff " + props.preset.getKey() + " " + bossData[props.boss]["key"] + " " + props.difficulty}
            onClick={() => { props.handleDifficulty(props.difficulty, props.preset, props.boss) }}>
            {props.symbol}
        </button>
    );
}

export default ChangeDifficultyP;