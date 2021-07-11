////////////////////////////////////////////////////////////////////////////////////////////////////////
// Subscribe component. 
// 
////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { useState } from 'react';
import SubscribeIcon  from "../img/icons/subscribe_icon.svg"



const Subscribe = (props) => {
    const [email,setEmail] = useState('');
    const dbUrl = "http://localhost:5001/emails";

    const addSubscriber = async (subscriber) => {
		const res = await fetch(dbUrl, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(subscriber)
		})

		const data = await res.json()
	}

    const pushMail = (e) => { 
        e.preventDefault();

        if(!email) {
            alert("Please add an email"); //Change to a toaster function.
            return
        }

        // function to push email
        addSubscriber({email})
        // clear input
        setEmail('');

    }
    return (
       <div className="subscribe-container">
           <div className="image-wrapper">
            <img src={SubscribeIcon} alt="Subscribe Icon" />
           </div>
           
           <p className="feature-title">Subscribe to our Newsletters</p>
           <form onSubmit={pushMail}>
               <input type="email" value={email} 
                    onChange={ (e)=> setEmail(e.target.value) }
                    placeholder="Your email..."/>
               <input type="submit" value='Subscribe' className='subscribeBtn'/>
           </form>
       </div>
    )
}

export default Subscribe;