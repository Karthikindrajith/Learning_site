"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiCheck,
  FiChevronDown,
  FiClock,
  FiBookOpen,
  FiUsers,
  FiStar,
  FiAward,
  FiPlay,
  FiLayers,
  FiTrendingUp,
} from "react-icons/fi";

import "./CourseDetails.css";

/* =========================================================
   COURSE DATA
   KEEP YOUR EXISTING SLUGS EXACTLY SAME
   ========================================================= */

const courses = [
  {
    id: 1,
    slug: "react-development",
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
    skills: [
      "React.js",
      "JavaScript",
      "Hooks",
      "Context API",
      "REST APIs",
      "Frontend Development",
    ],
    modules: [
      {
        title: "React Fundamentals",
        description: "Build a strong foundation in React.",
        topics: [
          "React Introduction",
          "Components",
          "JSX",
          "Props",
          "State",
        ],
      },
      {
        title: "React Hooks",
        description: "Work with modern React patterns.",
        topics: [
          "useState",
          "useEffect",
          "useContext",
          "Custom Hooks",
        ],
      },
      {
        title: "Advanced React",
        description: "Build scalable React applications.",
        topics: [
          "Context API",
          "Routing",
          "API Integration",
          "Performance",
        ],
      },
      {
        title: "Real World Project",
        description: "Apply your skills to a complete project.",
        topics: [
          "Project Planning",
          "Frontend Architecture",
          "API Integration",
          "Deployment",
        ],
      },
    ],
  },

  {
    id: 2,
    slug: "python-programming",
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
    skills: [
      "Python",
      "OOP",
      "Functions",
      "File Handling",
      "APIs",
      "Database",
    ],
    modules: [
      {
        title: "Python Fundamentals",
        description: "Start your programming journey with Python.",
        topics: [
          "Python Basics",
          "Variables",
          "Data Types",
          "Operators",
          "Control Flow",
        ],
      },
      {
        title: "Functions & OOP",
        description: "Learn reusable and structured programming.",
        topics: [
          "Functions",
          "Classes",
          "Objects",
          "Inheritance",
          "Polymorphism",
        ],
      },
      {
        title: "Advanced Python",
        description: "Move towards professional Python development.",
        topics: [
          "Exception Handling",
          "Modules",
          "Packages",
          "File Handling",
          "Virtual Environment",
        ],
      },
      {
        title: "Real World Project",
        description: "Build a practical Python application.",
        topics: [
          "Project Structure",
          "Database Integration",
          "API Development",
          "Deployment",
        ],
      },
    ],
  },

  {
    id: 3,
    slug: "aws-cloud-practitioner",
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
    skills: [
      "AWS",
      "EC2",
      "S3",
      "IAM",
      "Cloud Deployment",
      "Networking",
    ],
    modules: [
      {
        title: "AWS Fundamentals",
        description: "Understand cloud computing and AWS.",
        topics: [
          "Cloud Computing",
          "AWS Overview",
          "Regions",
          "Availability Zones",
        ],
      },
      {
        title: "AWS Core Services",
        description: "Work with essential AWS services.",
        topics: [
          "EC2",
          "S3",
          "IAM",
          "VPC",
        ],
      },
      {
        title: "Cloud Deployment",
        description: "Deploy applications to AWS.",
        topics: [
          "Server Setup",
          "Security",
          "Domain",
          "Application Deployment",
        ],
      },
    ],
  },

  {
    id: 4,
    slug: "mern-full-stack-development",
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
    skills: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "REST API",
      "JavaScript",
    ],
    modules: [
      {
        title: "Frontend with React",
        description: "Build modern React interfaces.",
        topics: [
          "React",
          "Components",
          "Hooks",
          "Routing",
        ],
      },
      {
        title: "Node & Express",
        description: "Build backend applications.",
        topics: [
          "Node.js",
          "Express",
          "REST APIs",
          "Middleware",
        ],
      },
      {
        title: "MongoDB",
        description: "Work with NoSQL databases.",
        topics: [
          "MongoDB",
          "Collections",
          "Queries",
          "Database Integration",
        ],
      },
      {
        title: "Full Stack Project",
        description: "Build and deploy a complete application.",
        topics: [
          "Frontend",
          "Backend",
          "Database",
          "Deployment",
        ],
      },
    ],
  },

  {
    id: 5,
    slug: "data-science-analytics",
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
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Data Analysis",
      "Machine Learning",
    ],
    modules: [
      {
        title: "Python for Data Science",
        description: "Learn Python tools used in data science.",
        topics: [
          "Python",
          "NumPy",
          "Pandas",
          "Data Cleaning",
        ],
      },
      {
        title: "Data Visualization",
        description: "Turn data into meaningful insights.",
        topics: [
          "Matplotlib",
          "Charts",
          "Visualization",
          "Dashboards",
        ],
      },
      {
        title: "Machine Learning",
        description: "Understand machine learning fundamentals.",
        topics: [
          "ML Basics",
          "Regression",
          "Classification",
          "Model Evaluation",
        ],
      },
    ],
  },

  {
    id: 6,
    slug: "devops-with-docker",
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
    skills: [
      "Docker",
      "Git",
      "CI/CD",
      "Linux",
      "Deployment",
      "DevOps",
    ],
    modules: [
      {
        title: "DevOps Fundamentals",
        description: "Understand modern DevOps workflows.",
        topics: [
          "DevOps",
          "Git",
          "Linux",
          "Version Control",
        ],
      },
      {
        title: "Docker",
        description: "Containerize applications.",
        topics: [
          "Images",
          "Containers",
          "Dockerfile",
          "Docker Compose",
        ],
      },
      {
        title: "CI/CD",
        description: "Automate application deployment.",
        topics: [
          "Pipelines",
          "Automation",
          "Testing",
          "Deployment",
        ],
      },
    ],
  },

  {
    id: 7,
    slug: "ui-ux-design",
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
    skills: [
      "Figma",
      "Wireframes",
      "Prototyping",
      "UX Research",
      "Design Systems",
      "UI Design",
    ],
    modules: [
      {
        title: "Design Fundamentals",
        description: "Understand the principles of digital design.",
        topics: [
          "Design Principles",
          "Typography",
          "Colors",
          "Layouts",
        ],
      },
      {
        title: "Figma",
        description: "Create professional designs using Figma.",
        topics: [
          "Figma Tools",
          "Components",
          "Auto Layout",
          "Design Systems",
        ],
      },
      {
        title: "UX & Prototyping",
        description: "Design meaningful user experiences.",
        topics: [
          "UX Research",
          "Wireframes",
          "User Flow",
          "Prototypes",
        ],
      },
    ],
  },

  {
    id: 8,
    slug: "digital-marketing",
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
    skills: [
      "SEO",
      "Social Media",
      "Google Ads",
      "Analytics",
      "Content Marketing",
      "Campaigns",
    ],
    modules: [
      {
        title: "Digital Marketing Fundamentals",
        description: "Understand the digital marketing ecosystem.",
        topics: [
          "Digital Marketing",
          "Marketing Funnel",
          "Content",
          "Audience",
        ],
      },
      {
        title: "SEO",
        description: "Learn how search engines work.",
        topics: [
          "Keyword Research",
          "On Page SEO",
          "Off Page SEO",
          "Analytics",
        ],
      },
      {
        title: "Social Media & Ads",
        description: "Create effective digital campaigns.",
        topics: [
          "Social Media",
          "Paid Ads",
          "Campaign Strategy",
          "Performance",
        ],
      },
    ],
  },
];

