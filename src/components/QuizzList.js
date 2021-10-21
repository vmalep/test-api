import React, { useState, useEffect } from 'react'
import axios from 'axios'
import QuizzCard from './QuizzCard'

function QuizzList() {
    const [quizzList, setQuizzList] = useState([])

    useEffect(() => {
        axios.get('https://opentdb.com/api.php?amount=10&type=boolean')
            .then(res => {
                console.log(res)
                setQuizzList(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h2>Quizz List</h2>
            <div className="quizz-cards">
                <QuizzCard />
            </div>
        </div>
    )
}

export default QuizzList;