import { useContext } from "react"; //hooks
import { statesContext } from "../../Bossing"; //states
import ModeControlP from "../presentational/ModeControlP"; //components

//Controller for enabling/disabling modes
function ModeControlC(props) {

    //fetch needed states from context
    const { setPresetMode } = useContext(statesContext);

    //method to toggle preset mode
    const togglePreset = () => {
        setPresetMode((prev) => !prev);
    }

    return (
        <ModeControlP togglePreset={togglePreset} />
    );
}

export default ModeControlC;