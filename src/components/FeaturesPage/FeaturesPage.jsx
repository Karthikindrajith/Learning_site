"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
  FiCode,
  FiLayers,
  FiUsers,
  FiVideo,
} from "react-icons/fi";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import "./FeaturesPage.css";

/* =========================================================
   FEATURE DATA
========================================================= */

const features = [
  {
    icon: FiVideo,
    title: "Live Interactive Classes",
    text: "Learn in real-time with expert instructors, ask questions and clear your doubts instantly.",
    color: "purple",
  },
  {
    icon: FiCode,
    title: "Hands-on Projects",
    text: "Work on practical real-world projects and build a strong portfolio that showcases your skills.",
    color: "blue",
  },
  {
    icon: FiUsers,
    title: "Expert Mentorship",
    text: "Get guidance from experienced mentors who help you stay focused on the right career path.",
    color: "green",
  },
  {
    icon: FiBookOpen,
    title: "Comprehensive Library",
    text: "Access structured notes, recorded sessions, study materials and learning resources anytime.",
    color: "orange",
  },
  {
    icon: FiBriefcase,
    title: "Career Support",
    text: "Get resume support, interview preparation and placement assistance throughout your journey.",
    color: "pink",
  },
  {
    icon: FiAward,
    title: "Certificate of Completion",
    text: "Earn a professional certificate and showcase your skills to improve your career opportunities.",
    color: "violet",
  },
];

/* =========================================================
   STATS
========================================================= */

const stats = [
  {
    icon: FiUsers,
    value: "10K+",
    label: "Students Trained",
  },
  {
    icon: FiBookOpen,
    value: "200+",
    label: "Courses",
  },
  {
    icon: FiBriefcase,
    value: "500+",
    label: "Placements",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function FeaturesPage() {
  return (
    <>
      <Navbar />

      <main className="features-page">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="features-hero">
          <div className="features-hero-pattern" />
          <div className="features-hero-orb orb-left" />
          <div className="features-hero-orb orb-right" />

          <div className="features-container">

            <motion.div
              className="features-hero-content"
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              <span className="features-kicker">
                FEATURES
              </span>

              <h1>
                Powerful Features
                <span>Designed For Your Success</span>
              </h1>

              <p>
                Everything you need to learn, practice and grow
                in your coding and technology journey.
              </p>

              <div className="features-hero-line">
                <span />
                <span />
                <span />
              </div>

            </motion.div>

          </div>
        </section>


        {/* =================================================
            FEATURE CARDS
        ================================================= */}

        <section className="features-grid-section">

          <div className="features-container">

            <motion.div
              className="features-grid"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
            >

              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.article
                    key={feature.title}
                    className={`feature-card ${feature.color}`}
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
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    whileHover={{
                      y: -7,
                    }}
                  >

                    <div className="feature-icon">
                      <Icon />
                    </div>

                    <h2>
                      {feature.title}
                    </h2>

                    <p>
                      {feature.text}
                    </p>

                    <div className="feature-card-line" />

                  </motion.article>
                );
              })}

            </motion.div>

          </div>
        </section>


        {/* =================================================
            WHY SPS
        ================================================= */}

        <section className="why-sps-section">

          <div className="features-container">

            <motion.div
              className="why-sps-box"
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

              {/* LEFT */}

              <div className="why-sps-content">

                <span className="why-label">
                  WHY CHOOSE SPS?
                </span>

                <h2>
                  Simple. Practical.
                  <span>Career Focused.</span>
                </h2>

                <p>
                  We believe in practical learning with
                  real-time projects, structured guidance
                  and continuous support until you achieve
                  your goals.
                </p>

                <div className="why-stats">

                  {stats.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        className="why-stat"
                        key={item.label}
                      >

                        <Icon />

                        <div>
                          <strong>
                            {item.value}
                          </strong>

                          <span>
                            {item.label}
                          </span>
                        </div>

                      </div>
                    );
                  })}

                </div>

              </div>


              {/* RIGHT IMAGE */}

              <div className="why-sps-image-wrap">

                <div className="why-image-glow" />

                <Image
                  src="/images/features/features-laptop.webp"
                  alt="SPS learning and coding"
                  width={700}
                  height={500}
                  className="why-sps-image"
                />

              </div>

            </motion.div>

          </div>
        </section>


        {/* =================================================
            SUPPORT STRIP
        ================================================= */}

        <section className="support-strip">

          <div className="features-container">

            <motion.div
              className="support-inner"
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
            >

              <div className="support-icon">
                <FiCheckCircle />
              </div>

              <div className="support-content">

                <strong>
                  Learn with confidence.
                </strong>

                <span>
                  Structured courses, practical projects
                  and career-focused support.
                </span>

              </div>

            </motion.div>

          </div>
        </section>


        {/* =================================================
            CTA
        ================================================= */}

        <section className="features-cta">

          <div className="features-container">

            <motion.div
              className="features-cta-box"
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
                duration: 0.6,
              }}
            >

              <div className="cta-icon">
                <FiLayers />
              </div>

              <div className="cta-content">

                <h2>
                  Ready to Start Your Journey?
                </h2>

                <p>
                  Join SPS and start building the skills
                  that move your career forward.
                </p>

              </div>

              <a
                href="/contact"
                className="cta-button"
              >
                Get Started
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