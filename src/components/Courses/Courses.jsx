"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiClock,
  FiUsers,
  FiCode,
  FiCloud,
  FiTrendingUp,
  FiLayers,
} from "react-icons/fi";

import "./Courses.css";

const courses = [
  {
    id: 1,
    title: "Python Full Stack",
    category: "FULL STACK DEVELOPMENT",
    description:
      "Build complete web applications using Python, Django, React, MySQL and REST APIs through practical projects.",
    image: "/images/courses/python-fullstack.jpg",
    icon: FiCode,
    duration: "6 Months",
    learners: "2.5K+ Learners",
    skills: ["Python", "Django", "React", "MySQL"],
    slug: "python-full-stack",
  },
  {
    id: 2,
    title: "MERN Stack",
    category: "WEB DEVELOPMENT",
    description:
      "Master modern JavaScript development with MongoDB, Express, React and Node.js by building production-ready applications.",
    image: "/images/courses/cloud-devops.jpg",
    icon: FiLayers,
    duration: "6 Months",
    learners: "1.8K+ Learners",
    skills: ["MongoDB", "Express", "React", "Node.js"],
    slug: "mern-stack",
  },
  {
    id: 3,
    title: "Digital Marketing",
    category: "MARKETING",
    description:
      "Learn SEO, social media marketing, paid advertising, content strategy and analytics through real-world campaigns.",
    image: "/images/courses/digital-marketing.jpg",
    icon: FiTrendingUp,
    duration: "4 Months",
    learners: "1.4K+ Learners",
    skills: ["SEO", "Social Media", "Ads", "Analytics"],
    slug: "digital-marketing",
  },
  {
    id: 4,
    title: "Cloud & DevOps",
    category: "CLOUD TECHNOLOGY",
    description:
      "Learn cloud infrastructure, deployment and DevOps workflows using AWS, Docker, Git and modern CI/CD practices.",
    image: "/images/courses/react-development.jpg",
    icon: FiCloud,
    duration: "5 Months",
    learners: "1.2K+ Learners",
    skills: ["AWS", "Docker", "Git", "CI/CD"],
    slug: "cloud-devops",
  },
];

const scrollingCourses = [...courses, ...courses];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Courses() {
  return (
    <section className="courses-section" id="courses">
      {/* ==================================================
          TOP INTRO
      ================================================== */}

      <div className="courses-intro-container">
        <motion.div
          className="courses-intro"
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
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span className="courses-eyebrow">
            SPS LEARNING SOLUTIONS
          </span>

          <h2>
            Learn Skills That
            <span> Build Careers.</span>
          </h2>

          <p>
            Explore career-focused programs designed to help you learn
            modern technologies, build real projects and develop
            industry-ready skills.
          </p>
        </motion.div>
      </div>

      {/* ==================================================
          ABHIWAN STYLE SCROLLING COURSE BAND
      ================================================== */}

      <div className="course-showcase-band">
        <div className="showcase-glow showcase-glow-one" />
        <div className="showcase-glow showcase-glow-two" />

        <div className="showcase-container">
          <div className="showcase-label">
            <span>Explore</span>

            <strong>
              Our Popular
              <br />
              Programs
            </strong>
          </div>

          <div className="showcase-marquee">
            <div className="showcase-track">
              {scrollingCourses.map((course, index) => (
                <div
                  className="showcase-item"
                  key={`${course.id}-${index}`}
                >
                  <div className="showcase-image">
                    <Image
                      src={course.image}
                      alt=""
                      fill
                      sizes="240px"
                      className="showcase-img"
                    />

                    <div className="showcase-image-overlay" />

                    <course.icon />
                  </div>

                  <div className="showcase-info">
                    <span>0{course.id}</span>

                    <strong>{course.title}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          OUR COURSES
      ================================================== */}

      <div className="courses-container">
        <motion.div
          className="courses-heading"
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="courses-small-title">
            <span />
            EXPLORE OUR COURSES
            <span />
          </div>

          <h2>Our Courses</h2>

          <p>
            Choose a learning path and build practical skills through
            structured training, projects and expert guidance.
          </p>
        </motion.div>

        {/* ==================================================
            COURSE CARDS
        ================================================== */}

        <div className="courses-grid">
          {courses.map((course, index) => (
            <motion.article
              className="course-card"
              key={course.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
            >
              {/* IMAGE */}

              <div className="course-card-image">
                <Image
                  src={course.image}
                  alt={`${course.title} course`}
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                  className="course-image"
                />

                <div className="course-image-overlay" />

                <span className="course-number">
                  0{course.id}
                </span>

                <div className="course-icon">
                  <course.icon />
                </div>

                <div className="course-category">
                  {course.category}
                </div>
              </div>

              {/* CONTENT */}

              <div className="course-card-content">
                <h3>{course.title}</h3>

                <p className="course-description">
                  {course.description}
                </p>

                {/* SKILLS */}

                <div className="course-skills">
                  {course.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>

                {/* META */}

                <div className="course-meta">
                  <span>
                    <FiClock />
                    {course.duration}
                  </span>

                  <span>
                    <FiUsers />
                    {course.learners}
                  </span>
                </div>

                {/* BOTTOM */}

                <div className="course-card-bottom">
                  <span>
                    Career-focused learning
                  </span>

                  <a href={`/courses/${course.slug}`}>
                    Explore Course

                    <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ==================================================
            CTA
        ================================================== */}

        <motion.div
          className="courses-cta"
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
            duration: 0.7,
          }}
        >
          <div>
            <span>NOT SURE WHICH COURSE TO CHOOSE?</span>

            <h3>
              Find the right learning path
              <br />
              for your career.
            </h3>
          </div>

          <a href="/contact">
            Talk to Our Expert

            <FiArrowUpRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}