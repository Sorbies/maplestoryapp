import styles from "../../../../../styles/buttons.module.css";

function DeletePresetP(props) {
    const style = styles.btn + " " + styles.normal;

    return (
        <button type="button" className={style} onClick={() => props.deletePreset(props.preset)}>
            Delete
        </button>
    );
}

export default DeletePresetP;