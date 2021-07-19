////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  TEAM PAGE COMPONENT  - Thiago
////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import TeamMember from './sub_components/TeamMember'
import { useState, useEffect } from 'react';



const Team = (props) => {

    const [teamMembers, setTeamMembers] = useState()

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