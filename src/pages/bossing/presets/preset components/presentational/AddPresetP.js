import styles from "../../../../../styles/buttons.module.css";

function AddPresetP(props) {
    const style = styles.normal;
    return (
        <>
            Add a new preset: <input type="text" className={style} key="add preset" value={props.newName} onChange={props.handleNewName} /> 
            <button onClick={props.addNewPreset} className={style}>Add</button>        
        </>
    );
}

export default AddPresetP;