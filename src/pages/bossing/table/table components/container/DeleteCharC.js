import { useContext } from "react"; //hooks
import { statesContext } from "../../../Bossing"; //states
import DeleteCharP from "../presentational/DeleteCharP"; //components

function DeleteCharC(props) {
    const { charNames, charDifficulties, charProgress } = useContext(statesContext); //retrieve necessary states
    const { setCharNames, setCharDifficulties, setCharProgress } = useContext(statesContext); //retrieve necessary states

    //Deletes an entry from the states when a user delets a character
    const deleteChar = (charIndex) => {
        let newCharNames = charNames.filter((name, index) => index !== charIndex);
        let newCharDifficulties = charDifficulties.filter((difficulties, index) => index !== charIndex);
        let newCharProgress = charProgress.filter((progress, index) => index !== charIndex);

        setCharNames(newCharNames);
        setCharDifficulties(newCharDifficulties);
        setCharProgress(newCharProgress);
    }

    return (
        <DeleteCharP deleteChar={deleteChar} charIndex={props.charIndex}/>
    );
}

export default DeleteCharC;