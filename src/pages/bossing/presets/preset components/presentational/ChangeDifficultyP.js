import { bossData } from "../../../BossingData";
import styles from "../../../table/table components/style/buttons.module.css";

function ChangeDifficultyP(props) {
    const style = styles.normal;
    

    return (
        <button type="button" key={"preset diff " + props.preset["key"] + " " + bossData[props.boss]["key"] + " " + props.difficulty}
            className={style} id={"preset diff " + props.preset["key"] + " " + bossData[props.boss]["key"] + " " + props.difficulty}
            onClick={() => { props.handleDifficulty(props.difficulty, props.preset, props.boss) }}>
            {props.symbol}
        </button>
    );
}

export default ChangeDifficultyP;