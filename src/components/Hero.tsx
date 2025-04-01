
import React from "react";
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:min-h-screen flex items-center justify-center relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="animate-fade-in">
            <span className="block font-bold text-foreground">John Doe</span>
            <span className="block text-xl md:text-2xl text-muted-foreground mt-2">
              Full-Stack Developer | Java & Angular Specialist
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground animate-fade-in animation-delay-200">
            I build exceptional digital experiences that combine cutting-edge technology
            with elegant, user-focused design.
          </p>
          
          <div className="flex justify-center space-x-4 pt-4 animate-fade-in animation-delay-300">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Button variant="outline" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:john.doe@example.com" aria-label="Email">
              <Button variant="outline" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
          
          <div className="pt-8 animate-fade-in animation-delay-400">
            <a href="#about" aria-label="Scroll down">
              <Button variant="ghost" className="rounded-full animate-bounce">
                <ArrowDown className="h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-highlight/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent2/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};
