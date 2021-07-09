////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  QUIZ PAGE COMPONENT 
////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import QuizAnswer from '../components/sub_components/QuizAnswer'
import QuizAnswerType2 from '../components/sub_components/QuizAnswerType2'
import CalculateImg from "../img/others/nutrient_calculator_icon.svg"
import VitaBrand from "../img/others/home_vita.svg"


const quizContent = {
    "questions":[
     {
         "id":1,
         "typeOfQuestion":1,
         "question": "Which fruit contains the most potassium?",
         "details": "Potassium helps regulate fluid balance, muscle contractions and nerve signals.",
         "answers":[
             {"value": "Banana", "option": 1},
             {"value": "Cucumber", "option": 2},
             {"value": "Cranberries", "option": 3},
             {"value": "Peas", "option": 4}
         ],
         "correct": 1
     },
     {
         "id":2,
         "typeOfQuestion":1,
         "question": "Which nutritional deficiency causes hair loss?",
         "details": "Potassium helps regulate fluid balance, muscle contractions and nerve signals.",
         "answers":[
             {"value": "Magnesium", "option": 1},
             {"value": "Iron", "option": 2},
             {"value": "Calcium", "option": 3},
             {"value": "Potassium", "option": 4}
         ],
         "correct": 2
     },
     {
         "id":3,
         "typeOfQuestion":1,
         "question": "Which of the following foods contains yeast?",
         "details": "Potassium helps regulate fluid balance, muscle contractions and nerve signals.",
         "answers":[
             {"value": "Coconut", "option": 1},
             {"value": "Grapes", "option": 2},
             {"value": "Spinach", "option": 3},
             {"value": "Garlic", "option": 4}
         ],
         "correct": 2
     },    {
         "id":4,
         "typeOfQuestion":1,
         "question": "Which of the following boosts your immune system and even helps you fight cancer?",
         "details": "Potassium helps regulate fluid balance, muscle contractions and nerve signals.",
         "answers":[
             {"value": "Meat", "option": 1},
             {"value": "Sugar", "option": 2},
             {"value": "Vegetables", "option": 3},
             {"value": "Carbohydrates", "option": 4}
         ],
         "correct": 3
     },
     {
         "id":5,
         "typeOfQuestion":1,
         "question": " What minerals prevent an infection and bleeding of the gums?",
         "details": "Potassium helps regulate fluid balance, muscle contractions and nerve signals.",
         "answers":[
             {"value": "Iron", "option": 1},
             {"value": "Calcium", "option": 2},
             {"value": "Vitamin C", "option": 3},
             {"value": "Vitamin D", "option": 4}
         ],
         "correct": 3
     },
     {
         "id":6,
         "typeOfQuestion":1,
         "question": "Which of the following vitamins is water soluble?",
         "details": "Potassium helps regulate fluid balance, muscle contractions and nerve signals.",
         "answers":[
             {"value": "Vitamin K", "option": 1},
             {"value": "Vitamin E", "option": 2},
             {"value": "Vitamin C", "option": 3},
             {"value": "Vitamin D", "option": 4}
         ],
         "correct": 3
     },
     {
         "id":7,
         "typeOfQuestion":1,
         "question": "Which of these nutrients main role is to carry oxygen in the hemoglobin?",
         "details": "Potassium helps regulate fluid balance, muscle contractions and nerve signals.",
         "answers":[
             {"value": "Iodine", "option": 1},
             {"value": "Calcium", "option": 2},
             {"value": "Zinc", "option": 3},
             {"value": "Iron", "option": 4}
         ],
         "correct": 4
     },
     {
         "id":8,
         "typeOfQuestion":1,
         "question": "Vitamin A deficiency could lead to one of the following diseases?",
         "details": "Potassium helps regulate fluid balance, muscle contractions and nerve signals.",
         "answers":[
             {"value": "Night Blindness", "option": 1},
             {"value": "Anemia", "option": 2},
             {"value": "Scurvy", "option": 3},
             {"value": "Rickets", "option": 4}
         ],
         "correct": 1
     },
     {
         "id":9,
         "typeOfQuestion":1,
         "question": "Which of the following is a popular product of British Columbia?",
         "details": "Potassium helps regulate fluid balance, muscle contractions and nerve signals.",
         "answers":[
             {"value": "Banana", "option": 1},
             {"value": "Coconut", "option": 2},
             {"value": "Blueberries", "option": 3},
             {"value": "Watermelon", "option": 4}
         ],
         "correct": 3
     },    {
         "id":10,
         "typeOfQuestion":1,
         "question": "Which of the following minerals is necessary to maintain strong teeth and bones?",
         "details": "Potassium helps regulate fluid balance, muscle contractions and nerve signals.",
         "answers":[
             {"value": "Iron", "option": 1},
             {"value": "Potassium", "option": 2},
             {"value": "Zinc", "option": 3},
             {"value": "Calcium", "option": 4}
         ],
         "correct": 4
     }
    ] 
 }

const Quiz = (props) => {
    const [showQuiz, setShowQuiz] = useState(false);
    const [userAnswer, setUserAnswer] = useState(false);
    const [checked, setChecked] = useState(false)
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false)
    const [retakeQuiz, setRetakeQuiz] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [searchFood, setSearchFood] = useState(false)
    const [quiz, setQuiz] = useState([])
    const [score, setScore] = useState(0)
    const [progress, setProgress] = useState(-1)
    const [allQuestions, setAllQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const dbUrl = "http://54.70.7.254:3000/getAllQuiz";

      // Functions
    const fetchQuiz = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
    const revealAnswer = (correct, userAnswer)=>{
        setUserAnswer(userAnswer);
        setShowCorrectAnswer(true)
        setChecked(true)
        correct ? setScore(score+1) : setScore(score)
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
        setChecked(false)
        

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
            // setAllQuestions(quizFromDB)
        }
        getQuiz(dbUrl);
        setAllQuestions(quizContent.questions);
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

                        <div className={quiz.typeOfQuestion === 1 ?"questionType1" : "questionType2"}>
                            <h3>{quiz ? quiz.question : ""}</h3>
                            {
                                quiz ? 
                                quiz.answers.map((answer, key)=>(
                                <>
                                {
                                    quiz.typeOfQuestion === 1 ?
                                        <QuizAnswer 
                                            key={key}
                                            questionID={quiz.question.id*10 + answer.id}
                                            answer={answer}
                                            correct={quiz.correct}
                                            showCorrectAnswer={showCorrectAnswer}
                                            revealAnswer={revealAnswer}
                                            checked={checked}
                                            userAnswer={userAnswer}
                                            typeOfQuestion={quiz.typeOfQuestion}/>
                                        : 
                                        <QuizAnswerType2
                                            key={key}
                                            questionID={quiz.question.id*10 + answer.id}
                                            answer={answer}
                                            correct={quiz.correct}
                                            showCorrectAnswer={showCorrectAnswer}
                                            revealAnswer={revealAnswer}
                                            checked={checked}
                                            userAnswer={userAnswer}/>
                                           
                                }
                                    
                                </>
                                ))
                                : ""
                            }
                            <div className="nextButton">
                                <button className={showCorrectAnswer ? "btn" : "btn disabled"}
                                    onClick={()=>{
                                    
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

