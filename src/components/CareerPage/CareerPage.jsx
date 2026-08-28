"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FiArrowRight,
  FiBriefcase,
  FiBookOpen,
  FiCheck,
  FiClock,
  FiCode,
  FiGift,
  FiMapPin,
  FiSearch,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import "./CareerPage.css";

/* =========================================================
   BACKEND API
========================================================= */

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://sps-learning-backend.onrender.com";

/* =========================================================
   ANIMATED COUNTER
========================================================= */

function AnimatedCounter({
  end,
  duration = 1800,
  suffix = "",
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame = null;

    const animate = (time) => {
      if (startTime === null) {
        startTime = time;
      }

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(
        easedProgress * end
      );

      setCount(currentValue);

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

/* =========================================================
   LIFE AT SPS
========================================================= */

const lifeAtSPS = [
  {
    icon: FiBookOpen,
    title: "Learn",
    text: "Continuous learning opportunities to upgrade your skills.",
  },
  {
    icon: FiUsers,
    title: "Collaborate",
    text: "Work with talented people and create meaningful solutions.",
  },
  {
    icon: FiCode,
    title: "Create",
    text: "Solve real-world problems and build products that matter.",
  },
  {
    icon: FiTrendingUp,
    title: "Grow",
    text: "Clear opportunities to improve your career and expertise.",
  },
  {
    icon: FiTarget,
    title: "Innovate",
    text: "Bring fresh ideas and turn them into real impact.",
  },
  {
    icon: FiGift,
    title: "Celebrate",
    text: "Celebrate achievements and build strong team memories.",
  },
];

/* =========================================================
   WHY JOIN
========================================================= */

const whyJoin = [
  {
    title: "Career Growth",
    text: "Grow professionally with real ownership and opportunities.",
  },
  {
    title: "Learning Culture",
    text: "Learn through workshops, projects and continuous knowledge sharing.",
  },
  {
    title: "Real Projects",
    text: "Work on practical products and meaningful business problems.",
  },
  {
    title: "Mentorship",
    text: "Learn from experienced people and grow with confidence.",
  },
  {
    title: "Flexible Work",
    text: "A healthy work environment that values productivity and balance.",
  },
  {
    title: "Great Culture",
    text: "A supportive, collaborative and people-first workplace.",
  },
];

/* =========================================================
   CAREER PAGE
========================================================= */

export default function CareerPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  /* =======================================================
     FETCH CAREERS FROM DJANGO BACKEND
  ======================================================= */

  useEffect(() => {
    let cancelled = false;

    const fetchCareers = async () => {
      try {
        setLoading(true);
        setError("");

        const endpoint = `${API_URL}/api/careers/`;

        console.log("Fetching careers from:", endpoint);

        const response = await fetch(endpoint, {
          method: "GET",
          cache: "no-store",
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(
            `Career API Error: ${response.status}`
          );
        }

        const data = await response.json();

        console.log("Career API Response:", data);

        /*
          Supports both:
          [
            {...},
            {...}
          ]

          and DRF pagination:
          {
            results: [...]
          }
        */

        const careerList = Array.isArray(data)
          ? data
          : Array.isArray(data?.results)
          ? data.results
          : [];

        if (!cancelled) {
          setJobs(careerList);
        }
      } catch (err) {
        console.error("Career API Error:", err);

        if (!cancelled) {
          setJobs([]);
          setError(
            "Unable to load current openings."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchCareers();

    return () => {
      cancelled = true;
    };
  }, []);

  /* =======================================================
     SEARCH FILTER
  ======================================================= */

  const filteredJobs = jobs.filter((job) => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return true;
    }

    const title =
      typeof job?.title === "string"
        ? job.title.toLowerCase()
        : "";

    const company =
      typeof job?.company === "string"
        ? job.company.toLowerCase()
        : "";

    const department =
      typeof job?.department === "string"
        ? job.department.toLowerCase()
        : "";

    const location =
      typeof job?.location === "string"
        ? job.location.toLowerCase()
        : "";

    let skills = "";

    if (Array.isArray(job?.skills)) {
      skills = job.skills
        .map((skill) => String(skill))
        .join(" ")
        .toLowerCase();
    } else if (
      typeof job?.skills === "string"
    ) {
      skills = job.skills.toLowerCase();
    }

    return (
      title.includes(query) ||
      company.includes(query) ||
      department.includes(query) ||
      location.includes(query) ||
      skills.includes(query)
    );
  });

  return (
    <>
      <Navbar />

      <main className="career-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="career-hero">

          <div className="career-hero-grid-pattern" />

          <div className="career-hero-image-wrap">
            <Image
              src="/images/career/career-hero.webp"
              alt="SPS team working together"
              fill
              priority
              sizes="(max-width: 700px) 100vw, 60vw"
              className="career-hero-image"
            />
          </div>

          <div className="career-glow career-glow-one" />
          <div className="career-glow career-glow-two" />

          <div className="career-container career-hero-container">

            <motion.div
              className="career-hero-content"
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >

              <span className="career-kicker">
                CAREER AT SPS
              </span>

              <h1>
                Build What&apos;s
                <span>
                  Next With Us
                </span>
              </h1>

              <p>
                Great ideas. Great people. Real impact.
                Join our team and build the future of
                technology together.
              </p>

              <div className="career-hero-actions">

                <a
                  href="#open-positions"
                  className="career-primary-btn"
                >
                  Explore Opportunities
                  <FiArrowRight />
                </a>

                <a
                  href="#life-at-sps"
                  className="career-secondary-btn"
                >
                  Life at SPS
                </a>

              </div>

            </motion.div>

          </div>
        </section>

        {/* =====================================================
            STATS
        ===================================================== */}

        <section className="career-stats-wrap">

          <div className="career-container">

            <motion.div
              className="career-stats"
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

              <div className="career-stat">

                <div className="career-stat-icon purple">
                  <FiUsers />
                </div>

                <div>
                  <strong>
                    <AnimatedCounter
                      end={50}
                      duration={1600}
                      suffix="+"
                    />
                  </strong>

                  <span>
                    Team Members
                  </span>
                </div>

              </div>

              <div className="career-stat">

                <div className="career-stat-icon blue">
                  <FiBriefcase />
                </div>

                <div>
                  <strong>
                    <AnimatedCounter
                      end={100}
                      duration={1800}
                      suffix="+"
                    />
                  </strong>

                  <span>
                    Projects Delivered
                  </span>
                </div>

              </div>

              <div className="career-stat">

                <div className="career-stat-icon green">
                  <FiCode />
                </div>

                <div>
                  <strong>
                    <AnimatedCounter
                      end={10}
                      duration={1200}
                      suffix="+"
                    />
                  </strong>

                  <span>
                    Technologies
                  </span>
                </div>

              </div>

              <div className="career-stat">

                <div className="career-stat-icon orange">
                  <FiTrendingUp />
                </div>

                <div>
                  <strong>
                    <AnimatedCounter
                      end={5}
                      duration={1000}
                      suffix="+"
                    />
                  </strong>

                  <span>
                    Years Of Excellence
                  </span>
                </div>

              </div>

            </motion.div>

          </div>
        </section>

        {/* =====================================================
            LIFE AT SPS
        ===================================================== */}

        <section
          className="life-section"
          id="life-at-sps"
        >

          <div className="career-container">

            <div className="section-heading">

              <span>
                LIFE AT SPS
              </span>

              <h2>
                A Place To Learn,
                <strong>
                  {" "}
                  Create &amp; Grow
                </strong>
              </h2>

              <p>
                We believe great work happens when
                passionate people grow together.
              </p>

            </div>

            <div className="life-grid">

              {lifeAtSPS.map(
                (item, index) => {

                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={item.title}
                      className="life-card"
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
                        duration: 0.45,
                        delay: index * 0.05,
                      }}
                      whileHover={{
                        y: -8,
                      }}
                    >

                      <div className="life-card-icon">
                        <Icon />
                      </div>

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.text}
                      </p>

                    </motion.article>
                  );
                }
              )}

            </div>

          </div>
        </section>

        {/* =====================================================
            WHY JOIN SPS
        ===================================================== */}

        <section className="why-section">

          <div className="career-container">

            <div className="section-heading">

              <span>
                WHY JOIN SPS?
              </span>

              <h2>
                More Than Just
                <strong>
                  {" "}
                  A Job
                </strong>
              </h2>

              <p>
                Build your career with a team that
                values people, learning and impact.
              </p>

            </div>

            <div className="why-grid">

              {whyJoin.map(
                (item, index) => (

                  <motion.article
                    key={item.title}
                    className="why-card"
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
                      duration: 0.45,
                      delay: index * 0.04,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                  >

                    <div className="why-card-icon">
                      <FiCheck />
                    </div>

                    <div>

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.text}
                      </p>

                    </div>

                  </motion.article>

                )
              )}

            </div>

          </div>
        </section>

        {/* =====================================================
            OPEN POSITIONS
        ===================================================== */}

        <section
          className="openings-section"
          id="open-positions"
        >

          <div className="career-container">

            <div className="openings-top">

              <div>

                <span className="section-eyebrow">
                  OPEN POSITIONS
                </span>

                <h2>
                  Current
                  <strong>
                    {" "}
                    Openings
                  </strong>
                </h2>

                <p>
                  Find the right opportunity and
                  take the next step in your career.
                </p>

              </div>

              <div className="open-role-count">
                {jobs.length} Open Roles
              </div>

            </div>

            {/* =================================================
                SEARCH
            ================================================= */}

            <div className="jobs-search">

              <FiSearch />

              <input
                type="text"
                placeholder="Search jobs, skills or location..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>

            {/* =================================================
                LOADING
            ================================================= */}

            {loading && (

              <div className="jobs-status">

                <div className="jobs-spinner" />

                <p>
                  Loading current openings...
                </p>

              </div>

            )}

            {/* =================================================
                ERROR
            ================================================= */}

            {!loading && error && (

              <div className="jobs-status error">

                <FiBriefcase />

                <h3>
                  Unable to load openings
                </h3>

                <p>
                  Please check your backend API.
                </p>

              </div>

            )}

            {/* =================================================
                EMPTY
            ================================================= */}

            {!loading &&
              !error &&
              filteredJobs.length === 0 && (

                <div className="jobs-status">

                  <FiBriefcase />

                  <h3>
                    No current openings
                  </h3>

                  <p>
                    New opportunities will appear
                    here when they are published.
                  </p>

                </div>

              )}

            {/* =================================================
                DYNAMIC JOBS FROM BACKEND
            ================================================= */}

            {!loading &&
              !error &&
              filteredJobs.length > 0 && (

                <div className="jobs-list">

                  {filteredJobs.map(
                    (job, index) => (

                      <motion.article
                        key={
                          job?.id ||
                          `${job?.title}-${index}`
                        }
                        className="job-card"
                        initial={{
                          opacity: 0,
                          y: 18,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.04,
                        }}
                      >

                        <div className="job-left">

                          <div className="job-logo">
                            <FiBriefcase />
                          </div>

                          <div className="job-content">

                            <span className="job-department">
                              {job?.department ||
                                "Technology"}
                            </span>

                            <h3>
                              {job?.title ||
                                "Untitled Position"}
                            </h3>

                            <p>
                              {job?.company ||
                                "SPS Solutions"}
                            </p>

                            <div className="job-meta">

                              {job?.location && (

                                <span>
                                  <FiMapPin />
                                  {job.location}
                                </span>

                              )}

                              {job?.employment_type && (

                                <span>
                                  <FiClock />
                                  {job.employment_type}
                                </span>

                              )}

                              {job?.experience && (

                                <span>
                                  <FiUsers />
                                  {job.experience}
                                </span>

                              )}

                            </div>

                            {/* SKILLS */}

                            {Array.isArray(
                              job?.skills
                            ) &&
                              job.skills.length > 0 && (

                                <div className="job-skills">

                                  {job.skills
                                    .slice(0, 5)
                                    .map(
                                      (skill, skillIndex) => (

                                        <span
                                          key={`${skill}-${skillIndex}`}
                                        >
                                          {skill}
                                        </span>

                                      )
                                    )}

                                </div>

                              )}

                          </div>

                        </div>

                        <div className="job-right">

                          {job?.salary && (

                            <strong className="job-salary">
                              {job.salary}
                            </strong>

                          )}

                          {job?.posted_date && (

                            <small>
                              Posted{" "}
                              {new Date(
                                job.posted_date
                              ).toLocaleDateString(
                                "en-IN",
                                {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                }
                              )}
                            </small>

                          )}

                          {job?.id && (

                            <a
                              href={`/career/${job.id}`}
                              className="job-view-btn"
                            >
                              View Role
                              <FiArrowRight />
                            </a>

                          )}

                        </div>

                      </motion.article>

                    )
                  )}

                </div>

              )}

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="career-final-section">

          <div className="career-container">

            <div className="career-final">

              <div className="career-final-image">

                <Image
                  src="/images/career/career-cta.webp"
                  alt="SPS career journey"
                  fill
                  sizes="(max-width: 700px) 100vw, 48vw"
                  className="career-cta-image"
                />

              </div>

              <div className="career-final-overlay" />

              <div className="career-final-content">

                <span>
                  YOUR CAREER. YOUR IMPACT.
                </span>

                <h2>
                  Come Build Something
                  <strong>
                    Meaningful With Us
                  </strong>
                </h2>

                <p>
                  Join SPS Solutions and grow with
                  a team that values people,
                  technology and real impact.
                </p>

                <a
                  href="#open-positions"
                  className="career-final-btn"
                >
                  Join SPS Team
                  <FiArrowRight />
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}