/* =========================================================
   PAGE
   ========================================================= */

export default function CourseDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const [course, setCourse] = useState(null);
  const [activeModule, setActiveModule] = useState(0);

  useEffect(() => {
    if (!params?.slug) return;

    const currentCourse = courses.find(
      (item) => item.slug === params.slug
    );

    setCourse(currentCourse || null);
  }, [params?.slug]);

  /* =======================================================
     LOADING
     ======================================================= */

  if (!params?.slug || course === null) {
    if (params?.slug) {
      return (
        <main className="course-error-page">
          <div className="course-error-card">
            <span className="error-number">404</span>

            <span className="error-mini-label">
              COURSE NOT FOUND
            </span>

            <h1>Course unavailable</h1>

            <p>
              The course you are looking for could not be found.
              Please go back and explore our available programs.
            </p>

            <button
              type="button"
              className="back-course-btn"
              onClick={() => router.push("/courses")}
            >
              <FiArrowLeft />
              Back to Courses
            </button>
          </div>
        </main>
      );
    }

    return (
      <main className="course-loading-page">
        <div className="course-loading-shape" />
        <span>Loading course...</span>
      </main>
    );
  }

  return (
    <main className="course-details-page">
      {/* ===================================================
          HERO
          =================================================== */}

      <section className="course-details-hero">
        <div className="hero-grid-lines" />

        <div className="course-hero-container">
          <button
            type="button"
            className="course-back-link"
            onClick={() => router.push("/courses")}
          >
            <FiArrowLeft />
            <span>Back to Courses</span>
          </button>

          <div className="course-hero-grid">
            {/* LEFT */}

            <div className="course-hero-content">
              <div className="course-hero-topline">
                <span className="course-index">
                  0{course.id}
                </span>

                <span className="course-category">
                  {course.category}
                </span>

                {course.badge && (
                  <span className="course-badge">
                    {course.badge}
                  </span>
                )}
              </div>

              <h1>{course.title}</h1>

              <div className="hero-line">
                <span />
                <span />
                <span />
              </div>

              <p className="course-description">
                {course.description}
              </p>

              {/* META */}

              <div className="course-meta">
                <span>
                  <FiClock />
                  {course.duration}
                </span>

                <span>
                  <FiBookOpen />
                  {course.level}
                </span>

                <span>
                  <FiStar />
                  {course.rating}
                </span>

                <span>
                  <FiUsers />
                  {course.learners}
                </span>
              </div>

              {/* ACTIONS */}

              <div className="course-actions">
                <button
                  type="button"
                  className="primary-course-btn"
                  onClick={() =>
                    document
                      .getElementById("curriculum")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                >
                  <span>Explore Curriculum</span>
                  <FiArrowUpRight />
                </button>

                <button
                  type="button"
                  className="secondary-course-btn"
                  onClick={() => router.push("/contact")}
                >
                  Talk to Our Expert
                </button>
              </div>

              <div className="hero-bottom-note">
                <FiAward />
                <span>
                  Career-focused learning with practical projects
                </span>
              </div>
            </div>

            {/* RIGHT */}

            <div className="course-hero-visual">
              <div className="visual-number">
                0{course.id}
              </div>

              <div className="course-hero-image">
                <img
                  src={course.image}
                  alt={course.title}
                />

                <div className="hero-image-overlay" />

                <div className="hero-image-content">
                  <span>{course.category}</span>

                  <strong>{course.title}</strong>

                  <div className="image-play">
                    <FiPlay />
                  </div>
                </div>
              </div>

              <div className="visual-caption">
                <span>01</span>

                <p>
                  Learn. Build.
                  <br />
                  Grow.
                </p>

                <FiArrowUpRight />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          INTRO STRIP
          =================================================== */}

      <section className="course-intro-strip">
        <div className="intro-strip-inner">
          <span className="intro-label">
            SPS LEARNING SOLUTIONS
          </span>

          <h2>
            Build skills that
            <br />
            <em>move your career forward.</em>
          </h2>

          <div className="intro-arrow">
          
          </div>
        </div>
      </section>

      {/* ===================================================
          CONTENT
          =================================================== */}

      <section className="course-info-section">
        <div className="course-info-container">
          <div className="course-main-content">
            {/* OVERVIEW */}

            <article className="course-content-card overview-card">
              <div className="card-top-row">
                <span className="section-small-title">
                  01 / OVERVIEW
                </span>

                <FiArrowUpRight />
              </div>

              <h2>
                Learn by
                <br />
                <span>building.</span>
              </h2>

              <p>
                {course.description} This program is designed
                around practical learning, structured training
                and real-world development experience.
              </p>

              <div className="overview-highlight">
                <div>
                  <FiLayers />
                  <strong>Practical</strong>
                  <span>Learning</span>
                </div>

                <div>
                  <FiTrendingUp />
                  <strong>Career</strong>
                  <span>Focused</span>
                </div>

                <div>
                  <FiAward />
                  <strong>Industry</strong>
                  <span>Skills</span>
                </div>
              </div>
            </article>

            {/* SKILLS */}

            <article className="course-content-card">
              <div className="card-top-row">
                <span className="section-small-title">
                  02 / WHAT YOU LEARN
                </span>
              </div>

              <h2>Skills you will build</h2>

              <p>
                Develop the practical skills required to work on
                real projects and modern applications.
              </p>

              <div className="skills-grid">
                {course.skills?.map((skill, index) => (
                  <div
                    className="skill-item"
                    key={`${skill}-${index}`}
                  >
                    <span className="skill-number">
                      0{index + 1}
                    </span>

                    <span className="skill-check">
                      <FiCheck />
                    </span>

                    <strong>{skill}</strong>

                    <FiArrowUpRight className="skill-arrow" />
                  </div>
                ))}
              </div>
            </article>

            {/* CURRICULUM */}

            <article
              className="course-content-card curriculum-card"
              id="curriculum"
            >
              <div className="card-top-row">
                <span className="section-small-title">
                  03 / CURRICULUM
                </span>

                <span className="curriculum-count">
                  {course.modules?.length || 0} Modules
                </span>
              </div>

              <h2>
                Course
                <br />
                curriculum.
              </h2>

              <p>
                Follow a structured learning path from
                fundamentals to practical project development.
              </p>

              <div className="curriculum-list">
                {course.modules?.map((module, index) => {
                  const active = activeModule === index;

                  return (
                    <div
                      className={`curriculum-item ${
                        active ? "active" : ""
                      }`}
                      key={`${module.title}-${index}`}
                    >
                      <button
                        type="button"
                        className="module-header"
                        onClick={() =>
                          setActiveModule(
                            active ? -1 : index
                          )
                        }
                      >
                        <div className="module-left">
                          <span className="module-number">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div>
                            <h3>{module.title}</h3>

                            <p>{module.description}</p>
                          </div>
                        </div>

                        <span className="module-arrow">
                          {active ? (
                            <FiArrowUpRight />
                          ) : (
                            <FiChevronDown />
                          )}
                        </span>
                      </button>

                      {active && (
                        <div className="module-topics">
                          {module.topics?.map(
                            (topic, topicIndex) => (
                              <div
                                className="topic-item"
                                key={`${topic}-${topicIndex}`}
                              >
                                <span>
                                  <FiCheck />
                                </span>

                                {topic}
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </article>

            {/* FINAL CTA */}

            <article className="course-final-cta">
              <div>
                <span>
                  READY TO START?
                </span>

                <h2>
                  Turn your
                  <br />
                  <em>interest into skill.</em>
                </h2>
              </div>

              <Link
                href="/contact"
                className="final-cta-button"
              >
                Talk to Our Expert
                <FiArrowUpRight />
              </Link>
            </article>
          </div>

          {/* =================================================
              SIDEBAR
              ================================================= */}

          <aside className="course-sidebar">
            <div className="enroll-card">
              <div className="sidebar-card-number">
                0{course.id}
              </div>

              <span className="sidebar-label">
                START YOUR JOURNEY
              </span>

              <h3>
                Ready to learn
                <br />
                {course.title}?
              </h3>

              <div className="sidebar-stat">
                <span>Duration</span>
                <strong>{course.duration}</strong>
              </div>

              <div className="sidebar-stat">
                <span>Level</span>
                <strong>{course.level}</strong>
              </div>

              <div className="sidebar-stat">
                <span>Rating</span>
                <strong>
                  <FiStar />
                  {course.rating}
                </strong>
              </div>

              <div className="sidebar-stat">
                <span>Learners</span>
                <strong>{course.learners}</strong>
              </div>

              <button
                type="button"
                className="sidebar-enroll-btn"
                onClick={() => router.push("/contact")}
              >
                Enquire Now
                <FiArrowUpRight />
              </button>

              <p className="sidebar-note">
                Speak with our learning advisor and find
                the right path for your career.
              </p>
            </div>

            <div className="sidebar-mini-card">
              <span>WHY SPS?</span>

              <strong>
                Learn with
                <br />
                practical guidance.
              </strong>

              <div>
                <FiCheck />
                Real-world projects
              </div>

              <div>
                <FiCheck />
                Industry-focused skills
              </div>

              <div>
                <FiCheck />
                Career guidance
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}