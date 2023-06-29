import { useContext } from "react";
import { statesContext } from "../../../Bossing";
import CharacterNameP from "../presentational/CharacterNameP";

function CharacterNameC(props) {
    //states
    const {charNames, setCharNames} = useContext(statesContext);

    //functions
    const handleNameChange = (e) => {
        let newCharNames = [...charNames];
        newCharNames[props.charIndex] = e.target.value;

        setCharNames(newCharNames);
    }

    return (
        <CharacterNameP charName={props.charName} charIndex={props.charIndex} handleNameChange={handleNameChange}/>
    )

}

export default CharacterNameC;