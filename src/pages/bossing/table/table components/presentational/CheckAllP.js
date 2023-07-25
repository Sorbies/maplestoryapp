import styles from "../style/buttons.module.css";

function CheckAllP(props) {
    const buttonStyle = styles.btn + " " + styles.normal;

    return (
        <>
            <button className={props.style} onClick={props.toggleAllBoxes}
                key={"check all " + props.character["key"]}>
                {props.buttonText}
            </button>
        </>
    )
}

export default CheckAllP;