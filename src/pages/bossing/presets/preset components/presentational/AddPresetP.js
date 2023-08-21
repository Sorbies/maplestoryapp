import styles from "../../../../../styles/buttons.module.css";

//presentation for adding a new preset
/* props: 
    newName: the state that stores the name the user is entering
    handleNewName: the function that updates newName with the user's input
    addNewPreset: the function that adds the name to the storage
*/
function AddPresetP(props) {

    //fetch needed css styles
    const style = styles.normal;
    
    return (
        <>
            Add a new preset: <input type="text" className={style} key="add preset" value={props.newName} onChange={props.handleNewName} /> 
            <button onClick={props.addNewPreset} className={style}>Add</button>        
        </>
    );
}

export default AddPresetP;