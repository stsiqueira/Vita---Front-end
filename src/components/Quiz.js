////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  QUIZ PAGE COMPONENT 
////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import QuizAnswer from '../components/sub_components/QuizAnswer'
import QuizAnswerType2 from '../components/sub_components/QuizAnswerType2'

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
    var randomQuiz;
      // Functions
      function shuffle(array) {
        var currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }
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
        setQuiz(allQuestions.find((question)=> question.randomQuestionID === currentQuestion+1))
        : finishQuiz()
        setShowCorrectAnswer(false)
        setChecked(false)
        

    }
    const restartQuiz = () => {
        randomQuiz = shuffle(allQuestions);
            for (let index = 0; index < randomQuiz.length; index++) {
                randomQuiz[index]["randomQuestionID"] = index + 1;                
            }
        setAllQuestions(randomQuiz);
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
            randomQuiz = shuffle(quizFromDB[0].questions);
            for (let index = 0; index < randomQuiz.length; index++) {
                randomQuiz[index]["randomQuestionID"] = index + 1;                
            }
            setAllQuestions(randomQuiz);
        }
        getQuiz(dbUrl);
    },[]);
    // ====================
    function toastMessage(str) {
        var message = document.getElementById("toast");
        message.innerText = str;
        if(str != ""){
            message.className = "show";
            setTimeout(function(){ message.className = message.className.replace("show", ""); }, 3000);
        }
    }
    const notInitialRender = useRef(false)

    useEffect(() => {
        if (notInitialRender.current) {
                getNextQuestion();
                setCurrentQuestion(currentQuestion + 1)
        } else {
            notInitialRender.current = true
        }
 
    },[retakeQuiz]);
    
    useEffect(() => {
        (async function () {
            let header = document.querySelector(".header > .max-width-wrapper");
            header.style.removeProperty("width");
            header.style.removeProperty("margin");
        })();
    }, []);
    // ===============================
    return (
       <div className="quizPage">
           {
               showResult ? "" : 
               showQuiz ? "" : 
          
           <div className="quizAbout">
               <img src="/img/icons/home_vita.svg" alt="Vita brand" />
            <h3> Ready to test your Knowledge?</h3>
            <p className="questionDetail">This quiz is intended for you to test your knowledge about vitamins and minerals. 
    We recommend you review food items and what nutrients they contain as they might appear in the quiz.</p>
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
                                            typeOfQuestion={quiz.typeOfQuestion}
                                            toastMessage={ () => {toastMessage("Answer already selected, click Next")}}
                                            />
                                        : 
                                        <QuizAnswerType2
                                            key={key}
                                            questionID={quiz.question.id*10 + answer.id}
                                            answer={answer}
                                            correct={quiz.correct}
                                            showCorrectAnswer={showCorrectAnswer}
                                            revealAnswer={revealAnswer}
                                            checked={checked}
                                            userAnswer={userAnswer}
                                            toastMessage={() => {toastMessage("Answer already selected, click Next")}}
                                            />
                                           
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
                                            toastMessage("Please choose an answer"); 
                                        } 
                                }}>Next</button>
                            </div>
                            <div id="toast"></div>
                        </div>
                    </div>
                    :""
            }
            {
                showResult ? 
                <div className="showResult">
                    <div className="result">
                        <p>{(score*10)}%</p>
                        <p>Well done! Retake the quiz to strengthen your knowledge about vitamins and minerals.</p>

                        <button className="btn"
                            onClick={()=>{
                                    
                                    restartQuiz()
                        }}>Retake</button>


                    </div>
                        {!searchFood ? 
                        <>
                    <div className="moreOptions">
                        <div className="nutrientCalculator">
                        <img src="/img/icons/nutrient_calculator_icon.svg" alt="Nutrient Calculator Icon" />
                            <Link to="/nutrientCalculator">
                                <button className="btn">Calculate</button>
                            </Link>
                            <p>Here you can calculate your daily vitamins and minerals intake</p>

                        </div>
                        <div className="searchFood">
                        <img src="/img/icons/search_icon.svg" alt="Search Food Icon" />
                            <Link to="/">
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

