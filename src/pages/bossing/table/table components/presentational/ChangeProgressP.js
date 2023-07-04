import styles from "../style/ChangeProgressP.module.css";

function ChangeProgressP(props) {

    //variables
    const id = "c" + props.charIndex + "b" + props.bossIndex + "button";
    const button = document.getElementById(id);
    let style = styles.btn + " "; //default styling
    let buttonText = "";
    let isDisabled;

    //scripts
    if (button != null) {
        isDisabled = button.hasAttribute("disabled");

        if (isDisabled) { //determine extra styling
            style += styles.disabled;
        } else {
            style += props.isDone ? styles.clear : styles.notDone;
        }
    
        buttonText = props.isDone ? "Clear" : "Not Done"; //determine text
    }

    return (
        <button type="button" key={id} id={id} className={style}
            onClick={() => props.handleCharProgress(props.charIndex, props.bossIndex)}>
            {buttonText}
        </button>
    );
}

export default ChangeProgressP;