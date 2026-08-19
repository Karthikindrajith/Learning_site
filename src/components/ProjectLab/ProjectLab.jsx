"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiMonitor,
  FiPlay,
  FiServer,
  FiShoppingBag,
  FiZap,
} from "react-icons/fi";

import "./ProjectLab.css";

const projects = [
  {
    id: "web",
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "E-Commerce Platform",
    description:
      "Build a complete production-ready shopping platform with frontend, backend APIs, authentication and database integration.",
    progress: 76,
    icon: FiShoppingBag,
    technologies: ["React", "Django", "REST API", "MySQL"],
    tasks: [
      { name: "UI Design", status: "done" },
      { name: "Authentication", status: "done" },
      { name: "Product API", status: "done" },
      { name: "Payment Integration", status: "active" },
      { name: "Deployment", status: "pending" },
    ],
  },

  {
    id: "ai",
    number: "02",
    category: "AI PROJECTS",
    title: "AI Career Assistant",
    description:
      "Create an intelligent career assistant that understands user questions, recommends learning paths and delivers smart responses.",
    progress: 64,
    icon: FiCpu,
    technologies: ["Python", "AI", "FastAPI", "React"],
    tasks: [
      { name: "Data Preparation", status: "done" },
      { name: "Backend API", status: "done" },
      { name: "AI Integration", status: "active" },
      { name: "React Interface", status: "pending" },
      { name: "Deployment", status: "pending" },
    ],
  },

  {
    id: "cloud",
    number: "03",
    category: "CLOUD SYSTEMS",
    title: "Cloud Deployment System",
    description:
      "Take a full-stack application from development to production using modern cloud deployment and infrastructure practices.",
    progress: 58,
    icon: FiCloud,
    technologies: ["AWS", "Docker", "Django", "PostgreSQL"],
    tasks: [
      { name: "Application Setup", status: "done" },
      { name: "Database Setup", status: "done" },
      { name: "Docker Setup", status: "active" },
      { name: "Cloud Deployment", status: "pending" },
      { name: "Monitoring", status: "pending" },
    ],
  },

  {
    id: "business",
    number: "04",
    category: "BUSINESS APPS",
    title: "Business Management Suite",
    description:
      "Develop a practical business system with customers, operations, reports, analytics and secure role-based workflows.",
    progress: 83,
    icon: FiLayers,
    technologies: ["Next.js", "Django", "MySQL", "Analytics"],
    tasks: [
      { name: "Dashboard UI", status: "done" },
      { name: "User Management", status: "done" },
      { name: "Business API", status: "done" },
      { name: "Analytics", status: "active" },
      { name: "Production Launch", status: "pending" },
    ],
  },
];

const stages = [
  {
    number: "01",
    name: "Discover",
    text: "Plan",
  },
  {
    number: "02",
    name: "Design",
    text: "Create",
  },
  {
    number: "03",
    name: "Develop",
    text: "Build",
  },
  {
    number: "04",
    name: "Deploy",
    text: "Launch",
  },
];

