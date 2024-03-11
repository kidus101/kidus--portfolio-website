"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "RideShare (Uber Pooing Platform)",
    description: "Project 1 description",
    image: "/images/projects/ride-share-1.jpg",
    tag: ["All", "FullStack"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: " Lucy USA Coding Platform ",
    description:
      "Designed for your child! Have them take part in our recommended courses and be a part of a generation that excels in coding and 21st century skills.",
    image: "/images/projects/landing-page-resized.png",
    tag: ["All", "FullStack"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Furniture Ecommerce Platform",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "FullStack"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Get Jobs ( Freelancing Platform )",
    description:
      "A Streamlined job app for freelancers. Secure platform to connect, communicate, and hire. Features: Skill-based job search, secure authentication, real-time messaging, profile management.",
    image: "/images/projects/getJOBS_app.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Catering-Website - Robust and Scalable Catering Solution ",
    description:
      "The website offers a comprehensive platform for catering services, enabling efficient management and seamless interactions with clients using .NET, ASP.NET, C#, and MongoDB, React.",
    image: "/images/projects/catering-2-resized.png",
    tag: ["All", "Frontend - Figma to React Js"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Digi Truck Website",
    description:
      "Ethiopia’s moving coding classroom. Built to bring students closer to the world of coding and a better learning experience.",
    image: "/images/projects/digitruck-resized.png",
    tag: ["All", "Frontend - Figma to React Js"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Fitness Website",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Hospital Website",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Admin Dashboard Websites",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Tour And Travel Website",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="FullStack"
          isSelected={tag === "FullStack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend - Figma to React Js"
          isSelected={tag === "Frontend - Figma to React Js"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
