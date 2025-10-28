import React from "react";
import OtherProjectDisplay from "./OtherProjectDisplay";

const MorganStanley = ({
  title,
  subtitle,
  githubLink,
  storyText,
  challenges,
  learningText,
}) => {
  return (
    <OtherProjectDisplay
      title="Morgan Stanley"
      subtitle="Experience"
storyText={[
  "During my time at Morgan Stanley, I worked on two key projects: the migration of a legacy platform to a modern Java-based system and the maintenance of a Python tool developed by a previous intern. My role involved analyzing large, complex codebases to identify opportunities for improvement, refactoring outdated components, and ensuring consistency across new modules through testing. I was also responsible for reporting my progress and blockers to a senior engineer, maintaining thorough documentation, and moving code into production.",
  
  "I collaborated closely with developers, clients, and managers across multiple regions, contributing to projects that directly supported critical business decisions. This included validating data sent to clients and balancing work across multiple concurrent projects, which helped me develop strong organizational and multitasking skills.",

  "Overall, this was a great experience that not only strengthened my technical foundation but also gave me a deeper understanding of how large-scale financial systems operate. It taught me the importance of precision, communication, and accountability in a professional software engineering environment."
]}
      challenges={[
  {
    challenge: [
      "Coordinating effectively with team members across significantly different time zones."
    ],
    solution: [
      "Maximized collaboration during overlapping hours and prioritized independent tasks when teammates were offline."
    ],
  },
  {
    challenge: [
      "Understanding a large and complex database system and unfamiliar financial terminology."
    ],
    solution: [
      "Dedicated time to studying internal documentation, asking targeted questions to teammates, and researching financial and database concepts independently."
    ],
  },
  {
    challenge: [
      "Some legacy features couldn’t be replicated exactly in the new application due to data inconsistencies."
    ],
    solution: [
      "Focused on preserving main purpose of those features by re-implementing them in ways compatible with the new system’s architecture and data model."
    ],
  },
  {
    challenge: [
      "Debugging was time-consuming because the modern application had long build and run times."
    ],
    solution: [
      "Adopted a strategic debugging approach—carefully analyzing all potential causes and hypotheses before running the system to save time and effort."
    ],
  },
  {
    challenge: [
      "Adapting to structured Scrum meetings and expectations."
    ],
    solution: [
      "Maintained detailed notes of progress, blockers, and key discussion points from the meeting to stay organized and communicate effectively."
    ],
  },
  {
    challenge: [
      "Explaining complex technical concepts and limitations to a non-technical audience."
    ],
    solution: [
      "Prepared clear explanations with visuals, examples, and alternative solutions to ensure mutual understanding and effective collaboration."
    ],
  },
]}

      learningText={[
        {
          title:"Outcomes",
          details: [
            "Worked with an international team with members from different backgrounds and time zones",
            "Gained exposure to the finance industry and its specific technologies and terminologies",
            "Learned about the complex process of deploying code to production in a large corporation",
            "Understood the importance of security and permissions protocols to protect sensitive data and systems",
            "Gained experience working with large and complex database systems, including data models, relationships, and queries",
            "Improved documentation skills and SQL querying abilities",
            "Understood the challenge of migrating legacy systems to modern applications",
            "Exposed to the software development lifecycle in a corporate environment",
            "Become more prepared for meetings and discussions by organizing thoughts and materials beforehand"
          ],
        },
      ]}
    />
  );
};

export default MorganStanley;
