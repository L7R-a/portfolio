import React from "react";
import ProjectDisplay from "./ProjectDisplay";

import "./Projects.css";

const Capstone = () => {
  return (
    <ProjectDisplay
      title="University of Central Florida"
      subtitle="Network Visualization Analysis"
      videoSrc="https://www.youtube.com/embed/YtRzIC60dlU"
      githubLink="https://github.com/L7R-a/REPRINT"
      storyText={[
                    "In this project, the sponsor was the History and Humanities department of the University of Central Florida, and it was funded by the National Archives. The goal of this project was to create a full stack application that would help historian researchers to visualize and analyze data that was inside of a database as a network or a gallery. More in detail, the data is about the relationships and the letters that individuals sent to each other in the US and other European countries in 17th and 18th centuries.",
                    "Some of the technologies we used were React.js, Prime React library, Sigma.js, CSS, Express.js, AWS services, and MySQL workbench to view the databse. My main focus in this project was making all the frontend of the application except for the network graph itself, such as the sidecars, prototypes, styling, query page, and the gallery page of the website.",
                    "We worked very closely with the sponsors to ensure we were meeting their requirements and expectations throughout all stages of the SDLC. Our team followed Agile and Scrum methodologies — conducting regular sprint planning, stand-up meetings, and retrospectives to stay aligned, adapt quickly to feedback, and continuously improve our deliverables.",                    
                    "The project was completed and presented to a jury of professors and researchers of the department, and passed with documentation to an upcomming team that will keep developing the website.",  
                ]}
      const learningText = {[
                    {
                      title: "Client Oriented Focus",
                      details: [
                        "Learned how to work with a sponsor/client and how to meet their requirements",
                        "Had multiple meetings with the sponsors to show the progress, get feedback, and next steps",
                        "Understood the importance of knowing clients' expectations and tendencies when using websites"
                      ]
                    },
                    {
                      title: "Frontend",
                      details: [
                        "Used Prime React components throughout the website to make it look professional",
                        "Developed components so that they are very reusable in any page of the website",
                        "Allowed users to dynamically change the theme color of the website",
                        "Applied best practices to call the API endpoints and fetch large amounts of data",
                        "Displayed fetch PDFs in the website",
                        "Improved React.js, hooks, and CSS skills"
                      ]
                    },
                    {
                      title: "Teamwork",
                      details: [
                        "Worked very closely with the team to make sure my components were working with their components",
                        "Solved merge conflicts on GitHub and helped other team members when they needed it",
                        "Learned how to communicate with the team, express my ideas, listen to others' ideas, and make decisions together",
                      ]
                    },
                  ]}
      challenges={[
        {
          title: "Database",
          challenge: [
            "Database was very complex and was consantly changing while working on the frontend."
          ],
          solution:[
            "I had to constantly ask the API developer to receive the data in the same format as before and if it wasn't possible, refactor the code to make it work with the new data."
          ]
        },
        {
          title: "Unclear Requirement Details",
          challenge: [
            "Sometimes the sponsors were not very clear or would change their minds on what they wanted.",
          ],
          solution:[
            "Design a prototype of each feature before implementing it, so they can see how it could work and then we would discuss about it."
          ]

        },
        {
          title: "Disagreements with Team Members",
          challenge: [
            "Sometimes we would disagree on the coding implementation or the design of the website with other team members."
          ],
          solution:[
            "We would discuss the problem in detail and try to find a solution that would work for both of us. If we couldn't find a solution, we would ask the rest of the team or the sponsors to make the decision."
          ]

        },
        {
          title: "Refactoring Prime React Components",
          challenge: [
            "Some Prime React components were not working as expected for the project."
          ],
          solution:[
            "I had to read in detail the documentation of the components and then redesign the styling or add more components in addition."
          ]

        },
        {
          title: "Displaying Sidecar Information",
          challenge: [
            "When users added, deleted, or reordered sidecars, the tab information displaying would reset to Biography."
          ],
          solution:[
            "I had to create a state in the parent component that would keep track of the current tab and then pass it as a prop to the sidecar component."
          ]

        },
      ]}
      showKnownBugs = {false}
      websiteLink = "https://chdr.cs.ucf.edu/REPRINT/"
    />
  );
};


export default Capstone;
