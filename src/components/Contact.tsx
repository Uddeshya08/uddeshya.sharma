
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Github, Linkedin, Mail, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }, 1500);
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 animate-fade-in">
            <Card className="p-6 shadow-md h-full">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="h-6 w-6 text-highlight" />
                <h3 className="text-xl font-semibold">Contact Information</h3>
              </div>
              
              <p className="text-muted-foreground mb-8">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-highlight" />
                  <a href="mailto:john.doe@example.com" className="hover:text-highlight transition-colors">
                    john.doe@example.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-highlight" />
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors">
                    github.com/johndoe
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-highlight" />
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors">
                    linkedin.com/in/johndoe
                  </a>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="md:col-span-3 animate-fade-in animation-delay-200">
            <Card className="p-6 shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-background border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
