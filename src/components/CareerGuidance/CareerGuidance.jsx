"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FiArrowRight,
  FiAward,
  FiBarChart2,
  FiBriefcase,
  FiCheckCircle,
  FiCompass,
  FiFileText,
  FiMessageCircle,
  FiStar,
  FiTarget,
  FiUsers,
  FiBookOpen,
  FiCode,
} from "react-icons/fi";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import "./CareerGuidance.css";

/* =========================================================
   ANIMATED COUNTER
========================================================= */

function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame = null;

    const animate = (currentTime) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
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
   CAREER SUPPORT
========================================================= */

const supportItems = [
  {
    icon: FiTarget,
    title: "Career Planning",
    text: "Discover the right career path based on your skills, interests and goals.",
    color: "purple",
  },
  {
    icon: FiFileText,
    title: "Resume Building",
    text: "Create professional resumes that highlight your skills and get noticed.",
    color: "blue",
  },
  {
    icon: FiMessageCircle,
    title: "Interview Preparation",
    text: "Prepare for interviews with expert tips, common questions and strategies.",
    color: "green",
  },
  {
    icon: FiBarChart2,
    title: "Skill Assessment",
    text: "Evaluate your skills and identify areas to improve and grow faster.",
    color: "orange",
  },
  {
    icon: FiUsers,
    title: "Mock Interviews",
    text: "Practice with realistic mock interviews and receive useful feedback.",
    color: "pink",
  },
  {
    icon: FiBriefcase,
    title: "Placement Support",
    text: "Get end-to-end support until you successfully reach your career goal.",
    color: "violet",
  },
];

/* =========================================================
   CAREER JOURNEY
========================================================= */

