"use client";

import "./PopularPrograms.css";
import {
  FiCode,
  FiLayers,
  FiTrendingUp,
  FiCloud,
} from "react-icons/fi";

const programs = [
  {
    id: 1,
    number: "01",
    title: "Python Full Stack",
    image: "/images/courses/python.webp",
    icon: <FiCode />,
  },
  {
    id: 2,
    number: "02",
    title: "MERN Stack",
    image: "/images/courses/mern.webp",
    icon: <FiLayers />,
  },
  {
    id: 3,
    number: "03",
    title: "Digital Marketing",
    image: "/images/courses/digital-marketing.webp",
    icon: <FiTrendingUp />,
  },
  {
    id: 4,
    number: "04",
    title: "Cloud & DevOps",
    image: "/images/courses/devops.webp",
    icon: <FiCloud />,
  },
];

export default function PopularPrograms() {
  return (
    <section className="popular-programs">
      <div className="popular-container">

        <div className="popular-heading">
          <span className="popular-label">EXPLORE</span>

          <h2>
            Our Popular
            <br />
            <span>Programs</span>
          </h2>
        </div>

        <div className="popular-grid">

          {programs.map((program) => (
            <div
              className="popular-card"
              key={program.id}
            >
              <div className="popular-image-wrapper">

                <img
                  src={program.image}
                  alt={program.title}
                  className="popular-image"
                />

                <div className="popular-icon">
                  {program.icon}
                </div>

              </div>

              <div className="popular-card-bottom">

                <span className="program-number">
                  {program.number}
                </span>

                <h3>{program.title}</h3>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}