import { useState, useEffect, useContext } from "react";
import { statesContext } from "../../../Bossing";
import CheckAllP from "../presentational/CheckAllP";
import styles from "../style/buttons.module.css";

function CheckAllC(props) {
    const { characters, setCharacters } = useContext(statesContext);
    const [allTrue, setAllTrue] = useState(false);
    const [style, setStyle] = useState(styles.btn);
    const [buttonText, setButtonText] = useState("Default");

    //hook that maintains allTrue's trueness whenever a character progress update happens
    useEffect(() => {
        let checkingAllTrue = true;
        for (const boss in props.character["progress"]) {
            if (!props.character["progress"][boss]) {
                checkingAllTrue = false;
                break;
            }
        }

        setAllTrue(checkingAllTrue);
    }, [props.character])

    //hook that customizes the style of the check all button
    useEffect(() => {
        let newStyle = styles.btn + " ";
        newStyle += allTrue ? styles.notDone : styles.clear;
        setStyle(newStyle);
        setButtonText(allTrue ? "✖ All" : "✔ All");
    })

    const toggleAllBoxes = () => {
        let charIndex = characters.indexOf(props.character);
        let newCharacters = structuredClone(characters);

        if (allTrue) {
            for (const boss in newCharacters[charIndex]["progress"]) {
                newCharacters[charIndex]["progress"][boss] = false;
            }
        }
        else {
            for (const boss in newCharacters[charIndex]["progress"]) {
                newCharacters[charIndex]["progress"][boss] = true;
            }            
        }
        
        setCharacters(newCharacters);
    }

    return (
        <CheckAllP toggleAllBoxes={toggleAllBoxes} character={props.character} style={style} buttonText={buttonText}/>
    )
}

export default CheckAllC;