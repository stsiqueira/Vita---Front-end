////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  TEAM PAGE COMPONENT 
////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import TeamMember from './sub_components/TeamMember'
import { useState, useEffect } from 'react';



const Team = (props) => {
    const [teamMembers, setTeamMembers] = useState([])

    const dbUrl = "http://localhost:5002/teamMembers";

    const fetchTeam = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }



    // First load
    useEffect(() => {
        const getTeam = async (url) => {
            const teamFromJson = await fetchTeam(url);
            setTeamMembers(teamFromJson)
        }
        getTeam(dbUrl);

    },[]);
    return (
       <div className="team">
           {
               teamMembers?
               teamMembers.map((teamMember)=>(
                    <TeamMember key={teamMember.id}teamMember={teamMember}/>
               ))
               :""
           }
           
       </div>
    )
}

export default Team;