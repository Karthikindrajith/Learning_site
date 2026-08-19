"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { motion } from "framer-motion";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiCode,
  FiLayers,
  FiPlay,
  FiStar,
  FiUsers,
  FiAward,
} from "react-icons/fi";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import "./CoursesPage.css";

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  "All Courses",
  "Full Stack Development",
  "Data & AI",
  "Cloud & DevOps",
  "Design",
  "Programming",
  "Business",
];

/* =========================================================
   COURSE DATA
========================================================= */

const courses = [
  {
    id: 1,
    title: "React.js Development",
    category: "Full Stack Development",
    image: "/images/courses/react.webp",
    badge: "Popular",
    description:
      "Build modern web applications using React, Hooks, Context API and advanced frontend concepts.",
    duration: "3 Months",
    level: "Beginner to Advanced",
    rating: "4.8",
    learners: "1.2K",
    accent: "react",
  },
  {
    id: 2,
    title: "Python Programming",
    category: "Programming",
    image: "/images/courses/python.webp",
    badge: "Popular",
    description:
      "Learn Python from basics to advanced and build real-world projects with practical development.",
    duration: "4 Months",
    level: "Beginner to Advanced",
    rating: "4.9",
    learners: "1.6K",
    accent: "python",
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner",
    category: "Cloud & DevOps",
    image: "/images/courses/aws.webp",
    badge: "Popular",
    description:
      "Learn AWS core services and build scalable cloud solutions with hands-on deployment practice.",
    duration: "3 Months",
    level: "Beginner",
    rating: "4.7",
    learners: "980",
    accent: "aws",
  },
  {
    id: 4,
    title: "MERN Full-Stack Development",
    category: "Full Stack Development",
    image: "/images/courses/mern.webp",
    badge: "New",
    description:
      "Build fast, scalable backend applications using Node.js, Express and REST API development.",
    duration: "3 Months",
    level: "Intermediate",
    rating: "4.8",
    learners: "840",
    accent: "node",
  },
  {
    id: 5,
    title: "Data Science & Analytics",
    category: "Data & AI",
    image: "/images/courses/data-science.webp",
    badge: "Bestseller",
    description:
      "Learn data analysis, visualization and machine learning fundamentals with practical datasets.",
    duration: "6 Months",
    level: "Intermediate",
    rating: "4.9",
    learners: "1.4K",
    accent: "data",
  },
  {
    id: 6,
    title: "DevOps with Docker",
    category: "Cloud & DevOps",
    image: "/images/courses/devops.webp",
    badge: "New",
    description:
      "Learn Docker, CI/CD and modern DevOps practices to build reliable deployment workflows.",
    duration: "3 Months",
    level: "Intermediate",
    rating: "4.7",
    learners: "620",
    accent: "devops",
  },
  {
    id: 7,
    title: "UI/UX Design",
    category: "Design",
    image: "/images/courses/uiux.webp",
    badge: "New",
    description:
      "Design beautiful digital experiences with Figma, wireframes, prototypes and design systems.",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    rating: "4.8",
    learners: "730",
    accent: "design",
  },
  {
    id: 8,
    title: "Digital Marketing",
    category: "Business",
    image: "/images/courses/digital-marketing.webp",
    badge: "New",
    description:
      "Learn SEO, social media, advertising, analytics and practical digital campaign strategy.",
    duration: "3 Months",
    level: "Beginner",
    rating: "4.6",
    learners: "560",
    accent: "marketing",
  },
];

/* =========================================================
   ROADMAP
========================================================= */

