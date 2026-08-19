"use client";

import { motion } from "framer-motion";

import {
  FiBriefcase,
  FiCode,
  FiAward,
  FiUsers,
  FiArrowUpRight,
} from "react-icons/fi";

import "./WhySPS.css";


const features = [
  {
    number: "01",
    icon: <FiBriefcase />,
    title: "Industry-Focused Courses",
    description:
      "Learn skills that companies actually use with practical, career-focused curriculum.",
  },

  {
    number: "02",
    icon: <FiCode />,
    title: "Real-World Projects",
    description:
      "Build practical projects that strengthen your skills and create a powerful portfolio.",
  },

  {
    number: "03",
    icon: <FiAward />,
    title: "Career Certifications",
    description:
      "Validate your learning with certifications designed to support your career growth.",
  },

  {
    number: "04",
    icon: <FiUsers />,
    title: "Expert Mentorship",
    description:
      "Learn with experienced trainers who guide you from fundamentals to real implementation.",
  },
];


export default function WhySPS() {
  return (
    <section
      className="why-sps"
      id="features"
    >

      {/* BACKGROUND */}

      <div className="why-grid" />

      <div
        className="
          why-sps-glow
          why-glow-one
        "
      />

      <div
        className="
          why-sps-glow
          why-glow-two
        "
      />


      <div className="why-sps-container">

        {/* =================================
            HEADING
        ================================= */}

        <motion.div
          className="why-sps-heading"
          initial={{
            opacity: 0,
            y: 60,
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
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
        >

          <motion.div
            className="why-sps-badge"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <span />

            WHY SPS SOLUTIONS?
          </motion.div>


          <h2>
            Learn Smarter.

            <span>
              {" "}
              Build Further.
            </span>
          </h2>


          <p>
            More than courses — SPS gives
            you the skills, experience and
            guidance to turn learning into
            real-world impact.
          </p>

        </motion.div>


        {/* =================================
            CARDS
        ================================= */}

        <div className="why-sps-grid">

          {features.map(
            (feature, index) => (

              <motion.article
                className="why-card"
                key={feature.title}

                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.9,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}

                viewport={{
                  once: true,
                  amount: 0.25,
                }}

                transition={{
                  duration: 0.7,

                  delay:
                    index * 0.15,

                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
              >

                {/* NUMBER */}

                <span className="why-card-number">
                  {feature.number}
                </span>


                {/* ICON */}

                <motion.div
                  className="why-card-icon"
                  whileHover={{
                    rotate: 5,
                    scale: 1.08,
                  }}
                >
                  {feature.icon}
                </motion.div>


                {/* TITLE */}

                <h3>
                  {feature.title}
                </h3>


                {/* DESCRIPTION */}

                <p>
                  {feature.description}
                </p>


                {/* LINK */}

                <a
                  href="/courses"
                  className="why-card-link"
                >
                  Discover More

                  <FiArrowUpRight />
                </a>

              </motion.article>

            )
          )}

        </div>

      </div>

    </section>
  );
}