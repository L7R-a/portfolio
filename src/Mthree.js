import React from "react";
import ProjectDisplay from "./ProjectDisplay";

const Mthree = () => {
    return(

        <ProjectDisplay
        title="Mthree"
        videoSrc="https://www.youtube.com/embed/CJ6On2To3JE"
        subtitle="Car Accident Email Notification System"
        githubLink="https://github.com/L7R-a/CrashReport"
        storyText={[
            "During my time at Mthree, I worked with a team on a project to develop an email notification system for car accidents to conclude the apprenticeship program. Users would need to first go to the React app subscribe to one of the cities available with their email, then, every set amount of time, an email would be sent to the user if there was any accident.",
            "I was the one that came up with the idea of the project and proposed it to my team and mentor, and we all agreed it was a great idea to showcase what we learned during the program. This idea was inspired by my own experience of having to commute to work or school and and being potentially late due to accidents on the road. This system would help users stay informed about accidents in their area and plan their routes accordingly.",
            "This project was built using an MVC architecture with Java Spring Boot, React, MySQL, JUnit, JavaMail, and a third party API to get the accident data. My main contributions to this project were developing the backend RESTful APIs for users' data, implementing unit tests, frontend, and email logic.",
            "The project was a success, and we were able to showcase it to other teams and our mentor. It served as a strong demonstration of our ability to design, build, and deliver a full-stack application within a limited timeframe while following Agile principles, conducting code reviews, and collaborating effectively as a team."
        ]}
      challenges=
      {[
        {
          challenge: [
            "Finding the right technologies and set up for the notification system and the accident data retrieval.",
        ],
          solution:[
            "After researching various options, we decided to use JavaMail for sending emails and TomTom third-party API that provided real-time accident data. Setting up JavaMail involved creating an dedicated Gmail account and configuring security settings and ensuring secure authentication. We also had to communicate well as a team to understand what was needed for both API and email functionalities to work together."
          ],
        },
        {
            challenge: [
              "Determining how should the system check for new accidents and send notifications without overwhelming users with emails.",
            ],
            solution: [
              "Implemented a scheduled task that runs at specific intervals to check for new accidents and send notifications."
            ]
        }
      ]}
      learningText={[
        {
        title : "Outcomes",
        details: [
            "Solidified understanding of OOP, exception handling, data structures, and collections",
            "Gained experience with the MVC architecture, writing unit cases with JUnit, and building RESTful APIs with Spring Boot", 
            "Learned to integrate third-party APIs like TomTom and JavaMail",
            "Improved leadership and collaboration skills in remote team environments"
        ]

      }
      ]}/>
    );

};

export default Mthree;