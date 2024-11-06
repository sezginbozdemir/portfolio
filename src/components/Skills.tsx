import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper";
import { Autoplay } from "swiper/modules";
import { SiTypescript, SiRedux, SiTailwindcss, SiNpm } from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaBootstrap,
  FaAws,
} from "react-icons/fa";

function Skills() {
  const techs = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "npm", icon: <SiNpm /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
  ];

  const categories = [
    {
      title: "Front-End",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Bootstrap",
        "TailwindCSS",
      ],
    },
    {
      title: "Back-End",
      skills: ["Node.js", "Express"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB"],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Redux",
        "Git",
        "Docker",
        "AWS S3, EC2",
        "Nginx",
        "Caddy",
        "npm",
        "Vite",
      ],
    },
  ];

  return (
    <>
      <h2>MY SKILLS</h2>
      <div className="skills-container">
        <Swiper
          className="slider"
          modules={[Autoplay]}
          speed={1000}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          slidesPerView={5}
          spaceBetween={0}
          loop={true}
        >
          {techs.map((tech, index) => (
            <SwiperSlide key={index} className="skill-slide">
              <div className="skill-item">
                <div className="icon">{tech.icon}</div>
                <p>{tech.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="skills-detail">
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <strong>{category.title}:</strong> {category.skills.join(", ")}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
