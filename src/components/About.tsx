
import React from "react";
import { Card } from "./ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="p-0 overflow-hidden shadow-lg animate-fade-in">
            <div className="aspect-square overflow-hidden bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop" 
                alt="John Doe" 
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
          
          <div className="space-y-6 animate-fade-in animation-delay-200">
            <p className="text-lg">
              Hello! I'm John, a passionate Full-Stack Developer specializing in Java and Angular.
              With 5+ years of experience, I enjoy building robust applications that solve real-world problems.
            </p>
            
            <p>
              My journey in software development began at the University of Technology, where I earned my
              Bachelor's degree in Computer Science. Since then, I've worked with various companies from startups to
              enterprises, honing my skills and expanding my technical expertise.
            </p>
            
            <p>
              When I'm not coding, you can find me hiking in the mountains, reading tech blogs, or experimenting
              with new frameworks and technologies to stay at the cutting edge of web development.
            </p>
            
            <div className="pt-4">
              <a 
                href="#contact" 
                className="text-highlight hover:text-highlight/80 font-semibold transition-colors"
              >
                Let's work together →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