const roadmap = [
  {
    number: "01",
    title: "Choose Your Course",
    description:
      "Select the right course based on your interests and career goals.",
    icon: FiBookOpen,
  },
  {
    number: "02",
    title: "Learn & Practice",
    description:
      "Learn through structured modules, exercises and guided practice.",
    icon: FiCode,
  },
  {
    number: "03",
    title: "Build Real Projects",
    description:
      "Apply your skills by building practical, portfolio-ready projects.",
    icon: FiArrowRight,
  },
  {
    number: "04",
    title: "Get Certified",
    description:
      "Earn a completion certificate to showcase your learning journey.",
    icon: FiAward,
  },
  {
    number: "05",
    title: "Get Placed",
    description:
      "Prepare for interviews and move towards real job opportunities.",
    icon: FiBriefcase,
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    icon: FiUsers,
    title: "Expert Instructors",
    text: "Learn from industry-focused mentors.",
  },
  {
    icon: FiCode,
    title: "Hands-on Projects",
    text: "Build real-world applications.",
  },
  {
    icon: FiBriefcase,
    title: "Career Support",
    text: "Resume, interview and placement help.",
  },
  {
    icon: FiLayers,
    title: "Flexible Learning",
    text: "Follow a structured learning roadmap.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] =
    useState("All Courses");

  const filteredCourses = useMemo(() => {
    if (activeCategory === "All Courses") {
      return courses;
    }

    return courses.filter(
      (course) => course.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <>
      <Navbar />

      <main className="courses-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="courses-hero">

          <div className="courses-hero-bg" />

          <motion.div
            className="courses-hero-glow glow-a"
            animate={{
              x: [0, 35, 0],
              y: [0, -25, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="courses-hero-glow glow-b"
            animate={{
              x: [0, -30, 0],
              y: [0, 20, 0],
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="courses-container hero-grid">

            {/* =================================================
                LEFT HERO
            ================================================= */}

            <motion.div
              className="courses-hero-content"
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >

              <motion.span
                className="courses-kicker"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span />
                EMPOWER YOUR FUTURE
                <FiArrowUpRight />
              </motion.span>

              <h1>
                Build Skills.
                <span>Build Tomorrow.</span>
              </h1>

              <p>
                Industry-focused courses curated by experts to help
                you learn, build and grow in your dream career.
              </p>

              <div className="hero-actions">

                <a
                  href="#courses-list"
                  className="hero-primary-btn"
                >
                  Explore Courses
                  <FiArrowRight />
                </a>

                <a
                  href="#learning-roadmap"
                  className="hero-secondary-btn"
                >
                  <FiPlay />
                  View Learning Path
                </a>

              </div>

              {/* =================================================
                  HERO COUNTERS
              ================================================= */}

              <div className="hero-stats">

                {/* 50+ */}

                <motion.div
                  className="hero-stat"
                  whileHover={{
                    y: -3,
                  }}
                >
                  <FiBookOpen />

                  <div>
                    <strong>
                      <CountUp
                        end={50}
                        duration={2.5}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                      +
                    </strong>

                    <span>
                      Courses
                    </span>
                  </div>
                </motion.div>

                {/* 15K+ */}

                <motion.div
                  className="hero-stat"
                  whileHover={{
                    y: -3,
                  }}
                >
                  <FiUsers />

                  <div>
                    <strong>
                      <CountUp
                        end={15}
                        duration={2.5}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                      K+
                    </strong>

                    <span>
                      Learners
                    </span>
                  </div>
                </motion.div>

                {/* 98% */}

                <motion.div
                  className="hero-stat"
                  whileHover={{
                    y: -3,
                  }}
                >
                  <FiCheckCircle />

                  <div>
                    <strong>
                      <CountUp
                        end={98}
                        duration={2.5}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                      %
                    </strong>

                    <span>
                      Success Rate
                    </span>
                  </div>
                </motion.div>

                {/* 100+ */}

                <motion.div
                  className="hero-stat"
                  whileHover={{
                    y: -3,
                  }}
                >
                  <FiBriefcase />

                  <div>
                    <strong>
                      <CountUp
                        end={100}
                        duration={2.5}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                      +
                    </strong>

                    <span>
                      Hiring Partners
                    </span>
                  </div>
                </motion.div>

              </div>

            </motion.div>

            {/* =================================================
                RIGHT HERO IMAGE
            ================================================= */}

            <motion.div
              className="courses-hero-image"
              initial={{
                opacity: 0,
                x: 50,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.15,
              }}
            >

              <div className="hero-image-orbit orbit-1" />
              <div className="hero-image-orbit orbit-2" />

              <motion.div
                className="floating-tech tech-python"
                animate={{
                  y: [0, -10, 0],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Python
              </motion.div>

              <motion.div
                className="floating-tech tech-react"
                animate={{
                  y: [0, 9, 0],
                  rotate: [2, -2, 2],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                React
              </motion.div>

              <motion.div
                className="floating-tech tech-node"
                animate={{
                  y: [0, -8, 0],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Node.js
              </motion.div>

              <Image
                src="/images/courses/course-hero.webp"
                alt="SPS technology training"
                width={900}
                height={620}
                priority
                className="course-hero-main-image"
              />

            </motion.div>

          </div>
        </section>


        {/* =====================================================
            COURSE SECTION
        ===================================================== */}

        <section
          className="courses-list-section"
          id="courses-list"
        >

          <div className="courses-container">

            <motion.div
              className="courses-heading"
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
                amount: 0.2,
              }}
            >

              <span className="section-label">
                OUR COURSES
              </span>

              <h2>
                Explore Courses
                <span> For Every Career.</span>
              </h2>

              <p>
                Choose a learning path that matches your passion,
                skill level and career goals.
              </p>

            </motion.div>

            {/* FILTER */}

            <div className="course-filter">

              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveCategory(category)
                  }
                >
                  {category}
                </button>
              ))}

            </div>

            {/* CARDS */}

            <motion.div
              className="course-grid"
              layout
            >

              {filteredCourses.map(
                (course, index) => (
                  <motion.article
                    key={course.id}
                    className={`course-card theme-${course.accent}`}
                    layout
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
                      amount: 0.1,
                    }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.5,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                  >

                    <div className="course-card-image">

                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />

                      <span className="course-card-badge">
                        {course.badge}
                      </span>

                      <div className="course-card-image-overlay" />

                    </div>

                    <div className="course-card-content">

                      <div className="course-card-title-row">

                        <div>

                          <span className="course-category">
                            {course.category}
                          </span>

                          <h3>
                            {course.title}
                          </h3>

                        </div>

                        <motion.div
                          className="course-arrow"
                          whileHover={{
                            rotate: -8,
                            scale: 1.08,
                          }}
                        >
                          <FiArrowUpRight />
                        </motion.div>

                      </div>

                      <p>
                        {course.description}
                      </p>

                      <div className="course-meta">

                        <span>
                          <FiClock />
                          {course.duration}
                        </span>

                        <span>
                          <FiLayers />
                          {course.level}
                        </span>

                      </div>

                      <div className="course-card-bottom">

                        <div className="course-rating">

                          <FiStar />

                          <strong>
                            {course.rating}
                          </strong>

                          <span>
                            ({course.learners})
                          </span>

                        </div>

                        <a href="/contact">
                          Explore Course
                        </a>

                      </div>

                    </div>

                  </motion.article>
                )
              )}

            </motion.div>

            <div className="view-all-wrap">

              <a
                href="#courses-list"
                className="view-all-btn"
              >
                View All Courses
                <FiArrowRight />
              </a>

            </div>

          </div>
        </section>


        {/* =====================================================
            ROADMAP
        ===================================================== */}

        <section
          className="learning-roadmap"
          id="learning-roadmap"
        >

          <div className="courses-container">

            <motion.div
              className="roadmap-heading"
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

              <span className="section-label">
                LEARNING PATH
              </span>

              <h2>
                Your Journey To
                <span> Success.</span>
              </h2>

              <p>
                A structured path designed to transform you
                from learner into a job-ready professional.
              </p>

            </motion.div>

            <div className="roadmap-line">

              <motion.div
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
                  duration: 1.8,
                  ease: "easeInOut",
                }}
              />

            </div>

            <div className="roadmap-grid">

              {roadmap.map(
                (item, index) => {

                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.number}
                      className="roadmap-item"
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
                        delay:
                          index * 0.12,
                      }}
                    >

                      <motion.div
                        className="roadmap-icon-wrap"
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration:
                            3 +
                            index *
                              0.25,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Icon />
                      </motion.div>

                      <div className="roadmap-number">
                        {item.number}
                      </div>

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.description}
                      </p>

                    </motion.div>
                  );
                }
              )}

            </div>

          </div>
        </section>


        {/* =====================================================
            STATS
        ===================================================== */}

        <section
          className="course-stats-section"
        >

          <div className="courses-container">

            <motion.div
              className="course-stats-bar"
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

              {/* 50+ */}

              <div className="course-stat">

                <FiBookOpen />

                <div>

                  <strong>
                    <CountUp
                      end={50}
                      duration={3}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    +
                  </strong>

                  <span>
                    Industry-Focused Courses
                  </span>

                </div>

              </div>

              {/* 15,000+ */}

              <div className="course-stat">

                <FiUsers />

                <div>

                  <strong>
                    <CountUp
                      end={15000}
                      duration={3}
                      separator=","
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    +
                  </strong>

                  <span>
                    Happy Learners
                  </span>

                </div>

              </div>

              {/* 98% */}

              <div className="course-stat">

                <FiCheckCircle />

                <div>

                  <strong>
                    <CountUp
                      end={98}
                      duration={3}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    %
                  </strong>

                  <span>
                    Learner Success Rate
                  </span>

                </div>

              </div>

              {/* 100+ */}

              <div className="course-stat">

                <FiBriefcase />

                <div>

                  <strong>
                    <CountUp
                      end={100}
                      duration={3}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    +
                  </strong>

                  <span>
                    Hiring Partners
                  </span>

                </div>

              </div>

            </motion.div>

          </div>
        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section
          className="course-final-cta"
        >

          <div className="courses-container">

            <motion.div
              className="final-cta-grid"
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
              }}
            >

              {/* STUDENT IMAGE */}

              <div className="final-cta-image">

                <Image
                  src="/images/courses/student.webp"
                  alt="SPS student learning"
                  width={560}
                  height={560}
                  className="student-cta-image"
                />

              </div>

              {/* CTA CONTENT */}

              <div className="final-cta-content">

                <span className="section-label">
                  READY TO START?
                </span>

                <h2>
                  Ready To Start Your
                  <span>
                    Learning Journey?
                  </span>
                </h2>

                <p>
                  Join learners who are building their skills,
                  creating projects and advancing their careers
                  with SPS Learning Solutions.
                </p>

                <div className="final-cta-buttons">

                  <a
                    href="/contact"
                    className="final-primary-btn"
                  >
                    Join Now
                    <FiArrowRight />
                  </a>

                  <a
                    href="/career-guidance"
                    className="final-secondary-btn"
                  >
                    Talk to Advisor
                    <FiArrowUpRight />
                  </a>

                </div>

              </div>

              {/* BENEFITS */}

              <div className="benefits-column">

                {benefits.map(
                  (benefit, index) => {

                    const Icon =
                      benefit.icon;

                    return (
                      <motion.div
                        key={
                          benefit.title
                        }
                        className="benefit-card"
                        initial={{
                          opacity: 0,
                          x: 25,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay:
                            index * 0.1,
                        }}
                      >

                        <div
                          className="benefit-icon"
                        >
                          <Icon />
                        </div>

                        <div>

                          <strong>
                            {benefit.title}
                          </strong>

                          <span>
                            {benefit.text}
                          </span>

                        </div>

                      </motion.div>
                    );
                  }
                )}

              </div>

            </motion.div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}