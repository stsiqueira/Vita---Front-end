////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  TEAM PAGE COMPONENT 
////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import {useState} from 'react'
import {FaRegCircle} from 'react-icons/fa'



const QuizAnswer = (props) => {
    console.log(props.userAnswer)


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
                props.answer.option === props.correct ?
                props.revealAnswer(true, props.answer.option)
                : props.revealAnswer(false, props.answer.option)
                }  
            }  
        >
           <div className="answer" >
               { 
                props.checked ? 
                    <FaRegCircle className="checkBox checked" />
                :   <FaRegCircle className="checkBox checked" />
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