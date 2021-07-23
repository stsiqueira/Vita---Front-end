////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  TEAM PAGE COMPONENT 
////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { useState, useMemo } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import Select from './compositableComponents/Select';
import countryList from 'react-select-country-list';



const Contact = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ country, setCountry ] = useState("");
    const [ message, setMessage ] = useState("");
    const options = useMemo(() => countryList().getData(), [])

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePhone(phone) {
        const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        return re.test(String(phone).toLowerCase());
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!firstName) {
            toast.warn("Please add your first name", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }
        if(!email) {
            toast.warn("Please add an email", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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
            });
            return
        }

        if(!validatePhone(phone)) {
            toast.warn("Please check your phone number", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }

        if(message.length < 11) {
            toast.warn("Please add more text", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }
        emailjs.sendForm('service_hthvolu', 'template_0ql7h9g', e.target, "user_6lofy9aPrJcOsF3Yfomhd")
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
        }).catch((err) => {
            console.log('FAILED...', err);
        });
    }

    return (
       <div className="contact">
           <h2> Contact</h2>
           <p><span className="requiredField">*</span> All fields required</p>
           <div className="form">
               <form onSubmit={handleSubmit}>
                   <div className="contact-name">
                        <div className="firstName">
                            <label htmlFor="firstName"> First Name <span className="requiredField">*</span> </label>
                            <input 
                                type="text" 
                                name="firstName" 
                                id="firstName" 
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName"> Last Name</label>
                            <input 
                                type="text" 
                                name="lastName"  
                                id="lastName"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                                required
                            />
                        </div>

                   </div>
                   <div className="contact-email">

                       <label htmlFor="email"> Email <span className="requiredField">*</span> </label>
                       <input 
                            type="text" 
                            name="email"  
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                   </div>
                   <div className="contact-phone">
                       <div className="phone">
                            <label htmlFor="phone"> Phone<span className="requiredField">*</span> </label>
                            <input 
                                type="tel" 
                                name="phone"  
                                id="phone"
                                placeholder="Format: +1 (234) 567-8999"
                                minLength={6}
                                maxLength={13}
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                required
                            />
                       </div>
                        <div className="country">
                            <label htmlFor="country"> Country <span className="requiredField">*</span> </label>
                            <Select 
                                name="country"
                                id="country" 
                                classname="country-select"
                                value={country} 
                                flag={true}
                                setvalue={setCountry} 
                                options={options}
                                required={true}
                            />
                            {/* <input 
                                type="text" 
                                name="country" 
                                id="country"
                                value={country}
                                onChange={e => setCountry(e.target.value)}
                                required
                            /> */}
                        </div>

                   </div>
                   <div className="contact-message">
                       <label htmlFor="message"> Your message <span className="requiredField">*</span> </label>
                       <textarea 
                            name="message"
                            id="message"
                            minLength={10}
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            required
                        >

                       </textarea>
                   </div>
                   <div className="contact-button">
                       <input type="submit" />
                   </div>
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
       </div>
    )
}

export default Contact;