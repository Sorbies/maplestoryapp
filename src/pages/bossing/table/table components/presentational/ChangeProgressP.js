function ChangeProgressP(props) {
    //variables
    const id = "c" + props.charIndex + "b" + props.bossIndex + "button";

    return (
        <button type="button" key={id} id={id} className={props.style} 
            onClick={() => props.handleCharProgress(props.charIndex, props.bossIndex)}>
            {props.buttonText}
        </button>
    );
}

export default ChangeProgressP;