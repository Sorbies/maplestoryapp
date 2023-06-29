import { useContext } from "react"; //hooks
import { statesContext } from "../../../Bossing"; //states
import ChangeProgressP from "../presentational/ChangeProgressP";

function ChangeProgressC(props) {
    //states
    const { charProgress, setCharProgress } = useContext(statesContext);

    //functions
    //This function will allow updating the clear status of the character's bosses.
    const handleCharProgress = (charIndex, bossIndex) => {
        let newProgress = [...charProgress]
        newProgress[charIndex][bossIndex] = !charProgress[charIndex][bossIndex];
        setCharProgress(newProgress);
    }

    return (
        <ChangeProgressP charIndex={props.charIndex} bossIndex={props.bossIndex} handleCharProgress={handleCharProgress}/>
    );
}

export default ChangeProgressC;