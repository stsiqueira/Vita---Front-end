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
                       <label htmlFor="firstName"> First Name</label>
                       <input type="text" name="firstName"  id="firstName" required/>
                       <label htmlFor="lastName"> Last Name</label>
                       <input type="text" name="lastName"  id="lastName" />
                   </div>
                   <div className="contact-email">

                       <label htmlFor="email"> Email</label>
                       <input type="text" name="email"  id="email" required/>
                   </div>
                   <div className="contact-phone">
                       <label htmlFor="phone"> Phone</label>
                       <input type="text" name="phone"  id="phone" required/>
                       <label htmlFor="country"> Country</label>
                       <input type="text" name="country"  id="country" required/>
                   </div>
                   <div className="contact-message">
                       <label htmlFor="message"> Your message</label>
                       <textarea required>

                       </textarea>
                   </div>
                   <dib className="contact-button">
                       <input type="submit" />
                   </dib>
               </form>
           </div>
       </div>
    )
}

export default Contact;