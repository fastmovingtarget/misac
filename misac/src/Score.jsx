import {useState, useEffect} from "react"

function Score({score, setScore}){

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setScore(Math.floor(score*0.999))
        }, 10);

        return () => clearTimeout(timeoutId)
    })

    return (
        <h2 className="score">Score : {score}</h2>
    )
}

export default Score