import React from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
  onClick?: () => void;
}

const ProjectCard = ({
  title = "E-Commerce Platform",
  description = "A modern e-commerce platform built with React, Redux, and Shopify Storefront API. Features include product filtering, cart management, and checkout.",
  imageUrl = "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  technologies = ["React", "Redux", "Shopify API", "Tailwind CSS"],
  liveUrl = "https://example.com",
  githubUrl = "https://github.com/example/project",
  onClick = () => {},
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="h-full group"
    >
      <Card className="h-full flex flex-col overflow-hidden bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
        <div className="relative overflow-hidden h-56">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={onClick}
              className="text-white border-white/80 hover:bg-white/20 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              View Details <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
              Featured
            </Badge>
          </div>
        </div>

        <CardHeader className="pb-3">
          <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
          <CardDescription className="line-clamp-3 text-base text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0 flex-grow">
          <div className="flex flex-wrap gap-2 mt-3">
            {technologies.slice(0, 4).map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-sm px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                {tech}
              </Badge>
            ))}
            {technologies.length > 4 && (
              <Badge variant="outline" className="text-sm px-3 py-1">
                +{technologies.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-4 flex justify-between gap-3">
          <Button variant="default" size="sm" asChild className="flex-1">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="flex-1">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Github className="mr-2 h-4 w-4" /> Code
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
