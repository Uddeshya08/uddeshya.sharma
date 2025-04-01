
import React from "react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Angular", "React", "Redux", "SCSS", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "Node.js", "Express", "RESTful APIs", "GraphQL", "Hibernate", "JPA"],
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "Redis", "ElasticSearch"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "Kubernetes", "Jenkins", "AWS", "Azure", "CI/CD", "Jira", "Agile Methodologies"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="p-6 shadow-md hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-highlight">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
