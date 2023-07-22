import { useContext } from "react";
import { statesContext } from "../../../Bossing";
import CharacterNameP from "../presentational/CharacterNameP";

function CharacterNameC(props) {
    //states
    const {characters, setCharacters} = useContext(statesContext);

    //functions
    const handleNameChange = (e) => {
        let charIndex = characters.indexOf(props.character);
        let newCharacters = structuredClone(characters);
        newCharacters[charIndex]["name"] = e.target.value;

        setCharacters(newCharacters);
    }

    return (
        <CharacterNameP character={props.character} handleNameChange={handleNameChange}/>
    )

}

export default CharacterNameC;