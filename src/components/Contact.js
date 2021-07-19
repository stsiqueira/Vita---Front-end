////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  TEAM PAGE COMPONENT 
////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';



const Contact = (props) => {

    return (
       <div className="contact">
           <h2> Contact</h2>
           <p><span className="requiredField">*</span> All fields required</p>
           <div className="form">
               <form   
                    action="https://formspree.io/f/mdoydwow"
                    method="POST">
                   <div className="contact-name">
                       <div className="firstName">
                        <label htmlFor="firstName"> First Name <span className="requiredField">*</span> </label>
                        <input type="text" name="firstName"  id="firstName" required/>
                       </div>
                      <div className="lastName">
                        <label htmlFor="lastName"> Last Name</label>
                        <input type="text" name="lastName"  id="lastName" />
                      </div>

                   </div>
                   <div className="contact-email">

                       <label htmlFor="email"> Email <span className="requiredField">*</span> </label>
                       <input type="text" name="email"  id="email" required/>
                   </div>
                   <div className="contact-phone">
                       <div className="phone">
                        <label htmlFor="phone"> Phone <span className="requiredField">*</span> </label>
                        <input type="text" name="phone"  id="phone" required/>
                       </div>
                        <div className="country">
                            <label htmlFor="country"> Country <span className="requiredField">*</span> </label>
                            <input type="text" name="country"  id="country" required/>
                        </div>

                   </div>
                   <div className="contact-message">
                       <label htmlFor="message"> Your message <span className="requiredField">*</span> </label>
                       <textarea required>

                       </textarea>
                   </div>
                   <div className="contact-button">
                       <input type="submit" />
                   </div>
               </form>
           </div>
       </div>
    )
}

export default Contact;