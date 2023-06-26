function ChangeDifficultyP(props) {
    return (
        <button type="button" key={"c" + props.charIndex + "b" + props.bossIndex + "d" + props.difficulty}
            className="difficulty" id={"c" + props.charIndex + "b" + props.bossIndex + "d" + props.difficulty}
            onClick={() => { props.handleDifficulty(props.difficulty, props.charIndex, props.bossIndex) }}>
            {props.symbol}
        </button>
    );
}

export default ChangeDifficultyP;