////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  TEAM PAGE COMPONENT 
////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import {FaRegCircle} from 'react-icons/fa'



const QuizAnswer = (props) => {


    return (
       <div className="quizAnswer" 
            onClick={(e)=> 
                props.answer.option === props.correct ?
                props.revealAnswer(true)
                : props.revealAnswer(false)}>
           <div className="answer" >
            <FaRegCircle className="checkBox" />
            <p>{props.answer.value} </p>
           </div>
           <div className="message">
               <p>
                    {
                        props.showCorrectAnswer ?
                        props.answer.option === props.correct ?
                        "correct"
                        :" wrong"
                        : ""
                    }
               </p>
           </div>

       </div>
    )
}

export default QuizAnswer;