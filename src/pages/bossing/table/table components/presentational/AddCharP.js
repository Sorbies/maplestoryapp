import styles from "../style/buttons.module.css";

function AddCharP(props) {
    const style = styles.btn + " " + styles.normal;

    return (
        <>
            Add a new character: <input type="text" className={style} value={props.newName} onChange={props.handleNewName} /> 
            <button onClick={props.addNewChar} className={style}>Add</button>
        </>
    )
}

export default AddCharP;