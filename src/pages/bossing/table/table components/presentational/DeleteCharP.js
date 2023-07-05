import styles from "../style/buttons.module.css";

function DeleteCharP(props) {
    const style = styles.btn + " " + styles.normal;

    return (
        <button type="button" className={style} onClick={() => props.deleteChar(props.charIndex)}>
            Delete
        </button>
    );
}

export default DeleteCharP;