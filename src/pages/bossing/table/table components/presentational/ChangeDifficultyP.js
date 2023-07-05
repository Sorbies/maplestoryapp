import styles from "../style/buttons.module.css";

function ChangeDifficultyP(props) {
    const style = styles.normal;

    return (
        <button type="button" key={"c" + props.charIndex + "b" + props.bossIndex + "d" + props.difficulty}
            className={style} id={"c" + props.charIndex + "b" + props.bossIndex + "d" + props.difficulty}
            onClick={() => { props.handleDifficulty(props.difficulty, props.charIndex, props.bossIndex) }}>
            {props.symbol}
        </button>
    );
}

export default ChangeDifficultyP;