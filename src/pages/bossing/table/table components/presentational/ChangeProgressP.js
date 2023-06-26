function ChangeProgressP(props) {
    return (
        <button type="button" key={"c" + props.charIndex + "b" + props.bossIndex + "button"}
            id={"c" + props.charIndex + "b" + props.bossIndex + "button"}
            onClick={() => props.handleCharProgress(props.charIndex, props.bossIndex)}>
            {props.charProgress[props.charIndex][props.bossIndex] ? "Clear" : "Not Done"}
        </button>
    );
}

export default ChangeProgressP;