export default function ProjectLab() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  const ProjectIcon = activeProject.icon;

  return (
    <section className="project-lab" id="project-lab">

      {/* BACKGROUND */}

      <div className="project-lab-grid" />
      <div className="project-lab-dots" />

      <motion.div
        className="project-lab-orb lab-orb-one"
        animate={{
          x: [0, 70, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="project-lab-orb lab-orb-two"
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      <div className="project-lab-container">

        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          className="project-lab-header"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <motion.div
            className="project-lab-badge"
            animate={{
              y: [0, -6, 0],
              rotate: [0, -0.7, 0.7, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span />

            SPS PROJECT LAB

            <FiZap />
          </motion.div>


          <h2>
            Build. Test.
            <span> Launch.</span>
          </h2>


          <p>
            Turn what you learn into real applications.
            Design, develop, test and launch practical projects
            using industry technologies.
          </p>

        </motion.div>


        {/* ==================================================
            DEVELOPMENT JOURNEY
        ================================================== */}

        <motion.div
          className="project-lab-journey"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <div className="lab-journey-track">

            <motion.div
              className="lab-journey-progress"
              initial={{
                width: "0%",
              }}
              whileInView={{
                width: "100%",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
              }}
            />

            <motion.span
              className="journey-energy"
              animate={{
                left: ["0%", "100%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

          </div>


          <div className="lab-stage-grid">

            {stages.map((stage, index) => (
              <motion.div
                className="lab-stage"
                key={stage.name}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.25 + index * 0.18,
                }}
              >

                <motion.div
                  className="lab-stage-node"
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {stage.number}
                </motion.div>

                <strong>
                  {stage.name}
                </strong>

                <span>
                  {stage.text}
                </span>

              </motion.div>
            ))}

          </div>

        </motion.div>


        {/* ==================================================
            ACTIVE PROJECT
        ================================================== */}

        <AnimatePresence mode="wait">

          <motion.div
            key={activeProject.id}
            className="active-project-panel"
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.985,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.45,
            }}
          >

            <div className="active-project-glow" />


            {/* TOP BAR */}

            <div className="active-project-topbar">

              <div className="active-status">

                <motion.span
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />

                ACTIVE PROJECT

              </div>


              <div className="project-completion">
                <span>
                  PROJECT COMPLETION
                </span>

                <strong>
                  {activeProject.progress}%
                </strong>
              </div>

            </div>


            <div className="active-project-content">

              {/* ============================================
                  LEFT
              ============================================ */}

              <div className="active-project-info">

                <span className="project-category">
                  {activeProject.category}
                </span>


                <h3>
                  {activeProject.title}
                </h3>


                <p>
                  {activeProject.description}
                </p>


                {/* TECH */}

                <div className="project-tech-list">

                  {activeProject.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>


                {/* PROGRESS */}

                <div className="project-progress-area">

                  <div className="project-progress-heading">

                    <span>
                      PROJECT PROGRESS
                    </span>

                    <strong>
                      {activeProject.progress}%
                    </strong>

                  </div>


                  <div className="project-progress-track">

                    <motion.div
                      className="project-progress-fill"
                      initial={{
                        width: "0%",
                      }}
                      animate={{
                        width: `${activeProject.progress}%`,
                      }}
                      transition={{
                        duration: 1.3,
                        delay: 0.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <span />
                    </motion.div>

                  </div>

                </div>


                {/* TASKS */}

                <div className="project-task-grid">

                  {activeProject.tasks.map((task) => (
                    <div
                      className={`project-task ${task.status}`}
                      key={task.name}
                    >

                      <span className="task-state">

                        {task.status === "done" ? (
                          <FiCheck />
                        ) : task.status === "active" ? (
                          <span className="task-active-dot" />
                        ) : (
                          <span className="task-pending-dot" />
                        )}

                      </span>

                      {task.name}

                    </div>
                  ))}

                </div>


                <button
                  type="button"
                  className="continue-project-btn"
                >
                  <FiPlay />

                  Continue Building

                  <FiArrowUpRight />
                </button>

              </div>


              {/* ============================================
                  RIGHT - PROJECT VISUAL
              ============================================ */}

              <div className="project-visual-area">

                <motion.div
                  className="project-floating-code code-one"
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, -4, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {"</>"}
                </motion.div>


                <motion.div
                  className="project-floating-code code-two"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  API
                </motion.div>


                <motion.div
                  className="project-floating-code code-three"
                  animate={{
                    y: [0, -8, 0],
                    x: [0, 6, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FiDatabase />
                </motion.div>


                {/* LAPTOP */}

                <motion.div
                  className="project-laptop"
                  animate={{
                    y: [0, -10, 0],
                    rotateY: [0, -2, 0, 2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >

                  <div className="laptop-screen">

                    <div className="laptop-browser-bar">

                      <div className="browser-dots">
                        <span />
                        <span />
                        <span />
                      </div>

                      <div className="browser-address">
                        sps.project/app
                      </div>

                    </div>


                    <div className="laptop-dashboard">

                      <div className="laptop-sidebar">

                        <div className="sidebar-logo">
                          SPS
                        </div>

                        <span />
                        <span />
                        <span />
                        <span />

                      </div>


                      <div className="laptop-main">

                        <div className="laptop-header-line">

                          <div>
                            PROJECT
                          </div>

                          <span />
                        </div>


                        <div className="laptop-ui-grid">

                          <div className="laptop-ui-card large">

                            <div className="ui-chart">

                              <motion.span
                                animate={{
                                  height: ["35%", "70%", "45%", "35%"],
                                }}
                                transition={{
                                  duration: 4,
                                  repeat: Infinity,
                                }}
                              />

                              <motion.span
                                animate={{
                                  height: ["65%", "40%", "80%", "65%"],
                                }}
                                transition={{
                                  duration: 4.5,
                                  repeat: Infinity,
                                }}
                              />

                              <motion.span
                                animate={{
                                  height: ["45%", "85%", "55%", "45%"],
                                }}
                                transition={{
                                  duration: 3.8,
                                  repeat: Infinity,
                                }}
                              />

                              <motion.span
                                animate={{
                                  height: ["75%", "50%", "90%", "75%"],
                                }}
                                transition={{
                                  duration: 4.2,
                                  repeat: Infinity,
                                }}
                              />

                            </div>

                          </div>


                          <div className="laptop-ui-card small">
                            <ProjectIcon />
                          </div>


                          <div className="laptop-ui-card small">
                            <FiDatabase />
                          </div>


                          <div className="laptop-ui-card wide">

                            <div className="fake-code-line line-one" />
                            <div className="fake-code-line line-two" />
                            <div className="fake-code-line line-three" />

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>


                  <div className="laptop-base">

                    <span />

                  </div>

                </motion.div>


                {/* SERVER */}

                <motion.div
                  className="mini-server"
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FiServer />

                  <div>
                    <strong>
                      API
                    </strong>

                    <span>
                      CONNECTED
                    </span>
                  </div>

                  <i />
                </motion.div>


                <div className="project-visual-shadow" />

              </div>

            </div>

          </motion.div>

        </AnimatePresence>


        {/* ==================================================
            EXPLORE PROJECTS
        ================================================== */}

        <div className="explore-projects">

          <motion.div
            className="explore-projects-header"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <span>
              PROJECT UNIVERSE
            </span>

            <h3>
              Explore What
              <strong> You Can Build.</strong>
            </h3>

            <p>
              Choose a project category and explore
              practical development experiences.
            </p>

          </motion.div>


          <div className="project-selector-grid">

            {projects.map((project, index) => {

              const Icon = project.icon;

              const active =
                activeProject.id === project.id;

              return (
                <motion.button
                  type="button"
                  key={project.id}
                  className={`project-selector ${
                    active ? "active" : ""
                  }`}
                  onClick={() =>
                    setActiveProject(project)
                  }
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                >

                  <div className="selector-top">

                    <span>
                      {project.number}
                    </span>

                    <FiArrowUpRight />

                  </div>


                  <motion.div
                    className="selector-icon"
                    animate={
                      active
                        ? {
                            y: [0, -6, 0],
                            rotate: [0, -4, 4, 0],
                          }
                        : {}
                    }
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon />
                  </motion.div>


                  <h4>
                    {project.category}
                  </h4>


                  <p>
                    {project.title}
                  </p>


                  <div className="selector-progress">

                    <span
                      style={{
                        width: `${project.progress}%`,
                      }}
                    />

                  </div>

                </motion.button>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}