import { projectsData, projectFilters } from "./projectsData";

export const projects = projectsData.map((project) => ({
  ...project,
  status: "Live",
  categories: project.categories,
  highlight: project.highlights[0],
  metric: project.keyFeatures[0],
  accent: project.category,
  fullDescription: project.about,
  features: project.keyFeatures,
  challenges: project.highlights.slice(0, 3),
  security: project.techStack.includes("JWT")
    ? ["JWT authentication", "Protected routes", "Role-aware access"]
    : ["Clean data flow", "Input-safe UI structure"],
  deployment: "Deployed with a Vercel-ready frontend workflow.",
  screenshots: ["Dashboard preview", "Feature flow", "Responsive view"]
}));

export { projectFilters };
