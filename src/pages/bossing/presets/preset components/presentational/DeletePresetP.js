import styles from "../../../../../styles/buttons.module.css";

//presentation that deletes a preset from the storage
/* props: 
    preset: the relevant preset
*/
function DeletePresetP(props) {
    
    //fetch needed css styles
    const style = styles.btn + " " + styles.normal;

    return (
        <button type="button" className={style} onClick={() => props.deletePreset(props.preset)}>
            Delete
        </button>
    );
}

export default DeletePresetP;