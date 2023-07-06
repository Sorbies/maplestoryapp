import styles from "../../../table/table components/style/buttons.module.css";

function ChangeDifficultyP(props) {
    const style = styles.normal;

    return (
        <button type="button" key={"p" + props.presetIndex + "b" + props.bossIndex + "d" + props.difficulty}
            className={style} id={"p" + props.presetIndex + "b" + props.bossIndex + "d" + props.difficulty}
            onClick={() => { props.handleDifficulty(props.difficulty, props.presetIndex, props.bossIndex) }}>
            {props.symbol}
        </button>
    );
}

export default ChangeDifficultyP;