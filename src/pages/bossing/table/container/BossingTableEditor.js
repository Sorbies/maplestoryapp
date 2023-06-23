import BossingTable from "../presentational/BossingTable";

function BossingTableEditor(props) {
    //This function will allow updating the clear status of the character's bosses.
    const handleProgress = (prevProgress, charIndex, bossIndex) => {
        let newProgress = [...prevProgress]
        newProgress[charIndex][bossIndex] = !prevProgress[charIndex][bossIndex];
        props.setCharProgress(newProgress);
    }

    return (
        <>
            <BossingTable
                charNames={props.charNames} setCharNames={props.setCharNames}
                charDifficulties={props.charDifficulties} setCharDifficulties={props.setCharDifficulties}
                charProgress={props.charProgress} handleProgress={handleProgress} />
        </>

    )
}

export default BossingTableEditor;