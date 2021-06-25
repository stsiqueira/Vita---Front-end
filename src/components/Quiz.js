////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  QUIZ PAGE COMPONENT 
////////////////////////////////////////////////////////////////////////////////////////////////////////



import React from 'react';
import { useState } from 'react';
import QuizAnswer from '../components/sub_components/QuizAnswer'


const Quiz = (props) => {
    const [showQuiz, setShowQuiz] = useState(true)

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
                            <h3>Which fruit contains the most potassium?</h3>
                            <p className="questionDetail">Potassium helps regulate fluid balance, muscle contractions and nerve signals.</p>

                            <QuizAnswer />
                            <QuizAnswer />
                            <QuizAnswer />
                            <QuizAnswer />
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