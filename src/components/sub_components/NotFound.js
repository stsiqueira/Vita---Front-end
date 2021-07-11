////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  NOT FOUND PAGE COMPONENT 
////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { useHistory} from "react-router-dom";
import VitaBrand from "../../img/404.svg"
import Button from '../compositableComponents/Button';


const NotFound = () => {
    const history = useHistory()

    const redirect = () => {
        history.push({
            pathname: "/"
        });
    }

    return (
        <div className="page-not-found-wrapper">
            <div className="child-wrapper">
                <div className="page-not-found">
                    <div className="svg-text-wrapper">
                        <div className="svg-wrapper">
                            <img src={VitaBrand} alt="404" />
                        </div>
                        <div className="text-wrapper">
                            <h2>Oops..!</h2>
                            <p>
                                We can't seem to find the page
                                you were looking for. Try to
                                search for another or go to our
                                home page.
                            </p>
                            <div className="desktop-button-wrapper">
                                <Button 
                                    text="Back to Home" 
                                    classname="back-to-home-button btn" 
                                    callback={redirect}
                                />
                            </div>
                    </div>
                    </div>
                    
                    <div className="mobile-button-wrapper">
                        <Button 
                            text="Back to Home" 
                            classname="back-to-home-button btn" 
                            callback={redirect}
                        />
                    </div>
                </div>
            </div>
       </div>
    )
}

export default NotFound;