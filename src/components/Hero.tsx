
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail, Code, Star } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate parallax effect values
  const calcParallax = (strength: number = 30) => {
    if (!isMounted) return { x: 0, y: 0 };
    
    const x = (window.innerWidth / 2 - mousePosition.x) / strength;
    const y = (window.innerHeight / 2 - mousePosition.y) / strength;
    
    return { x, y };
  };

  // Animated typing effect text
  const titles = ["Full-Stack Developer", "Java & Angular Specialist", "Problem Solver", "Tech Enthusiast"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentTitle = titles[currentTitleIndex];
      
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        
        if (displayText.length === currentTitle.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 75 : 150);
    
    return () => clearTimeout(timeout);
  }, [displayText, currentTitleIndex, isDeleting, titles]);

  return (
    <section className="pt-32 pb-20 md:min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.h1 
            className="animate-fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block font-bold text-foreground text-4xl md:text-6xl">Uddeshya Sharma</span>
            <span className="block text-xl md:text-2xl text-highlight mt-2 h-8 inline-flex items-center">
              {displayText}<span className="animate-pulse ml-1">|</span>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I build exceptional digital experiences that combine cutting-edge technology
            with elegant, user-focused design.
          </motion.p>
          
          <motion.div 
            className="flex justify-center space-x-4 pt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:john.doe@example.com" aria-label="Email">
              <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </motion.div>
          
          <motion.div 
            className="pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#about" aria-label="Scroll down">
              <Button variant="ghost" className="rounded-full animate-bounce">
                <ArrowDown className="h-6 w-6" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Interactive background elements with parallax effect */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 bg-highlight/10 rounded-full blur-3xl -z-10"
        animate={{ x: calcParallax(20).x, y: calcParallax(20).y }}
        transition={{ type: "spring", stiffness: 75 }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 bg-accent2/10 rounded-full blur-3xl -z-10"
        animate={{ x: calcParallax(-30).x, y: calcParallax(-30).y }}
        transition={{ type: "spring", stiffness: 50 }}
      />
      
      {/* Floating code-related decorative elements */}
      <motion.div 
        className="absolute top-1/4 right-[15%] text-foreground/20"
        animate={{ 
          x: calcParallax(-15).x,
          y: calcParallax(-15).y,
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{ 
          x: { type: "spring", stiffness: 50 },
          y: { type: "spring", stiffness: 50 },
          rotate: { duration: 10, repeat: Infinity, ease: "linear" }
        }}
      >
        <Code size={40} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/3 left-[20%] text-foreground/20"
        animate={{ 
          x: calcParallax(25).x,
          y: calcParallax(25).y,
          rotate: [0, -5, 0, 5, 0],
        }}
        transition={{ 
          x: { type: "spring", stiffness: 60 },
          y: { type: "spring", stiffness: 60 },
          rotate: { duration: 8, repeat: Infinity, ease: "linear" }
        }}
      >
        <Star size={30} />
      </motion.div>
    </section>
  );
};