const journey = [
  {
    number: "01",
    icon: FiCompass,
    title: "Discover",
    text: "Understand your strengths, interests and career options.",
  },
  {
    number: "02",
    icon: FiBookOpen,
    title: "Learn",
    text: "Gain the right skills through expert-led training.",
  },
  {
    number: "03",
    icon: FiCode,
    title: "Build",
    text: "Work on real-world projects and build your portfolio.",
  },
  {
    number: "04",
    icon: FiAward,
    title: "Prepare",
    text: "Prepare for interviews with mocks and expert guidance.",
  },
  {
    number: "05",
    icon: FiBriefcase,
    title: "Get Hired",
    text: "Get placed in the right company and start your career.",
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    icon: FiUsers,
    title: "Personalized Guidance",
    text: "One-to-one mentoring tailored to your goals.",
  },
  {
    icon: FiBriefcase,
    title: "Industry Focused",
    text: "Practical knowledge aligned with industry needs.",
  },
  {
    icon: FiStar,
    title: "Mock Practice",
    text: "Regular mock sessions to improve interview confidence.",
  },
  {
    icon: FiArrowRight,
    title: "End-to-End Support",
    text: "Support from learning to placement and beyond.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function CareerGuidance() {
  return (
    <>
      <Navbar />

      <main className="career-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="career-hero">

          <div className="career-hero-overlay" />
          <div className="career-hero-grid-bg" />

          <div className="career-container career-hero-grid">

            {/* LEFT */}

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
                CAREER GUIDANCE
              </span>

              <h1>
                Build Your Career
                <span>
                  With Confidence
                </span>
              </h1>

              <p>
                Personalized guidance, expert mentorship and
                practical support to help you achieve your
                dream career.
              </p>

              <a
                href="#career-support"
                className="career-primary-btn"
              >
                Get Career Guidance
                <FiArrowRight />
              </a>

              {/* =================================================
                  COUNTERS
              ================================================= */}

              <div className="career-stats">

                {/* 50+ */}

                <div className="career-stat">

                  <FiUsers />

                  <div>

                    <strong>
                      <AnimatedCounter
                        end={50}
                        duration={2000}
                        suffix="+"
                      />
                    </strong>

                    <span>
                      Expert Mentors
                    </span>

                  </div>

                </div>


                {/* 1000+ */}

                <div className="career-stat">

                  <FiBriefcase />

                  <div>

                    <strong>
                      <AnimatedCounter
                        end={1000}
                        duration={2200}
                        suffix="+"
                      />
                    </strong>

                    <span>
                      Placed Students
                    </span>

                  </div>

                </div>


                {/* 92% */}

                <div className="career-stat">

                  <FiCheckCircle />

                  <div>

                    <strong>
                      <AnimatedCounter
                        end={92}
                        duration={2000}
                        suffix="%"
                      />
                    </strong>

                    <span>
                      Success Rate
                    </span>

                  </div>

                </div>

              </div>

            </motion.div>


            {/* RIGHT */}

            <motion.div
              className="career-hero-visual"
              initial={{
                opacity: 0,
                scale: 0.95,
                x: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.15,
              }}
            >

              <div className="career-image-glow" />

              <Image
                src="/images/career-guidance/career-hero.webp"
                alt="Career guidance and mentorship"
                width={900}
                height={520}
                priority
                className="career-hero-image"
              />

              <div className="career-quote-card">

                <span>“</span>

                <p>
                  The best way to predict your future
                  is to <strong>create it.</strong>
                </p>

                <div />

              </div>

            </motion.div>

          </div>
        </section>


        {/* =====================================================
            COMPLETE CAREER SUPPORT
        ===================================================== */}

        <section
          className="career-support"
          id="career-support"
        >

          <div className="career-container">

            <div className="career-section-heading">

              <span>
                HOW WE HELP YOU
              </span>

              <h2>
                Complete Career Support
              </h2>

              <p>
                Everything you need to confidently move
                from learning to your dream career.
              </p>

            </div>


            <div className="career-support-grid">

              {supportItems.map(
                (item, index) => {

                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={item.title}
                      className={`career-support-card ${item.color}`}
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
                        amount: 0.15,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.05,
                      }}
                      whileHover={{
                        y: -6,
                      }}
                    >

                      <div className="career-support-icon">
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

                    </motion.article>
                  );
                }
              )}

            </div>

          </div>
        </section>


        {/* =====================================================
            WHY SPS
        ===================================================== */}

        <section className="career-why">

          <div className="career-container">

            <motion.div
              className="career-why-box"
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

              <div className="career-why-intro">

                <span>
                  WHY CHOOSE SPS?
                </span>

                <h2>
                  We Focus On Your
                  <strong>
                    Career Success
                  </strong>
                </h2>

                <p>
                  We provide industry-focused guidance,
                  personalized support and practical strategies
                  to help you stand out and achieve your goals.
                </p>

              </div>


              <div className="career-benefits">

                {benefits.map(
                  (item) => {

                    const Icon = item.icon;

                    return (
                      <div
                        className="career-benefit"
                        key={item.title}
                      >

                        <div className="career-benefit-icon">
                          <Icon />
                        </div>

                        <h3>
                          {item.title}
                        </h3>

                        <p>
                          {item.text}
                        </p>

                      </div>
                    );
                  }
                )}

              </div>

            </motion.div>

          </div>
        </section>


        {/* =====================================================
            CAREER JOURNEY
        ===================================================== */}

        <section className="career-journey">

          <div className="career-container">

            <div className="career-section-heading">

              <span>
                YOUR CAREER JOURNEY
              </span>

              <h2>
                From Learning To Getting
                <strong>
                  Hired
                </strong>
              </h2>

              <p>
                A clear step-by-step path designed to
                move your career forward.
              </p>

            </div>


            <div className="career-journey-line" />


            <div className="career-journey-grid">

              {journey.map(
                (item, index) => {

                  const Icon = item.icon;

                  return (
                    <motion.div
                      className="career-journey-item"
                      key={item.number}
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
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                    >

                      <div className="career-journey-icon">
                        <Icon />
                      </div>

                      <span className="journey-number">
                        {item.number}
                      </span>

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.text}
                      </p>

                    </motion.div>
                  );
                }
              )}

            </div>

          </div>
        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="career-final-cta">

          <div className="career-container">

            <motion.div
              className="career-final-box"
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

              <div className="career-final-visual">

                <div className="career-advisor-shape">
                  <FiUsers />
                </div>

              </div>


              <div className="career-final-content">

                <span>
                  READY TO TAKE THE NEXT STEP?
                </span>

                <h2>
                  Let's Build Your Better
                  <strong>
                    Tomorrow
                  </strong>
                </h2>

                <p>
                  Talk to our career advisors and get a
                  personalized roadmap for your success.
                </p>

                <a
                  href="/contact"
                  className="career-final-btn"
                >
                  Talk To A Career Advisor
                  <FiArrowRight />
                </a>

                <div className="career-trust">

                  <span>
                    ◉ Free Consultation
                  </span>

                  <span>
                    ◉ 100% Confidential
                  </span>

                </div>

              </div>

            </motion.div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}