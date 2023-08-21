import styles from "../../../../../styles/buttons.module.css";

//presentation for adding a new character
/* props: 
    newName: the user input for the new name
    handleNewName: the function for updating the new name in state
    addNewChar: the function for adding new character in storage
*/
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