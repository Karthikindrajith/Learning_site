"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  FiArrowUpRight,
  FiBookOpen,
  FiBriefcase,
  FiCheck,
  FiCode,
  FiCpu,
  FiDatabase,
  FiFileText,
  FiLayers,
  FiMonitor,
  FiCloud,
  FiUsers,
  FiZap,
} from "react-icons/fi";

import "./Projects.css";


/* =========================================================
   STUDENT SERVICES
========================================================= */

const studentServices = [
  {
    icon: FiCode,
    title: "Final Year Projects",
    text: "Practical project development with complete technical guidance.",
  },
  {
    icon: FiLayers,
    title: "Mini & Major Projects",
    text: "Modern project ideas built using industry-focused technologies.",
  },
  {
    icon: FiUsers,
    title: "Technical Guidance",
    text: "Understand architecture, coding and implementation step by step.",
  },
  {
    icon: FiFileText,
    title: "Documentation Support",
    text: "Structured support for project reports, demos and presentations.",
  },
];


/* =========================================================
   COMPANY SERVICES
========================================================= */

const companyServices = [
  {
    icon: FiMonitor,
    title: "Web Applications",
    text: "Modern digital products designed around business requirements.",
  },
  {
    icon: FiCpu,
    title: "Custom Software",
    text: "Tailored applications that simplify and improve business workflows.",
  },
  {
    icon: FiDatabase,
    title: "API Integration",
    text: "Connect applications, services and databases into one ecosystem.",
  },
  {
    icon: FiCloud,
    title: "Cloud Solutions",
    text: "Scalable deployment solutions built for modern digital products.",
  },
];


/* =========================================================
   COMPANIES
========================================================= */

const companies = [
  {
    name: "Siemens",
    logo: "/images/companies/siemens.png",
  },
  {
    name: "Abhiwan",
    logo: "/images/companies/abhiwan.png",
  },
  {
    name: "Strive",
    logo: "/images/companies/strive.png",
  },
  {
    name: "Regel Jewellers",
    logo: "/images/companies/regel-jewellers.png",
  },
];


