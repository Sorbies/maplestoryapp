import { useState, useEffect } from "react";
import BossingTableP from "../presentational/BossingTableP";
import { bosses } from "../../BossingData";

function BossingTableC(props) {

    //effect hook that disables buttons for invalid boss difficulties when new characters are added
    useEffect(() => {
        for (let charIndex = 0; charIndex < props.charNames.length; charIndex++) {
            for (let bossIndex = 0; bossIndex < props.charDifficulties[charIndex].length; bossIndex++) {
                for (let difficulty = 1; difficulty <= 5; difficulty++) {
                    if (bosses[bossIndex][difficulty] === 0) {
                        let button = document.getElementById("c" + charIndex + "b" + bossIndex + "d" + difficulty);
                        button.setAttribute("hidden", true);
                    }
                }
            }
        }
    }, [props.charNames]);
    //effect hook that disables the clear status button for skipped bosses
    useEffect(() => {
        for (let charIndex = 0; charIndex < props.charNames.length; charIndex++) {
            for (let bossIndex = 0; bossIndex < props.charDifficulties[charIndex].length; bossIndex++) {
                let button = document.getElementById("c" + charIndex + "b" + bossIndex + "button");
                if (props.charDifficulties[charIndex][bossIndex] === 1) {
                    button.setAttribute("disabled", true);
                } else {
                    button.removeAttribute("disabled");
                }
            }
        }
    });


    //functions







    return (
        <>
            <BossingTableP
                charNames={props.charNames} setCharNames={props.setCharNames}
                charDifficulties={props.charDifficulties} setCharDifficulties={props.setCharDifficulties}
                charProgress={props.charProgress} setCharProgress={props.setCharProgress}/>

        </>

    )
}

export default BossingTableC;