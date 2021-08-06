////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  TEAM PAGE COMPONENT  - Thiago
////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import TeamMember from './sub_components/TeamMember'
import { useState, useEffect } from 'react';



const Team = (props) => {

    const [teamMembers, setTeamMembers] = useState()

    useEffect(() => {
        (async function () {
            let header = document.querySelector(".header > .max-width-wrapper");
            header.style.removeProperty("width");
            header.style.removeProperty("margin");
        })();
    }, []);
    
    const dbUrl = "http://54.70.7.254:3000/getAllTeam";

    const fetchTeam = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }

    function shuffle(array) {
        var currentIndex = array.length,  randomIndex;
      
        while (0 !== currentIndex) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    // First load
    useEffect(() => {
        const getTeam = async (url) => {
            const teamFromJson = await fetchTeam(url);
            setTeamMembers(teamFromJson[0].teamMembers)
        }
        getTeam(dbUrl);

    },[]);


    return (
       <div className="team">
           <div className="team-title">
               <div className="title">
                <h1>Meet the team</h1>
               </div>
               <div className="description">
                   <p>
                   We are highly motivated individuals who want to make learning about nutrients and vitamins more fun! The goal of our web platform is to help educate individuals in maintaining a healthy lifestyle.
                   </p>
               </div>
               
           </div>
           {
               teamMembers &&
               shuffle(teamMembers).map((teamMember)=>(
                    <TeamMember key={teamMember.id} teamMember={teamMember}/>
               ))
               
           }
           
       </div>
    )
}

export default Team;