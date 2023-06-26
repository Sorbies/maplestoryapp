import DeleteCharP from "../presentational/DeleteCharP";

function DeleteCharC(props) {
    //Deletes an entry from the states when a user delets a character
    const deleteChar = (charIndex) => {
        let newCharNames = props.charNames.filter((name, index) => index !== charIndex);
        let newCharDifficulties = props.charDifficulties.filter((difficulties, index) => index !== charIndex);
        let newCharProgress = props.charProgress.filter((progress, index) => index !== charIndex);

        props.setCharNames(newCharNames);
        props.setCharDifficulties(newCharDifficulties);
        props.setCharProgress(newCharProgress);
    }

    return (
        <DeleteCharP deleteChar={deleteChar} charIndex={props.charIndex}/>
    );
}

export default DeleteCharC;