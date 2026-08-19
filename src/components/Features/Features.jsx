"use client";

import { motion } from "framer-motion";
import {
  FiActivity,
  FiArrowUpRight,
  FiBookOpen,
  FiCheck,
  FiCode,
  FiCpu,
  FiLayers,
  FiMic,
  FiPlay,
  FiTarget,
  FiTrendingUp,
  FiUser,
  FiZap,
} from "react-icons/fi";

import "./Features.css";

const journeyStats = [
  {
    number: "24",
    label: "Modules",
    icon: FiBookOpen,
  },
  {
    number: "12",
    label: "Projects",
    icon: FiCode,
  },
  {
    number: "08",
    label: "Assessments",
    icon: FiTarget,
  },
];

const learningSteps = [
  "LEARN",
  "BUILD",
  "PRACTICE",
  "GROW",
];

export default function Features() {
  return (
    <section className="features-command" id="features">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="command-grid" />

      <motion.div
        className="command-orb command-orb-one"
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="command-orb command-orb-two"
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="command-noise" />


      <div className="command-container">

        {/* =====================================================
            SECTION INTRO
        ===================================================== */}

        <motion.div
          className="command-intro"
          initial={{
            opacity: 0,
            y: 45,
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
            className="command-intro-badge"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span />

            SPS LEARNING EXPERIENCE

            <FiZap />
          </motion.div>


          <h2>
            Your Career.
            <span> One System.</span>
          </h2>


          <p>
            Learn, build, practice and prepare for your career
            through one connected learning experience.
          </p>

        </motion.div>


        {/* =====================================================
            COMMAND CENTER
        ===================================================== */}

        <motion.div
          className="command-center"
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* GLOW */}

          <div className="command-center-glow" />


          {/* =================================================
              TOP BAR
          ================================================= */}

          <div className="command-topbar">

            <div className="command-brand">

              <div className="command-brand-logo">
                SPS
              </div>

              <div>
                <strong>
                  LEARNING SYSTEM
                </strong>

                <span>
                  COMMAND CENTER / 01
                </span>
              </div>

            </div>


            <div className="command-system-status">

              <motion.span
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              SYSTEM LIVE

            </div>

          </div>


          {/* =================================================
              DASHBOARD TITLE
          ================================================= */}

          <div className="command-dashboard-title">

            <div>

              <span>
                WELCOME BACK
              </span>

              <h3>
                Ready To
                <strong> Level Up?</strong>
              </h3>

            </div>


            <motion.div
              className="command-live-chip"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FiActivity />

              Learning Active
            </motion.div>

          </div>


          {/* =================================================
              TOP DASHBOARD GRID
          ================================================= */}

          <div className="command-main-grid">

            {/* ===============================================
                JOURNEY
            =============================================== */}

            <motion.div
              className="command-card journey-card"
              initial={{
                opacity: 0,
                x: -35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
            >

              <div className="command-card-top">

                <div>
                  <span className="command-eyebrow">
                    YOUR LEARNING
                  </span>

                  <h4>
                    Journey
                  </h4>
                </div>


                <div className="command-card-icon">
                  <FiLayers />
                </div>

              </div>


              <p className="journey-description">
                Everything you need to move from
                learning to real-world development.
              </p>


              <div className="journey-stats">

                {journeyStats.map((stat, index) => {

                  const Icon = stat.icon;

                  return (
                    <motion.div
                      className="journey-stat"
                      key={stat.label}
                      animate={{
                        y: [0, index % 2 === 0 ? -5 : 5, 0],
                      }}
                      transition={{
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >

                      <Icon />

                      <strong>
                        {stat.number}
                      </strong>

                      <span>
                        {stat.label}
                      </span>

                    </motion.div>
                  );
                })}

              </div>


              <div className="journey-footer">

                <span>
                  <FiCheck />
                  Structured Learning Path
                </span>

                <FiArrowUpRight />

              </div>

            </motion.div>


            {/* ===============================================
                LEARNING PROGRESS
            =============================================== */}

            <motion.div
              className="command-card progress-card"
              initial={{
                opacity: 0,
                x: 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
            >

              <div className="command-card-top">

                <div>
                  <span className="command-eyebrow">
                    LEARNING PROGRESS
                  </span>

                  <h4>
                    Python Full Stack
                  </h4>
                </div>


                <div className="progress-percentage">
                  82%
                </div>

              </div>


              <div className="progress-track">

                <motion.div
                  className="progress-fill"
                  initial={{
                    width: "0%",
                  }}
                  whileInView={{
                    width: "82%",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.8,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.span
                    animate={{
                      opacity: [0.4, 1, 0.4],
                      scale: [0.8, 1.3, 0.8],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>

              </div>


              <div className="progress-info">

                <span>
                  19 of 24 modules completed
                </span>

                <strong>
                  5 Remaining
                </strong>

              </div>


              <div className="current-module">

                <div className="current-module-icon">
                  <FiCode />
                </div>

                <div className="current-module-content">

                  <span>
                    CURRENT MODULE
                  </span>

                  <strong>
                    Django REST API
                  </strong>

                  <small>
                    APIs • Authentication • JWT
                  </small>

                </div>


                <motion.button
                  type="button"
                  className="module-play"
                  aria-label="Continue current module"
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <FiPlay />
                </motion.button>

              </div>

            </motion.div>

          </div>


          {/* =================================================
              SECOND GRID
          ================================================= */}

          <div className="command-secondary-grid">

            {/* ===============================================
                MENTOR
            =============================================== */}

            <motion.div
              className="command-card mentor-card"
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
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              whileHover={{
                y: -6,
              }}
            >

              <div className="small-card-heading">

                <div className="small-feature-icon">
                  <FiUser />
                </div>

                <span>
                  MENTOR SUPPORT
                </span>

              </div>


              <div className="mentor-avatar">

                <motion.div
                  className="mentor-avatar-inner"
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FiUser />
                </motion.div>


                <span className="mentor-online" />

              </div>


              <h4>
                Expert Guidance
              </h4>

              <p>
                Get technical support when you need it.
              </p>


              <div className="mentor-status">
                <span />

                MENTORS ONLINE
              </div>

            </motion.div>


            {/* ===============================================
                ASSESSMENT
            =============================================== */}

            <motion.div
              className="command-card assessment-card"
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
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              whileHover={{
                y: -6,
              }}
            >

              <div className="small-card-heading">

                <div className="small-feature-icon">
                  <FiTarget />
                </div>

                <span>
                  ASSESSMENTS
                </span>

              </div>


              <div className="assessment-score">

                <div className="assessment-ring">

                  <div>
                    <strong>
                      92
                    </strong>

                    <span>
                      %
                    </span>
                  </div>

                </div>

              </div>


              <h4>
                Skill Readiness
              </h4>

              <p>
                Track your progress with practical assessments.
              </p>


              <div className="assessment-footer">

                <span>
                  08 Completed
                </span>

                <FiTrendingUp />

              </div>

            </motion.div>


            {/* ===============================================
                MOCK INTERVIEW
            =============================================== */}

            <motion.div
              className="command-card interview-card"
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
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              whileHover={{
                y: -6,
              }}
            >

              <div className="interview-top">

                <div className="small-card-heading">

                  <div className="small-feature-icon">
                    <FiMic />
                  </div>

                  <span>
                    UPCOMING
                  </span>

                </div>


                <motion.span
                  className="interview-live"
                  animate={{
                    opacity: [0.55, 1, 0.55],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  PREP MODE
                </motion.span>

              </div>


              <div className="interview-content">

                <div className="interview-date">

                  <span>
                    AUG
                  </span>

                  <strong>
                    01
                  </strong>

                </div>


                <div className="interview-details">

                  <span>
                    MOCK INTERVIEW
                  </span>

                  <h4>
                    Python Full Stack
                  </h4>

                  <p>
                    11:00 AM • 45 Minutes
                  </p>

                </div>

              </div>


              <div className="interview-readiness">

                <div>
                  <span>
                    Interview Readiness
                  </span>

                  <strong>
                    90%
                  </strong>
                </div>


                <div className="readiness-track">

                  <motion.span
                    initial={{
                      width: "0%",
                    }}
                    whileInView={{
                      width: "90%",
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1.7,
                      delay: 0.7,
                    }}
                  />

                </div>

              </div>


              <button
                type="button"
                className="interview-button"
              >
                Start Preparation

                <FiArrowUpRight />
              </button>

            </motion.div>

          </div>


          {/* =================================================
              JOURNEY PATH
          ================================================= */}

          <div className="command-path">

            <div className="command-path-line">

              <motion.div
                className="command-path-progress"
                initial={{
                  width: "0%",
                }}
                whileInView={{
                  width: "100%",
                }}
                viewport={{
                  once: true,
                  amount: 0.6,
                }}
                transition={{
                  duration: 2.2,
                  delay: 0.4,
                  ease: "easeInOut",
                }}
              />

            </div>


            <div className="command-path-steps">

              {learningSteps.map((step, index) => (
                <motion.div
                  className="command-step"
                  key={step}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.5 + index * 0.18,
                  }}
                >

                  <motion.span
                    animate={{
                      scale: [1, 1.25, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      delay: index * 0.35,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {index + 1}
                  </motion.span>

                  <strong>
                    {step}
                  </strong>

                </motion.div>
              ))}

            </div>

          </div>


          {/* =================================================
              BOTTOM SYSTEM BAR
          ================================================= */}

          <div className="command-bottom-bar">

            <div>
              <FiCpu />

              SPS LEARNING ENGINE
            </div>


            <span>
              Learn • Build • Practice • Grow
            </span>


            <div className="command-connected">
              <span />

              CONNECTED
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}