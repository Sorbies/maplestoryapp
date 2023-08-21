//presentation for the checking all bosses button
/* props: 
    character: the character this component belongs to
    style: the button style
    buttonText: the content of the button
    toggleAllBoxes: function that checks all the boxes
*/
function CheckAllP(props) {

    return (
        <>
            <button className={props.style} onClick={props.toggleAllBoxes}
                key={"check all " + props.character.getKey()}>
                {props.buttonText}
            </button>
        </>
    )
}

export default CheckAllP;