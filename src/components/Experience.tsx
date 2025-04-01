
import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    duration: "Jan 2021 - Present",
    description: "Leading a team of 5 developers to build and maintain enterprise applications using Java, Spring Boot and Angular. Implemented CI/CD pipelines and microservices architecture.",
    achievements: [
      "Reduced application load time by 40% through performance optimization",
      "Led migration from monolithic to microservices architecture",
      "Implemented automated testing that improved code quality by 30%"
    ],
    skills: ["Java", "Spring Boot", "Angular", "Microservices", "Docker", "CI/CD"]
  },
  {
    role: "Full Stack Developer",
    company: "DataSoft Solutions",
    duration: "Mar 2018 - Dec 2020",
    description: "Developed and maintained multiple web applications for clients in the finance and healthcare sectors.",
    achievements: [
      "Built a patient management system that increased staff efficiency by 25%",
      "Implemented responsive designs that improved mobile user engagement by 35%",
      "Established code reviews and best practices for a team of 8 developers"
    ],
    skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "PostgreSQL"]
  },
  {
    role: "Junior Developer",
    company: "WebCrafters Agency",
    duration: "Jun 2016 - Feb 2018",
    description: "Collaborated on various client projects, focusing on frontend development and UI/UX implementation.",
    achievements: [
      "Developed custom WordPress themes for 12+ clients",
      "Integrated payment gateways for e-commerce platforms",
      "Created interactive data visualizations using D3.js"
    ],
    skills: ["HTML/CSS", "JavaScript", "WordPress", "PHP", "jQuery", "Bootstrap"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="space-y-10 relative">
          {/* Timeline stem */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -ml-px hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.company} 
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-4 animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Date marker */}
              <div className="md:w-1/2 flex flex-row md:flex-col items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary flex items-center justify-center z-10 border border-border">
                  <Briefcase className="h-6 w-6 text-highlight" />
                </div>
                <div className={`text-sm text-muted-foreground flex items-center gap-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <Calendar className="h-4 w-4 inline md:hidden" />
                  <span>{exp.duration}</span>
                </div>
              </div>
              
              {/* Content */}
              <Card className={`md:w-1/2 p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 ${index === 0 ? 'border-l-highlight' : 'border-l-accent2'}`}>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-accent2 font-medium">{exp.company}</p>
                  </div>
                  
                  <p className="text-muted-foreground">{exp.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-foreground/80 mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
