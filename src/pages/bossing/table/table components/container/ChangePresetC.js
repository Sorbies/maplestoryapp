import { useContext, useState, useEffect } from "react";
import { statesContext } from "../../../Bossing";
import ChangePresetP from "../presentational/ChangePresetP";

//controller for changing the active preset of the character
/* props: 
    character: the character this component belongs to
*/
function ChangePresetC(props) {
    
    //fetch needed states from context
    const { characters, setCharacters } = useContext(statesContext);

    //new state to determine whether to show hidden dropdown or not
    const [ showDrop, setShowDrop ] = useState(false);

    //effect hook that enables the dropdown contents to show or not
    useEffect(() => {
        updateDropdownVisibility();
    }, [showDrop, props.character]);
    const updateDropdownVisibility = () => {
        const dropdownContent = document.getElementById("dropdown content " + props.character["key"]);
        if (dropdownContent != null) {
            if (showDrop) {
                dropdownContent.style.display = "block";
            }
            else {
                dropdownContent.style.display = "none";
            }
        }
    }

    //function that toggles the showDrop state
    const toggleShowDrop = () => {
        setShowDrop((prev) => !prev);
    }

    //function that changes the character's active preset
    function setCharPreset(presetName) {
        let newCharacters = characters.copy();
        let relevantCharacter = newCharacters.findCharacter(props.character);
        relevantCharacter.setPreset(presetName);
        setCharacters(newCharacters);
    }

    return (
        <>
            <ChangePresetP character={props.character} setCharPreset={setCharPreset} toggleShowDrop={toggleShowDrop}/>
        </>
    )
}

export default ChangePresetC;