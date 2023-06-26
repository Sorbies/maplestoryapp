import ChangeProgressP from "../presentational/ChangeProgressP";

function ChangeProgressC(props) {
    //This function will allow updating the clear status of the character's bosses.
    const handleCharProgress = (charIndex, bossIndex) => {
        let newProgress = [...props.charProgress]
        newProgress[charIndex][bossIndex] = !props.charProgress[charIndex][bossIndex];
        props.setCharProgress(newProgress);
    }

    return (
        <ChangeProgressP charIndex={props.charIndex} bossIndex={props.bossIndex} charProgress={props.charProgress} handleCharProgress={handleCharProgress}/>
    );
}

export default ChangeProgressC;