import { useEffect, useContext } from "react"; //hooks
import { statesContext } from "../../Bossing";
import BossingTableP from "../presentational/BossingTableP"; //components
import { bossData } from "../../../../constants/BossData"; //constants

function BossingTableC(props) {
    //states
    const { characters, presets } = useContext(statesContext);

    return (
        <>
            <BossingTableP />
        </>

    )
}

export default BossingTableC;