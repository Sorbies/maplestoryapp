function CheckAllP(props) {

    return (
        <>
            <button className={props.style} onClick={props.toggleAllBoxes}
                key={"check all " + props.character.getKey()}>
                {props.buttonText}
            </button>
        </>
    )
}

export default CheckAllP;