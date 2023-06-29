function SwapPositionP(props) {
    return (
        <>
            <button id={"c" + props.charIndex + "swapup"} onClick={() => props.swapUp(props.charIndex)}>˄</button>
            <button id={"c" + props.charIndex + "swapdown"} onClick={() => props.swapDown(props.charIndex)}>˅</button>
        </>
    );
}

export default SwapPositionP;