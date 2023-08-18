import { useContext } from "react";
import { statesContext } from "../../../Bossing";
import ChangePresetP from "../presentational/ChangePresetP";

function ChangePresetC(props) {
    const { characters, setCharacters } = useContext(statesContext);

    function setCharPreset(presetName) {
        let newCharacters = characters.copy();
        let relevantCharacter = newCharacters.findCharacter(props.character);
        relevantCharacter.setPreset(presetName);
        setCharacters(newCharacters);
    }

    return (
        <>
            <ChangePresetP character={props.character} setCharPreset={setCharPreset}/>
        </>
    )
}

export default ChangePresetC;