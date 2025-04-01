
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold mb-2">
              <span className="text-highlight">Uddeshya</span> Sharma
            </div>
            <p className="text-muted-foreground text-sm">
              Full-Stack Developer specializing in Java & Angular
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-highlight transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-highlight transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:john.doe@example.com"
              className="text-foreground/60 hover:text-highlight transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Uddeshya Sharma. All rights reserved.</p>
          <p className="mt-1">
            Built with React, TailwindCSS & shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
};
