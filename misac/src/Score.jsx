import { useEffect } from "react"
import { useOptions } from "./OptionsContext";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function Score({score, setScore}){
    const {highScore} = useOptions();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if(score !== 0)
                setScore(score > 0 ? Math.floor(score*0.999) : Math.ceil(score*0.999))
        }, 10);

        return () => clearTimeout(timeoutId)
    })

    return (
        <div className="score-text-container row">
            <h2 className="score">Score : {score}</h2>
            <h2 className="score">High Score: {highScore}</h2>
        </div>
    )
}

export default Score