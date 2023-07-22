import { useContext } from "react"; //hooks
import { statesContext } from "../../../Bossing"; //states
import DeleteCharP from "../presentational/DeleteCharP"; //components

function DeleteCharC(props) {
    //states
    const { characters, setCharacters } = useContext(statesContext); //retrieve necessary states

    //functions
    //Deletes an entry from the states when a user delets a character
    const deleteChar = (character) => {
        let newCharacters = characters.filter((char) => char !== character);
        setCharacters(newCharacters);
    }

    return (
        <DeleteCharP deleteChar={deleteChar} character={props.character}/>
    );
}

export default DeleteCharC;