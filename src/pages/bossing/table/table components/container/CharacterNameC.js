import { useContext } from "react";
import { statesContext } from "../../../Bossing";
import CharacterNameP from "../presentational/CharacterNameP";

//controller for displaying character name
/* props: 
    character: the character this component belongs to
*/
function CharacterNameC(props) {

    //fetch needed states from context
    const {characters, setCharacters} = useContext(statesContext);

    //function that updates this character's name in storage
    const handleNameChange = (e) => {
        let newCharacters = characters.copy();
        let relevantCharacter = newCharacters.findCharacter(props.character);
        relevantCharacter.setName(e.target.value);

        setCharacters(newCharacters);
    }

    return (
        <CharacterNameP character={props.character} handleNameChange={handleNameChange}/>
    )

}

export default CharacterNameC;