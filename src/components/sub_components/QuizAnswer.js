////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  TEAM PAGE COMPONENT 
////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import {FaRegCircle, FaCircle} from 'react-icons/fa'



const QuizAnswer = (props) => {

    return (
       <div className=                   
                {
                    props.showCorrectAnswer ?
                        props.answer.option === props.correct ?
                            "quizAnswer correct"
                        : props.answer.option === props.userAnswer ?
                        "quizAnswer wrong"
                        : "quizAnswer" 
                    : "quizAnswer" 
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
           <div className="answer" >
               { 
                props.checked &&
                props.answer.option === props.userAnswer ? 
                    <FaCircle className="checkBox checked" /> 
                :   <FaRegCircle className="checkBox" /> 
                }
            <p>{props.answer.value} </p>
           </div>
           <div className="message">
               <p>
                    {
                        props.showCorrectAnswer ?
                        props.answer.option === props.correct ?
                        "correct"
                        :""
                        : ""
                    }
               </p>
           </div>

       </div>
    )
}

export default QuizAnswer;