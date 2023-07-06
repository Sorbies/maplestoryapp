import styles from "../../../table/table components/style/buttons.module.css";

function AddPresetP(props) {
    const style = styles.normal;
    return (
        <>
            Add a new preset: <input type="text" className={style} value={props.newPreset} onChange={props.handleNewPreset} /> 
            <button onClick={props.addNewPreset} className={style}>Add</button>        
        </>
    );
}

export default AddPresetP;