import styles from "../../../../../styles/buttons.module.css";

//presentation for deleting characters
/* props: 
    character: the character this component belongs to
*/
function DeleteCharP(props) {
    
    //fetch needed css styles
    const style = styles.btn + " " + styles.normal;

    return (
        <button type="button" className={style} onClick={() => props.deleteChar(props.character)}>
            Delete
        </button>
    );
}

export default DeleteCharP;