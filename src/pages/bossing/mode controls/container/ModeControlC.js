import { useContext } from "react"; //hooks
import { statesContext } from "../../Bossing"; //states
import ModeControlP from "../presentational/ModeControlP"; //components

function ModeControlC(props) {
    const { setEditMode, setPresetMode } = useContext(statesContext);

    //functions
    const toggleEditing = () => {
        setEditMode((prev) => !prev);
    }

    const togglePreset = () => {
        setPresetMode((prev) => !prev);
    }

    return (
        <ModeControlP toggleEditing={toggleEditing} togglePreset={togglePreset}/>
    );
}

export default ModeControlC;