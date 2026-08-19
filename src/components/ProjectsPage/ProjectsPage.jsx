"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiBriefcase,
  FiCode,
  FiLayers,
  FiMonitor,
  FiPlusCircle,
  FiShoppingCart,
  FiUsers,
} from "react-icons/fi";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import "./ProjectsPage.css";

/* =========================================================
   FILTER CATEGORIES
========================================================= */

const categories = [
  "All Projects",
  "Web Development",
  "Python",
  "Full Stack",
  "Mobile",
  "Design",
];

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: 1,
    title: "Learning Management System",
    description:
      "A complete LMS with courses, live classes, assignments and student progress tracking.",
    image: "/images/projects/lms.webp",
    category: "Web Development",
    tags: ["Django", "React", "MySQL"],
    icon: FiMonitor,
    color: "purple",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce platform with product management, cart and secure payments.",
    image: "/images/projects/ecommerce.webp",
    category: "Full Stack",
    tags: ["React", "Node.js", "MongoDB"],
    icon: FiShoppingCart,
    color: "blue",
  },
  {
    id: 3,
    title: "Hospital Management System",
    description:
      "Manage patients, appointments, doctors, billing and hospital operations efficiently.",
    image: "/images/projects/hospital.webp",
    category: "Python",
    tags: ["Django", "Python", "MySQL"],
    icon: FiPlusCircle,
    color: "green",
  },
  {
    id: 4,
    title: "Online Exam System",
    description:
      "Online examination system with auto evaluation, results and certificate generation.",
    image: "/images/projects/online-exam.webp",
    category: "Web Development",
    tags: ["Django", "React", "PostgreSQL"],
    icon: FiCode,
    color: "violet",
  },
  {
    id: 5,
    title: "Bus Booking System",
    description:
      "Online bus ticket booking with seat selection, payment gateway and ticket management.",
    image: "/images/projects/bus-booking.webp",
    category: "Python",
    tags: ["Django", "Python", "MySQL"],
    icon: FiBriefcase,
    color: "orange",
  },
  {
    id: 6,
    title: "Job Portal",
    description:
      "Job portal with job listings, applications, company profiles and admin dashboard.",
    image: "/images/projects/job-portal.webp",
    category: "Full Stack",
    tags: ["React", "Node.js", "MongoDB"],
    icon: FiBriefcase,
    color: "pink",
  },
];

/* =========================================================
   WHY SPS PROJECTS
========================================================= */

const whyProjects = [
  {
    icon: FiCode,
    title: "Real-world Projects",
    text: "Work on industry-level projects that solve practical business problems.",
  },
  {
    icon: FiUsers,
    title: "Industry Focused",
    text: "Projects designed around modern technologies and industry standards.",
  },
  {
    icon: FiLayers,
    title: "Portfolio Ready",
    text: "Build strong projects that showcase your skills to recruiters.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="projects-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="projects-hero">

          <div className="projects-hero-pattern" />

          <div className="projects-container projects-hero-grid">

            {/* HERO CONTENT */}

            <motion.div
              className="projects-hero-content"
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              <span className="projects-kicker">
                PROJECTS
              </span>

              <h1>
                Our Projects
              </h1>

              <p>
                Real-world applications built through
                practical learning and innovation.
              </p>

              <div className="projects-title-line">
                <span />
                <span />
              </div>

            </motion.div>


            {/* HERO VISUAL */}

            <motion.div
              className="projects-hero-visual"
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
            >

              <div className="hero-device-glow" />

              <Image
                src="/images/projects/projects-hero.webp"
                alt="SPS project dashboard"
                width={780}
                height={500}
                priority
                className="projects-hero-image"
              />

            </motion.div>

          </div>

        </section>


        {/* =====================================================
            FILTER
        ===================================================== */}

        <section className="projects-filter-section">

          <div className="projects-container">

            <div className="projects-filter">

              {categories.map(
                (category, index) => (
                  <button
                    key={category}
                    type="button"
                    className={
                      index === 0
                        ? "active"
                        : ""
                    }
                  >
                    {category}
                  </button>
                )
              )}

            </div>

          </div>

        </section>


        {/* =====================================================
            PROJECT GRID
        ===================================================== */}

        <section className="projects-grid-section">

          <div className="projects-container">

            <motion.div
              className="projects-grid"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
            >

              {projects.map(
                (project, index) => {

                  const Icon = project.icon;

                  return (
                    <motion.article
                      key={project.id}
                      className={`project-card ${project.color}`}
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.12,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.05,
                      }}
                      whileHover={{
                        y: -7,
                      }}
                    >

                      {/* IMAGE */}

                      <div className="project-image-wrap">

                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 700px) 100vw, 33vw"
                          className="project-image"
                        />

                        <div className="project-image-overlay" />

                        <div className="project-round-icon">
                          <Icon />
                        </div>

                      </div>


                      {/* CONTENT */}

                      <div className="project-card-content">

                        <h2>
                          {project.title}
                        </h2>

                        <p>
                          {project.description}
                        </p>

                        <div className="project-tags">

                          {project.tags.map(
                            (tag) => (
                              <span
                                key={tag}
                              >
                                {tag}
                              </span>
                            )
                          )}

                        </div>

                        <a
                          href="/contact"
                          className="project-view-link"
                        >
                          View Project
                          <FiArrowUpRight />
                        </a>

                      </div>

                    </motion.article>
                  );
                }
              )}

            </motion.div>

          </div>

        </section>


        {/* =====================================================
            WHY SPS PROJECTS
        ===================================================== */}

        <section className="why-projects-section">

          <div className="projects-container">

            <motion.div
              className="why-projects-box"
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <div className="why-projects-label">
                WHY SPS PROJECTS?
              </div>


              <div className="why-projects-items">

                {whyProjects.map(
                  (item) => {

                    const Icon = item.icon;

                    return (
                      <div
                        className="why-project-item"
                        key={item.title}
                      >

                        <div className="why-project-icon">
                          <Icon />
                        </div>

                        <div>

                          <h3>
                            {item.title}
                          </h3>

                          <p>
                            {item.text}
                          </p>

                        </div>

                      </div>
                    );
                  }
                )}

              </div>


              <div className="why-project-visual">

                <div className="books">
                  <span />
                  <span />
                  <span />
                </div>

              </div>

            </motion.div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="projects-cta">

          <div className="projects-container">

            <motion.div
              className="projects-cta-box"
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <div className="projects-cta-icon">
                <FiLayers />
              </div>


              <div className="projects-cta-content">

                <h2>
                  Ready to Build Your Own Project?
                </h2>

                <p>
                  Learn. Build. Deploy. Grow Your Career
                  with SPS Solutions.
                </p>

              </div>


              <a
                href="/contact"
                className="projects-cta-button"
              >
                Start Your Project Journey
                <FiArrowRight />
              </a>

            </motion.div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}