////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  TEAM PAGE COMPONENT 
////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';


const QuizAnswer = (props) => {
    let itemImageUrl = "/img/fruit/";
    let test = "WATERMELON";
    return (
                <div 
                    className=                   
                            {
                                props.showCorrectAnswer ?
                                props.answer.option === props.correct ?
                                "quizAnswerType2 correct"
                                : props.answer.option === props.userAnswer ?
                                "quizAnswerType2 wrong"
                                : "quizAnswerType2 disabled" 
                                : "quizAnswerType2" 
                            }
                    onClick={ (e)=> {
                                !props.showCorrectAnswer ?
                                props.answer.option === props.correct ?
                                props.revealAnswer(true, props.answer.option)
                                : props.revealAnswer(false, props.answer.option)
                                : props.toastMessage()
                            }  
                    }  
                >
                    <div 
                        className="answer" 
                    >
                        <img src={props.answer.path} alt={props.answer.value + " image"} /> 
                        <p>{props.answer.value} </p>
                    </div>


                </div>
    )
}

export default QuizAnswer;