////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  TEAM PAGE COMPONENT 
////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import {Link} from 'react-router-dom'
import {FaLinkedin, FaBehance, FaGithub} from 'react-icons/fa'



const TeamMember = (props) => {


    return (
       <div className={props.teamMember.name ? `teamMember ${props.teamMember.name}`  : "teamMember"}>
           <div className="teamMemberImg">
             <img src={props.teamMember.imagePath ? props.teamMember.imagePath : ""} alt={props.teamMember.name + " image"} /> 
           </div>
           <div className="teamMemberAbout">
               <h3>{props.teamMember.name ? props.teamMember.name : ""}</h3>
               <p>{props.teamMember.vitaPosition ? props.teamMember.vitaPosition : ""}</p>
               <p>{props.teamMember.position ? props.teamMember.position : ""}</p>
           </div>
           <div className="teamMemberDescription">
                <p>{ props.teamMember.description ? props.teamMember.description : "" }</p>
                <div className="links">
                    {
                        props.teamMember.linkedin ? 
                            <Link to={{ pathname: `${props.teamMember.linkedin}`}} target="_blank" >
                                <FaLinkedin />
                            </Link>
                        : ""
                    }
                    { 
                    props.teamMember ? 
                        props.teamMember.developer ? 
                            <Link to={{ pathname: `${props.teamMember.github}`}} target="_blank">
                                <FaGithub />
                            </Link>
                            
                        : 
                            <Link to={ props.teamMember.behance  } target="_blank">
                                <FaBehance />
                            </Link>
                    : ""
                    
                    }
                </div>
           </div>
       </div>
    )
}

export default TeamMember;