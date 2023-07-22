import { useContext } from "react";
import { statesContext } from "../../../Bossing";
import ChangePresetP from "../presentational/ChangePresetP";

function ChangePresetC(props) {
    const { characters, setCharacters } = useContext(statesContext);

    function setCharPreset(preset) {
        let newCharacters = structuredClone(characters);
        let charIndex = characters.indexOf(props.character);
        newCharacters[charIndex]["preset"] = preset["name"];
        setCharacters(newCharacters);
    }

    return (
        <>
            <ChangePresetP character={props.character} setCharPreset={setCharPreset}/>
        </>
    )
}

export default ChangePresetC;