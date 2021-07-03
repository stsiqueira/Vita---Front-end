////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  QUIZ PAGE COMPONENT 
////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import QuizAnswer from '../components/sub_components/QuizAnswer'
import CalculateImg from "../img/others/nutrient_calculator_icon.svg"
import VitaBrand from "../img/others/home_vita.svg"


const Quiz = (props) => {
    const [showQuiz, setShowQuiz] = useState(false);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false)
    const [retakeQuiz, setRetakeQuiz] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [searchFood, setSearchFood] = useState(false)
    const [quiz, setQuiz] = useState([])
    const [score, setScore] = useState(0)
    const [progress, setProgress] = useState(-1)
    const [allQuestions, setAllQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const dbUrl = "http://localhost:5000/questions";

      // Functions
    const fetchQuiz = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
    const revealAnswer = (userAnswer)=>{
        setShowCorrectAnswer(true)
        userAnswer ? setScore(score+1) : console.log("no")
    }
    const finishQuiz = ()=>{
        setShowResult(true)
        setShowQuiz(false)
    }
    const getNextQuestion = () =>{
        setProgress(progress+1);
        currentQuestion < allQuestions.length ?  
        setQuiz(allQuestions.find((question)=> question.id === currentQuestion+1))
        : finishQuiz()
        setShowCorrectAnswer(false)

    }
    const restartQuiz = () => {
        setRetakeQuiz(!retakeQuiz)
        setShowResult(false)
        setProgress(-1)
        setScore(0)
        setCurrentQuestion(0)
        setShowQuiz(true)
    }

    // First load
    useEffect(() => {
        const getQuiz = async (url) => {
            const quizFromDB = await fetchQuiz(url);
            setAllQuestions(quizFromDB)
        }
        getQuiz(dbUrl);
 
    },[]);
    // ====================

    const notInitialRender = useRef(false)

    useEffect(() => {
        if (notInitialRender.current) {
                getNextQuestion();
        } else {
            notInitialRender.current = true
        }
 
    },[retakeQuiz]);
    // ===============================
    return (
       <div className="quizPage">
           {
               showResult ? "" : 
               showQuiz ? "" : 
          
           <div className="quizAbout">
               <img src={VitaBrand} alt="Vita brand" />
            <h3> Ready to test your Knowledge?</h3>
            <p className="questionDetail">This quiz is intended for you to test your knowledge about vitamins and vitamins. 
    We recommend you review food items and what nutrients they contain as they might appear in the quiz</p>
                <button className="btn"
                    onClick={()=> {
                        setShowQuiz(true);
                        getNextQuestion();
                        setCurrentQuestion(currentQuestion + 1)
                
                }}> Take the Quiz </button>
           </div>
            }

           {
                showQuiz ?
                    <div className="quiz">
                        <div className="progress">
                            <div className="progressInNumber">
                                <p>{progress}/10</p>
                            </div>
                            <div className="possibleProgress">
                                <div className="actualProgress" style={{width: `${progress * 10}%`}}>
                                </div>
                            </div>
                        </div>

                        <div className="question">
                            <h3>{quiz ? quiz.question : ""}</h3>
                            <p className="questionDetail">{quiz ? quiz.details : ""}</p>
                            {
                                quiz ? 
                                quiz.answers.map((answer, key)=>(
                                <>
                                    <QuizAnswer 
                                        key={key}
                                        questionID={quiz.question.id*10 + answer.id}
                                        answer={answer}
                                        correct={quiz.correct}
                                        showCorrectAnswer={showCorrectAnswer}
                                        revealAnswer={revealAnswer}/>
                                </>
                                ))
                                : ""
                            }
                            <div className="nextButton">
                                <button onClick={()=>{
                                    
                                    if (showCorrectAnswer) {
                                    getNextQuestion();
                                    setCurrentQuestion(currentQuestion + 1)
                                    }else{
                                        alert("Please choose an answer")     
                                    } 
                                }}>Next</button>
                            </div>
                            
                        </div>
                    </div>
                    :""
            }
            {
                showResult ? 
                <div className="showResult">
                    <div className="result">
                        <p>{(score*10)}%</p>
                        <p>Well done now you can retake the quiz to polish your knowledge about vitamins and minerals.</p>

                        <button className="btn"
                            onClick={()=>{
                                    
                                    restartQuiz()
                        }}>Retake</button>


                    </div>
                        {!searchFood ? 
                        <>
                    <div className="moreOptions">
                        <div className="nutrientCalculator">
                            <img src={CalculateImg} alt="Nutrient Calculator Icon" />
                            <Link to="/nutrientCalculator">
                                <button className="btn">Calculate</button>
                            </Link>
                            <p>Here you can calculate your daily vitamins and minerals intake</p>

                        </div>
                        <div className="searchFood">
                            <img src={CalculateImg} alt="Search Food Icon" />
                            <Link to="/nutrientCalculator">
                                <button className="btn">Search</button>
                            </Link>

                            <p>Here you can learn more about different fruits and vegetables</p>
                        </div>

                    </div>
                    </>
                    :" verdadeiro"}
                </div>
                : ""
            }
            
       </div>
    )
}

export default Quiz;