export default function Projects() {
  return (
    <section className="projects" id="projects">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="projects-grid" />

      <motion.div
        className="projects-orb projects-orb-one"
        animate={{
          x: [0, 45, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="projects-orb projects-orb-two"
        animate={{
          x: [0, -35, 0],
          y: [0, 35, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      <div className="projects-container">

        {/* =====================================================
            HEADER
        ===================================================== */}
<motion.div
  className="projects-header projects-header-animated"
  initial={{
    opacity: 0,
    y: 60,
    scale: 0.96,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  viewport={{
    once: true,
    amount: 0.3,
  }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}
>

  {/* =========================================
      FLOATING BADGE
  ========================================= */}

  <motion.div
    className="projects-badge projects-floating-badge"
    animate={{
      y: [0, -7, 0, 5, 0],
      rotate: [0, -1, 0, 1, 0],
      scale: [1, 1.025, 1, 1.015, 1],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <motion.span
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    SPS PROJECT SOLUTIONS

    <motion.div
      className="projects-zap"
      animate={{
        rotate: [0, -12, 12, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <FiZap />
    </motion.div>
  </motion.div>


  {/* =========================================
      MAIN FLOATING TITLE
  ========================================= */}

  <motion.h2
    className="projects-floating-title"
    animate={{
      y: [0, -10, -4, -15, 0],
      rotateX: [0, 1.5, 0, -1.5, 0],
      rotateZ: [0, -0.3, 0.25, 0, 0],
      scale: [1, 1.012, 1.005, 1.016, 1],
    }}
    transition={{
      duration: 6.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <span className="projects-title-main">
      From Ideas To
    </span>

    <motion.span
      className="projects-title-gradient"
      animate={{
        backgroundPosition: [
          "0% 50%",
          "100% 50%",
          "0% 50%",
        ],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      Digital Reality.
    </motion.span>


    {/* SPARK 1 */}

    <motion.i
      className="projects-title-spark spark-one"
      animate={{
        y: [0, -10, 0],
        x: [0, 6, 0],
        rotate: [0, 90, 180],
        scale: [0.7, 1.25, 0.7],
        opacity: [0.35, 1, 0.35],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      
    </motion.i>


    {/* SPARK 2 */}

    <motion.i
      className="projects-title-spark spark-two"
      animate={{
        y: [0, 8, 0],
        x: [0, -5, 0],
        rotate: [0, -90, -180],
        scale: [1, 0.6, 1],
        opacity: [0.8, 0.3, 0.8],
      }}
      transition={{
        duration: 4.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      
    </motion.i>

  </motion.h2>


  {/* =========================================
      DESCRIPTION
  ========================================= */}

  <motion.p
    className="projects-floating-description"
    animate={{
      y: [0, -3, 0],
      opacity: [0.82, 1, 0.82],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    We help students transform academic ideas into practical
    projects and help businesses turn real requirements into
    powerful digital solutions.
  </motion.p>


  {/* =========================================
      DANCING TAGS
  ========================================= */}

  <div className="projects-header-tags projects-dancing-tags">

    <motion.span
      animate={{
        y: [0, -6, 0],
        rotate: [0, -1, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      Academic Projects
    </motion.span>


    <motion.i
      animate={{
        rotate: [0, 180, 360],
        scale: [0.8, 1.3, 0.8],
        opacity: [0.4, 1, 0.4],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      ✦
    </motion.i>


    <motion.span
      animate={{
        y: [0, 6, 0],
        rotate: [0, 1, 0],
      }}
      transition={{
        duration: 3.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      Software Development
    </motion.span>


    <motion.i
      animate={{
        rotate: [360, 180, 0],
        scale: [1.2, 0.7, 1.2],
        opacity: [1, 0.4, 1],
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      ✦
    </motion.i>


    <motion.span
      animate={{
        y: [0, -5, 3, 0],
        rotate: [0, -0.7, 0.7, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      Business Solutions
    </motion.span>

  </div>


  {/* =========================================
      GLOW LINE
  ========================================= */}

  <motion.div
    className="projects-header-glow-line"
    animate={{
      scaleX: [0.55, 1, 0.55],
      opacity: [0.25, 1, 0.25],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

</motion.div>

        {/* =====================================================
            STUDENT PROJECTS
        ===================================================== */}

        <motion.article
          className="project-panel student-panel"
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="panel-number">
            01
          </div>


          {/* LEFT CONTENT */}

          <div className="panel-content">

            <div className="panel-label">

              <div className="panel-label-icon">
                <FiBookOpen />
              </div>

              <div>
                <span>
                  FOR COLLEGE STUDENTS
                </span>

                <strong>
                  Academic Project Development
                </strong>
              </div>

            </div>


            <h3>
              Build Your Idea.
              <span>
                Understand Every Step.
              </span>
            </h3>


            <p className="panel-description">
              Build practical academic projects with technical guidance
              that helps you understand the technology, architecture and
              development process behind your project.
            </p>


            {/* SERVICES */}

            <div className="project-services">

              {studentServices.map((service) => {

                const Icon = service.icon;

                return (
                  <div
                    className="project-service"
                    key={service.title}
                  >

                    <div className="project-service-icon">
                      <Icon />
                    </div>

                    <div>
                      <h4>
                        {service.title}
                      </h4>

                      <p>
                        {service.text}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>


            {/* CHECKS */}

            <div className="project-checks">

              <span>
                <FiCheck />
                Practical Development
              </span>

              <span>
                <FiCheck />
                Project Guidance
              </span>

              <span>
                <FiCheck />
                Demo Preparation
              </span>

            </div>


            <Link
              href="/projects"
              className="project-main-button student-button"
            >
              Explore Student Projects

              <span>
                <FiArrowUpRight />
              </span>
            </Link>

          </div>


          {/* RIGHT VISUAL */}

          <div className="panel-visual student-visual">

            <div className="visual-ring visual-ring-one" />
            <div className="visual-ring visual-ring-two" />
            <div className="visual-ring visual-ring-three" />


            <motion.div
              className="main-project-image"
              animate={{
                y: [0, -18, 0],
                rotate: [0, 1.2, 0, -1.2, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <div className="project-image-glow" />

              <Image
                src="/images/projects/student-project-3d.png"
                alt="Student academic project development"
                fill
                priority={false}
                sizes="(max-width: 900px) 100vw, 50vw"
                className="project-image"
              />

            </motion.div>


            {/* FLOATING BADGES */}

            <motion.div
              className="floating-card float-python"
              animate={{
                y: [0, -14, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FiCode />
              <span>Python</span>
            </motion.div>


            <motion.div
              className="floating-card float-react"
              animate={{
                y: [0, 13, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="react-symbol">
                ⚛
              </span>

              <span>
                React JS
              </span>
            </motion.div>


            <motion.div
              className="floating-card float-django"
              animate={{
                y: [0, -11, 0],
              }}
              transition={{
                duration: 5.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FiDatabase />

              <span>
                Django
              </span>
            </motion.div>


            {/* CODE CARD */}

            <motion.div
              className="floating-code student-code"
              animate={{
                y: [0, 12, 0],
                rotate: [-2, 1, -2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <div className="code-top">
                <i />
                <i />
                <i />
              </div>

              <small>
                project.py
              </small>

              <code>
                build()
                <br />
                learn()
                <br />
                create()
              </code>

            </motion.div>

          </div>

        </motion.article>


        {/* =====================================================
            SPS PROJECT LAB
        ===================================================== */}

        <div className="project-lab">

          <div className="project-lab-line" />

          <motion.div
            className="project-lab-center"
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <span>
              SPS
            </span>

            <div>
              <strong>
                PROJECT LAB
              </strong>

              <small>
                IDEATE • BUILD • LAUNCH
              </small>
            </div>

          </motion.div>

          <div className="project-lab-line" />

        </div>


        {/* =====================================================
            COMPANY PROJECTS
        ===================================================== */}

        <motion.article
          className="project-panel company-panel"
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="panel-number">
            02
          </div>


          {/* LEFT VISUAL */}

          <div className="panel-visual company-visual">

            <div className="visual-ring visual-ring-one" />
            <div className="visual-ring visual-ring-two" />
            <div className="visual-ring visual-ring-three" />


            <motion.div
              className="main-project-image"
              animate={{
                y: [0, 17, 0],
                rotate: [0, -1.2, 0, 1.2, 0],
              }}
              transition={{
                duration: 5.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <div className="project-image-glow" />

              <Image
                src="/images/projects/company-project-3d.png"
                alt="Company software project development"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="project-image"
              />

            </motion.div>


            <motion.div
              className="floating-card float-api"
              animate={{
                y: [0, -14, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FiCpu />

              <span>
                REST API
              </span>
            </motion.div>


            <motion.div
              className="floating-card float-cloud"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FiCloud />

              <span>
                Cloud
              </span>
            </motion.div>


            <motion.div
              className="floating-card float-database"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FiDatabase />

              <span>
                Database
              </span>
            </motion.div>


            <motion.div
              className="floating-code company-code"
              animate={{
                y: [0, -12, 0],
                rotate: [2, -1, 2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <div className="code-top">
                <i />
                <i />
                <i />
              </div>

              <small>
                solution.tsx
              </small>

              <code>
                design()
                <br />
                develop()
                <br />
                deploy()
              </code>

            </motion.div>

          </div>


          {/* RIGHT CONTENT */}

          <div className="panel-content company-content">

            <div className="panel-label">

              <div className="panel-label-icon">
                <FiBriefcase />
              </div>

              <div>
                <span>
                  FOR COMPANIES
                </span>

                <strong>
                  Business Project Development
                </strong>
              </div>

            </div>


            <h3>
              Business Challenges.
              <span>
                Smart Digital Solutions.
              </span>
            </h3>


            <p className="panel-description">
              We build modern applications and custom software solutions
              designed around real business goals, workflows and digital
              requirements.
            </p>


            <div className="project-services">

              {companyServices.map((service) => {

                const Icon = service.icon;

                return (
                  <div
                    className="project-service"
                    key={service.title}
                  >

                    <div className="project-service-icon">
                      <Icon />
                    </div>

                    <div>
                      <h4>
                        {service.title}
                      </h4>

                      <p>
                        {service.text}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>


            <div className="project-checks">

              <span>
                <FiCheck />
                Custom Development
              </span>

              <span>
                <FiCheck />
                Scalable Solutions
              </span>

              <span>
                <FiCheck />
                Deployment Support
              </span>

            </div>


            <Link
              href="/contact"
              className="project-main-button company-button"
            >
              Discuss Your Project

              <span>
                <FiArrowUpRight />
              </span>
            </Link>

          </div>

        </motion.article>


        {/* =====================================================
            CTA
        ===================================================== */}

        <motion.div
          className="projects-cta"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <div className="projects-cta-glow" />


          <div className="projects-cta-content">

            <span>
              HAVE AN IDEA?
            </span>

            <h3>
              You Imagine It.
              <strong>
                {" "}We Build It.
              </strong>
            </h3>

            <p>
              From academic projects to business applications,
              start your next digital project with SPS Solutions.
            </p>

          </div>


          <Link
            href="/contact"
            className="projects-cta-button"
          >
            Start Your Project

            <FiArrowUpRight />
          </Link>

        </motion.div>

      </div>


      {/* =====================================================
          COMPANY LOGO SHOWCASE
      ===================================================== */}

      <div className="companies-section">

        <motion.div
          className="companies-heading"
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
          transition={{
            duration: 0.7,
          }}
        >

          <span>
            OUR NETWORK
          </span>

         <motion.h3
  className="companies-floating-title"
  animate={{
    y: [0, -12, -5, -16, 0],
    rotateX: [0, 2, 0, -2, 0],
    rotateZ: [0, -0.5, 0.4, 0, 0],
    scale: [1, 1.018, 1.008, 1.022, 1],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <span className="companies-title-normal">
    Companies We
  </span>

  <motion.strong
    animate={{
      backgroundPosition: [
        "0% 50%",
        "100% 50%",
        "0% 50%",
      ],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    {" "}Work With.
  </motion.strong>

  <motion.span
    className="title-spark title-spark-one"
    animate={{
      y: [0, -9, 0],
      x: [0, 5, 0],
      scale: [0.7, 1.2, 0.7],
      opacity: [0.35, 1, 0.35],
      rotate: [0, 90, 180],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    
  </motion.span>

  <motion.span
    className="title-spark title-spark-two"
    animate={{
      y: [0, 7, 0],
      x: [0, -5, 0],
      scale: [1, 0.6, 1],
      opacity: [0.8, 0.25, 0.8],
      rotate: [0, -90, -180],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    
  </motion.span>
</motion.h3>

          <p>
            Building digital experiences and project solutions
            across businesses and industries.
          </p>

        </motion.div>


        <div className="company-marquee">

          <div className="company-track">

            {[...companies, ...companies, ...companies].map(
              (company, index) => (
                <div
                  className="company-card"
                  key={`${company.name}-${index}`}
                >

                  <div className="company-image">

                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      sizes="240px"
                    />

                  </div>

                </div>
              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}