////////////////////////////////////////////////////////////////////////////////////////////////////////
// Subscribe component. 
// 
////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';


const Subscribe = (props) => {
    const [email,setEmail] = useState('');
    // const dbUrl = "http://localhost:5001/emails";

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // const addSubscriber = async (subscriber) => {
	// 	const res = await fetch(dbUrl, {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-type': 'application/json',
	// 		},
	// 		body: JSON.stringify(subscriber)
	// 	})

	// 	await res.json()
	// }

    const pushMail = (e) => { 
        e.preventDefault();

        if(!email) {
            toast.warn("Please add an email", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }); //Change to a toaster function.
            return
        }
        
        if(!validateEmail(email)) {
            toast.warn("Please check your email ID", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }); //Change to a toaster function.
            return
        }
        let templateParams = {
            email: email,
            to_name: email
        };
        emailjs.send(
            'service_qjbys06',
            'template_hiuldmb',
            templateParams,
            'user_6lofy9aPrJcOsF3Yfomhd'
        )
        .then((response) => {
            toast.success("Email Sent Successfully", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });


        // function to push email
        // addSubscriber({email})
        // clear input
        setEmail('');

    }
    return (
       <div className="subscribe-container">
           <div className="image-wrapper">
            <img src="/img/icons/subscribe_icon.svg" alt="Subscribe Icon" />
           </div>
           
           <p className="feature-title">Subscribe to our Newsletters</p>
           <form id="my-form" onSubmit={pushMail}>
               <input type="email" name="email" value={email} 
                    onChange={ (e)=> setEmail(e.target.value) }
                    placeholder="Your email..."/>
               <input type="submit" value='Subscribe' className='subscribeBtn'/>
           </form>
           <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                limit={1}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
       </div>
    )
}

export default Subscribe;