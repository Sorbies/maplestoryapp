import { useContext } from "react"; //hooks
import { statesContext } from "../../../Bossing"; //states
import DeleteCharP from "../presentational/DeleteCharP"; //components

//controller that deletes characters
/* props: 
    character: the character this component belongs to. passed down to presentation
*/
function DeleteCharC(props) {
    
    //fetch needed states from context
    const { characters, setCharacters } = useContext(statesContext); //retrieve necessary states

    //function thatDeletes an entry from the states when a user delets a character
    const deleteChar = (character) => {
        let newCharacters = characters.copy();
        newCharacters.deleteCharacter(character);
        setCharacters(newCharacters);
    }

    return (
        <DeleteCharP deleteChar={deleteChar} character={props.character}/>
    );
}

export default DeleteCharC;