function DeleteCharP(props) {
    return (
        <button type="button" onClick={() => props.deleteChar(props.charIndex)}>
            Delete
        </button>
    );
}

export default DeleteCharP;