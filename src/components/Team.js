////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  TEAM PAGE COMPONENT  - Thiago
////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import TeamMember from './sub_components/TeamMember'
import { useState, useEffect } from 'react';



const Team = (props) => {
    const data= {
        "teamMembers": [
          {
            "id": 1,
            "name": "Amandeep Singh",
            "vitaPosition":"",
            "position":"Full Stack developer",
            "description":"Experienced professional facilitating cutting-edge engineering solutions to insurance domain clients with a wide range of custom web applications. Proven ability to leverage full-stack knowledge and experience to build, deploy, maintain, and monitor web applications.",
            "developer": true,
            "linkedin":"https://www.linkedin.com/in/amandeep-singh-7b383b202",
            "github":"https://github.com/factorcode",
            "behance":"",
            "imagePath":""
          },
          {
            "id": 2,
            "name": "Ana Carolina Arado Oliveira",
            "vitaPosition":"",
            "position":"UX/UI Designer ",
            "description":"I have a background in Architecture, including the design principles it shares with web design. My main interest is on user-centric design, and the creation of accessible  and rich user experience.",
            "stream": "designer",
            "linkedin":"https://www.linkedin.com/in/ana-carolina-arado/",
            "github":"https://github.com/factorcode",
            "behance":"",
            "imagePath":""
          },
          {
            "id": 3,
            "name": "Diana Malynovska ",
            "vitaPosition":"Project Manager & UX/UI Designer",
            "position":"Project Manager & UX/UI Designer",
            "description":"I am a deadline-driven UX/UI Designer focused on overseeing projects from concept through final delivery. Resourceful and hardworking with vendor sourcing expertise and empowering leadership skills illustrated over 3 years of working in the industry.",
            "stream": "designer",
            "linkedin":"https://www.linkedin.com/in/malynovska-diana/",
            "github":"",
            "behance":"",
            "imagePath":""
          },
          {
            "id": 4,
            "name": "Glen Thomas",
            "vitaPosition":"",
            "position":"BackEnd developer",
            "description":"I was working as a backend developer in India for 3 years with knowledge in developing web applications and scraping public data. I am currently pursuing a post degree diploma in web and mobile application development.",
            "stream": "developer",
            "linkedin":"https://www.linkedin.com/in/glen-thomas-4bb9921a3/ ",
            "github":"https://github.com/glen1995",
            "behance":"",
            "imagePath":""
          },
          {
            "id": 5,
            "name": "Munish Bhambra",
            "vitaPosition":"",
            "position":"UI/UX Designer",
            "description":"A graduated computer degree holder who is keen to do creative and design work. Currently, Pursuing a post-degree diploma in web and mobile application as a designer to get insights to visual creativity and arrange elements to work well together.",
            "developer": false,
            "linkedin":"https://www.linkedin.com/in/munish-bhambra-7805b3203/ ",
            "github":"",
            "behance":"",
            "imagePath":""
          },
          {
            "id": 6,
            "name": "Thiago Siqueira",
            "vitaPosition":"Lead Developer/Front-end Developer",
            "position":"Full Stack developer",
            "description":"I have five years of experience leading people and another five managing projects from a call center’s perspective. Since 2020 I have been discovering a passion for coding at Langara College and I definitely see myself working as a front-end developer after my graduation next December.",
            "developer": true,
            "linkedin":"www.linkedin.com/in/stsiqueira ",
            "github":"https://github.com/stsiqueira",
            "behance":"",
            "imagePath":""
          },
          {
            "id": 7,
            "name": "Viet Tuong Pham ",
            "vitaPosition":"Lead Designer & UX/UI Designer",
            "position":"UX/UI Designer",
            "description":"I have been in the Design field for the past 8 years in many design aspects and I used to work as an Industrial Designer. I am currently studying at Langara College in a Post-Degree program as a Web and Mobile App designer. I am looking forward to being a UX/UI Designer after my graduation from Langara.",
            "developer": false,
            "linkedin":"https://www.linkedin.com/in/tuong-pham-3a1b5b119/",
            "github":"",
            "behance":"https://www.behance.net/vtuongpham",
            "imagePath":""
          }
        ]
      }
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