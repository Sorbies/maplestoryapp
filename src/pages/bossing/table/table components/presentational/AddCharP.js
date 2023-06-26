function AddCharP(props) {
    return (
        <>
            Add a new character: <input type="text" value={props.newChar} onChange={props.handleNewChar} /> <button onClick={props.addNewChar}>Add</button>
        </>
    )
}

export default AddCharP;