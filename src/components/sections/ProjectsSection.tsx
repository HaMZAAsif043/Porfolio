import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

import ProjectFilter from "../projects/ProjectFilter";
import ProjectGrid from "../projects/ProjectGrid";
import ProjectModal from "../projects/ProjectModal";
import { projects, type Project } from "@/data/projects";

interface ProjectsSectionProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
}

const ProjectsSection = ({
  title = "My Projects",
  subtitle = "Explore my recent work across web development, 3D rendering, and AI integration.",
  projects: projectsProp = projects,
}: ProjectsSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [filters, setFilters] = useState({
    search: "",
    technologies: [] as string[],
    categories: [] as string[],
  });

  const categories = [
    { id: "", name: "All" },
    { id: "Web Development", name: "Web Dev" },
    { id: "3D Development", name: "3D Dev" },
    { id: "AI/ML", name: "AI/ML" },
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleFilterChange = (newFilters: {
    search: string;
    technologies: string[];
    categories: string[];
  }) => {
    setFilters(newFilters);
  };

  // Get all unique technologies from projects for filter dropdown
  const allTechnologies = Array.from(
    new Set(projectsProp.flatMap((project) => project.technologies)),
  ).sort();

  // Get all unique categories from projects for filter dropdown
  const allCategories = Array.from(
    new Set(projectsProp.map((project) => project.category)),
  ).sort();

  // Filter projects based on active category and search filters
  const filteredProjects = projectsProp.filter((project) => {
    // Filter by category tab
    const matchesCategory = activeCategory
      ? project.category === activeCategory
      : true;

    // Filter by search text
    const matchesSearch = filters.search
      ? project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.description.toLowerCase().includes(filters.search.toLowerCase())
      : true;

    // Filter by selected technologies
    const matchesTechnologies =
      filters.technologies.length > 0
        ? filters.technologies.every((tech) =>
            project.technologies.includes(tech),
          )
        : true;

    // Filter by selected categories from dropdown (different from tabs)
    const matchesFilterCategories =
      filters.categories.length > 0
        ? filters.categories.includes(project.category)
        : true;

    return (
      matchesCategory &&
      matchesSearch &&
      matchesTechnologies &&
      matchesFilterCategories
    );
  });

  return (
    <section className="w-full py-16 bg-background" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 group"
              onClick={() =>
                document
                  .getElementById("project-filters")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Browse Projects
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        <div id="project-filters" className="mb-8">
          <div className="flex flex-col space-y-6">
            {/* Category Tabs */}
            <Tabs
              defaultValue=""
              value={activeCategory}
              onValueChange={setActiveCategory}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-4">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <Separator className="my-2" />

            {/* Advanced Filters */}
            <ProjectFilter
              onFilterChange={handleFilterChange}
              availableTechnologies={allTechnologies}
              availableCategories={allCategories}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <ProjectGrid
          projects={filteredProjects}
          onProjectClick={handleProjectClick}
          selectedCategory={activeCategory}
          searchQuery={filters.search}
        />

        {/* Load More Button - shown if there are many projects */}
        {filteredProjects.length > 6 && (
          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg">
              Load More Projects
            </Button>
          </div>
        )}

        {/* Project Modal */}
        <ProjectModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          project={selectedProject || undefined}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;