////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  TEAM PAGE COMPONENT 
////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import {FaRegCircle} from 'react-icons/fa'



const QuizAnswer = (props) => {

    return (
       <div className="quizAnswer">
           <div className="answer">
            <FaRegCircle className="checkBox" />
            <p>Answer </p>
           </div>
           <div className="message">
               <p>(correct)</p>
           </div>

       </div>
    )
}

export default QuizAnswer;