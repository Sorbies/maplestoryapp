import { useContext } from "react";
import { statesContext } from "../../../Bossing";
import CharacterNameP from "../presentational/CharacterNameP";

function CharacterNameC(props) {
    //states
    const {characters, setCharacters} = useContext(statesContext);

    //functions
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