////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  TEAM PAGE COMPONENT 
////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import Watermelon from "../../img/fruits/watermelon.svg"



const QuizAnswer = (props) => {
    return (
                <div 
                    className=                   
                            {
                                props.showCorrectAnswer ?
                                props.answer.option === props.correct ?
                                "quizAnswerType2 correct"
                                : props.answer.option === props.userAnswer ?
                                "quizAnswerType2 wrong"
                                : "quizAnswerType2" 
                                : "quizAnswerType2" 
                            }
                    onClick={ (e)=> {
                                !props.showCorrectAnswer ?
                                props.answer.option === props.correct ?
                                props.revealAnswer(true, props.answer.option)
                                : props.revealAnswer(false, props.answer.option)
                                : alert("You cannot change your answer")
                            }  
                    }  
                >
                    <div 
                        className="answer" 
                    >
                        <img src={Watermelon} alt="fruit" />
                        <p>{props.answer.value} </p>
                    </div>


                </div>
    )
}

export default QuizAnswer;