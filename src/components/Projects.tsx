
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with inventory management, payment processing, and customer analytics.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tags: ["Java", "Spring Boot", "Angular", "MySQL", "Docker"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Project Management Tool",
    description: "Collaborative project management application with real-time updates, task tracking, and team communication.",
    image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tags: ["TypeScript", "React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Health Tracking App",
    description: "Mobile application for tracking health metrics, exercise routines, and nutritional information.",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tags: ["React Native", "Firebase", "Redux", "Jest"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="overflow-hidden border border-border/40 hover:border-highlight/40 transition-all shadow-sm hover:shadow-md animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Live demo for ${project.title}`}
                >
                  <Button variant="default" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
