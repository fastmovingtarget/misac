import {useState, useEffect} from "react"

function Score({score, setScore, highScore}){

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if(score !== 0)
                setScore(score > 0 ? Math.floor(score*0.999) : Math.ceil(score*0.999))
        }, 10);

        return () => clearTimeout(timeoutId)
    })

    return (
        <h2 className="score">Score : {score} High Score: {highScore}</h2>
    )
}

export default Score