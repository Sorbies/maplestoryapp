import { useEffect, useContext } from "react"; //hooks
import { statesContext } from "../../Bossing";
import BossingTableP from "../presentational/BossingTableP"; //components
import { bosses } from "../../BossingData"; //constants

function BossingTableC(props) {
    const { charNames, charDifficulties } = useContext(statesContext);

    //effect hook that disables buttons for invalid boss difficulties when new characters are added
    useEffect(() => {
        for (let charIndex = 0; charIndex < charNames.length; charIndex++) {
            for (let bossIndex = 0; bossIndex < charDifficulties[charIndex].length; bossIndex++) {
                for (let difficulty = 1; difficulty <= 5; difficulty++) {
                    if (bosses[bossIndex][difficulty] === 0) {
                        let button = document.getElementById("c" + charIndex + "b" + bossIndex + "d" + difficulty);
                        button.setAttribute("hidden", true);
                    }
                }
            }
        }
    }, [charNames]);
    //effect hook that disables the clear status button for skipped bosses
    useEffect(() => {
        for (let charIndex = 0; charIndex < charNames.length; charIndex++) {
            for (let bossIndex = 0; bossIndex < charDifficulties[charIndex].length; bossIndex++) {
                let button = document.getElementById("c" + charIndex + "b" + bossIndex + "button");
                if (charDifficulties[charIndex][bossIndex] === 1) {
                    button.setAttribute("disabled", true);
                } else {
                    button.removeAttribute("disabled");
                }
            }
        }
    });

    return (
        <>
            <BossingTableP/>
        </>

    )
}

export default BossingTableC;