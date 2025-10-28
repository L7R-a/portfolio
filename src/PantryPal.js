import React from "react";
import OtherProjectDisplay from "./OtherProjectDisplay";


const PantryPal = ({title, subtitle, githubLink, storyText, challenges, learningText, websiteLink}) => {
    return(

        <OtherProjectDisplay
        title="Hackathon App"
        subtitle="PantryPal"
        githubLink="https://github.com/L7R-a/PantryPal"
        storyText={[
          "During my time at Mthree, I collaborated with a team to develop an email notification system for traffic accidents as the final project of the apprenticeship program. Users could subscribe to updates for a selected city through a React web app, and the system would automatically send email alerts whenever an accident was reported.",
          "I came up with the idea and proposed it to my team and mentor, who agreed it was a great way to showcase what we had learned throughout the program. The idea was inspired by my own experience commuting to work and school, where unexpected accidents could easily cause delays. This system was designed to help users stay informed and plan their routes more efficiently.",
          "The project was built using a Java Spring Boot backend following an MVC architecture, along with React, MySQL, JUnit, JavaMail, and a third-party traffic API. My main contributions included developing the backend RESTful APIs for user management, implementing unit tests, integrating the email notification logic, and contributing to the frontend development."
        ]}

      challenges={[
        {
          title: "Disagreement on Development Tools",
          challenge: [
            "Some of us wanted to use techonologies that we were used to and others wanted to use new technologies that we didn't know how to use."
          ],
          solution:[
            "We decided to use new technologies that we didn't know how to use and consider the event more as an opportunity to learn new technologies rather than competing for a prize."
          ]

        },
        {
          title: "Firebase",
            challenge: [
              "Firebase didn't work as expected. The login page was always showing errors.",
            ],
            solution:[
              "Instead of using Firebase directly, we decided to just use the Firebase Emulator, which we managed to get it to work.",
            ],
          },
          {
            title: "Time Management",
            challenge: [
              "We were spending many hours on features that weren't worth the time."
            ],
            solution:[
              "We took a break from those features and instead focus on creating and integrating the main features."
            ]
  
          },
          {
            title: "Integration",
            challenge: [
              "The frontend wasn't able to call API endpoints succesfully from the backend."
            ],
            solution:[
              "Instead of calling the API with fetch() method we used the axios library, which made it work."
            ]
          }
        
      ]}
      learningText={[ 
"Ultimately, we learned the importance of having a backup plan in advance, as it could have saved us valuable time. We also gained insights into effective time management, particularly the need to set clear timelines to avoid spending excessive time on individual tasks. While exploring new technologies was exciting, we realized the importance of prioritizing the core features of the project before focusing on secondary, albeit intriguing, enhancements. Additionally, we recognized the value of coming better prepared to such events, with a well-defined plan and all necessary tools set up beforehand. Lastly, we developed a deeper understanding of teamwork—how to support one another, debug each other’s code, and collaborate effectively under tight deadlines."







      ]}/>
                  );

};

export default PantryPal