import React, { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Search } from "lucide-react";

import ProjectCard from "./ProjectCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/projects";

interface ProjectGridProps {
  projects?: Project[];
  onProjectClick?: (project: Project) => void;
  selectedCategory?: string;
  searchQuery?: string;
}

const ProjectGrid = ({
  projects: projectsProp = projects,
  onProjectClick = () => {},
  selectedCategory = "",
  searchQuery = "",
}: ProjectGridProps) => {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  // Filter projects based on category and search query
  const filteredProjects = projectsProp.filter((project) => {
    const matchesCategory = selectedCategory
      ? project.category === selectedCategory
      : true;
    const matchesSearch = localSearchQuery
      ? project.title.toLowerCase().includes(localSearchQuery.toLowerCase()) ||
        project.description
          .toLowerCase()
          .includes(localSearchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(localSearchQuery.toLowerCase())
        )
      : true;

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-background">
      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search projects..."
            className="pl-10 w-full"
            value={localSearchQuery}
            onChange={(e) => setLocalSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Showing {filteredProjects.length} of {projectsProp.length} projects
          </span>
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                onClick={() => onProjectClick(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="rounded-full bg-muted p-6 mb-4">
            <Search className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No projects found</h3>
          <p className="text-muted-foreground max-w-md">
            We couldn't find any projects matching your search criteria. Try
            adjusting your filters or search query.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
