import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import ExperienceTimeline from "@/components/about/ExperienceTimeline";

interface AboutSectionProps {
  bio?: string;
  resumeUrl?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
  skills?: string[];
  interests?: string[];
}

const AboutSection = ({
  bio = "I'm a passionate frontend developer at Blenspark, specializing in creating immersive 3D configurators using React Three Fiber and exploring AI + Blockchain integration. With expertise in React, Next.js, and Three.js, I love building interactive web experiences that blend cutting-edge design with deep tech. Currently pursuing BS in AI at UMT Lahore while developing production-ready applications that push the boundaries of web technology.",
  resumeUrl = "/Portfolio/Hamza_Asif_Resume_Updated-1.pdf",
  socialLinks = {
    github: "https://github.com/HaMZAAsif043",
    linkedin: "https://linkedin.com/in/hamzaasif043",
    email: "hamzaasif043@gmail.com",
  },
  skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Three.js",
    "WebGL",
    "Redux",
    "Node.js",
    "Python",
    "Django",
    "AI/ML",
    "Responsive Design",
  ],
  interests = [
    "AI Development",
    "Open Source",
    "Interactive Experiences",
    "LLM",
    "NLP",
    "Frontend Performance",
    "Backend Integration",
  ],
}: AboutSectionProps) => {
  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground text-center max-w-2xl">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-card to-card/50 rounded-xl p-8 shadow-lg border border-border/50 h-full hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-primary">My Story</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                {bio}
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href={resumeUrl} download className="flex items-center">
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <FileText className="mr-2 h-4 w-4" /> View Resume
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Skills & Contact Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-card to-card/50 rounded-xl p-8 shadow-lg border border-border/50 h-full hover:shadow-xl transition-shadow duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Let's Connect</h3>
                <div className="flex flex-col space-y-3">
                  {socialLinks.github && (
                    <Button variant="outline" asChild className="justify-start">
                      <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                  )}
                  {socialLinks.linkedin && (
                    <Button variant="outline" asChild className="justify-start">
                      <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                      </a>
                    </Button>
                  )}
                  {socialLinks.email && (
                    <Button variant="outline" asChild className="justify-start">
                      <a
                        href={`mailto:${socialLinks.email}`}
                        className="flex items-center"
                      >
                        <Mail className="mr-2 h-4 w-4" /> Email Me
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <Separator className="my-6" />

              <div>
                <h3 className="text-xl font-bold mb-4 text-primary">Core Skills</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1.5 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-4 text-primary">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1.5 text-sm hover:bg-primary/10 transition-colors duration-200">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ExperienceTimeline />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
