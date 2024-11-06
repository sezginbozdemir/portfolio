import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import comparisonImg from "../assets/ss-comparison.png";
import inventoryImg from "../assets/ss-inventory.png";
import emrImg from "../assets/ss-emr.png";

function Work() {
  const projects = [
    {
      title: "Product Comparison",
      imgSrc: comparisonImg,
      githubLink: "https://github.com/sezginbozdemir/product-comparison",
      liveLink: "https://d1q49nrom5koc3.cloudfront.net/",
      description:
        "This is a React-based application that fetches product data from multiple local CSV files and displays the products in a searchable and filterable list. ",
    },
    {
      title: "Inventory Solutions",
      imgSrc: inventoryImg,
      githubLink: "https://github.com/sezginbozdemir/inventory-solutions",
      liveLink: "https://inventory-solutions.duckdns.org/",
      description:
        "This is a full-stack inventory management application built with the following technologies: React (with TypeScript), MantineUi, Tailwind CSS, Redux, Node.Js, Express, MongoDB",
    },
    {
      title: "E-commerce Shop",
      imgSrc: emrImg,
      liveLink: "https://emrengros.ro",
      description:
        "An E-commerce site built with CS-Cart that allows customers to browse a diverse range of products across multiple categories. The platform features a user-friendly interface, secure payment options, and an easy checkout process.",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const handleImgClick = (imgSrc) => {
    setSelectedImg(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImg("");
  };

  return (
    <>
      <h2>MY WORK</h2>
      <div className="work-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-details">
              <img
                src={project.imgSrc}
                className="project-screenshot"
                onClick={() => handleImgClick(project.imgSrc)}
              />
              <h4>{project.title}</h4>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="project-links">
              <a href={project.githubLink} target="_blank">
                <FaGithub />
              </a>
              <a href={project.liveLink} target="_blank">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedImg} className="modal-image" />
          </div>
        </div>
      )}
    </>
  );
}

export default Work;
