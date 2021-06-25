////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  QUIZ PAGE COMPONENT 
////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { useState, useEffect } from 'react';
import QuizAnswer from '../components/sub_components/QuizAnswer'


const Quiz = (props) => {
    const [showQuiz, setShowQuiz] = useState(true);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false)
    const [quiz, setQuiz] = useState([]);
    const dbUrl = "http://localhost:5000/questions";

      // Functions
    const fetchQuiz = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
    const revealAnswer = (userAnswer)=>{
        quiz.correct === userAnswer ?
        console.log(" acerto miseravi")
        : console.log("nope")
    }


    // First load
    useEffect(() => {
        const getQuiz = async (url) => {
            const quizFromDB = await fetchQuiz(url);
            setQuiz(quizFromDB.find((question)=> question.id === 1))
        }
        getQuiz(dbUrl);
 
    },[]);

    return (
       <div className="quizPage">
           <div className="quizAbout">
            <h3> Ready to test your Knowledge?</h3>
            <p className="questionDetail">This quiz is intended for you to test your knowledge about vitamins and vitamins. 
    We recommend you review food items and what nutrients they contain as they might appear in the quiz</p>
                <button onClick={()=> setShowQuiz(true)}> Take the Quiz </button>
           </div>
           

            {
                showQuiz ?
                    <div className="quiz">
                        <div className="progress">
                            <div className="progressInNumber">
                                <p>4/10</p>
                            </div>
                            <div className="possibleProgress">
                                <div className="actualProgress">
                                </div>
                            </div>
                        </div>

                        <div className="question">
                            <h3>{quiz.question}</h3>
                            <p className="questionDetail">{quiz.details}</p>
                            {
                                quiz.answers ? 
                                quiz.answers.map((answer)=>(
                                <>
                                    <QuizAnswer 
                                        key={answer.option}
                                        answer={answer}
                                        correct={quiz.correct}
                                        showCorrectAnswer={showCorrectAnswer}
                                        revealAnswer={revealAnswer}/>
                                </>
                                ))
                                : ""
                            }
                            <div className="nextButton">
                                <button>Next</button>
                            </div>
                            
                        </div>
                    </div>
                    :""
            }
            
       </div>
    )
}

export default Quiz;