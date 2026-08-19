"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  FiArrowUpRight,
  FiPlay,
  FiUsers,
  FiBookOpen,
  FiAward,
  FiGlobe,
} from "react-icons/fi";

import "./Hero.css";

/* =========================================================
   STATS
========================================================= */

const stats = [
  {
    icon: <FiUsers />,
    value: 12,
    suffix: "K+",
    label: "Happy Learners",
  },
  {
    icon: <FiBookOpen />,
    value: 5,
    suffix: "+",
    label: "Expert Courses",
  },
  {
    icon: <FiAward />,
    value: 98,
    suffix: "%",
    label: "Success Rate",
  },
  {
    icon: <FiGlobe />,
    value: 10,
    suffix: "+",
    label: "Trainers Worldwide",
  },
];

/* =========================================================
   COUNT UP
========================================================= */

function CountUp({ value, suffix = "", duration = 1700 }) {
  const counterRef = useRef(null);

  const isInView = useInView(counterRef, {
    once: true,
    amount: 0.5,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrame;

    const animateCounter = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      const easeOut =
        1 - Math.pow(1 - progress, 3);

      const currentValue =
        Math.floor(value * easeOut);

      setCount(currentValue);

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(
            animateCounter
          );
      }
    };

    animationFrame =
      requestAnimationFrame(
        animateCounter
      );

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(
          animationFrame
        );
      }
    };
  }, [
    isInView,
    value,
    duration,
  ]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
}

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const heroRef = useRef(null);

  /*
    Hero scroll progress:

    0 = hero start
    1 = hero completely leaving viewport
  */

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: [
      "start start",
      "end start",
    ],
  });

  /*
    LEFT CONTENT PARALLAX
  */

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 90]
  );

  const contentOpacity =
    useTransform(
      scrollYProgress,
      [0, 0.65, 1],
      [1, 0.8, 0]
    );

  /*
    VR CHARACTER PARALLAX

    Different speed creates
    depth effect.
  */

  const visualY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 150]
  );

  const visualScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.9]
  );

  const visualRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 2]
  );

  /*
    BACKGROUND GLOW
  */

  const glowY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 200]
  );

  /*
    STATS slight parallax
  */

  const statsY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 35]
  );

  return (
    <section
      ref={heroRef}
      className="hero"
      id="home"
    >
      {/* ======================================
          BACKGROUND
      ====================================== */}

      <div className="hero-grid" />

      <motion.div
        className="hero-glow hero-glow-1"
        style={{
          y: glowY,
        }}
      />

      <div className="hero-glow hero-glow-2" />
      <div className="hero-glow hero-glow-3" />

      {/* ======================================
          STARS
      ====================================== */}

      <div className="hero-stars">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* ======================================
          MAIN CONTAINER
      ====================================== */}

      <div className="hero-container">

        {/* ====================================
            LEFT CONTENT
        ==================================== */}

        <motion.div
          className="hero-content"
          style={{
            y: contentY,
            opacity: contentOpacity,
          }}
        >
          {/* BADGE */}

          <motion.div
            className="hero-badge"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <span className="badge-light" />

            <span>
              Learn • Innovate • Succeed
            </span>
          </motion.div>

          {/* TITLE */}

          <motion.h1
            className="hero-title"
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Where Imagination

            <span>
              Becomes Innovation
            </span>
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            className="hero-description"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
          >
            Build future-ready skills
            through industry-focused
            courses, hands-on projects
            and expert mentorship. Learn,
            create and transform your
            career with SPS Solutions.
          </motion.p>

          {/* BUTTONS */}

          <motion.div
            className="hero-actions"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.55,
            }}
          >
            <a
              href="/courses"
              className="hero-primary-btn"
            >
              <FiArrowUpRight />

              <span>
                Let's Build Something Epic
              </span>
            </a>

            <a
              href="/courses"
              className="hero-secondary-btn"
            >
              <span>
                Explore Courses
              </span>

              <span className="secondary-icon">
                <FiPlay />
              </span>
            </a>
          </motion.div>

          {/* ====================================
              TRUST
          ==================================== */}

          <motion.div
            className="hero-trust"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.7,
            }}
          >
            <div className="hero-avatars">
              <div>S</div>
              <div>P</div>
              <div>S</div>
              <div>+</div>
            </div>

            <div className="hero-trust-text">
              <span>
                Trusted by learners
              </span>

              <strong>
                Build skills for the future.
              </strong>
            </div>
          </motion.div>
        </motion.div>

        {/* ====================================
            RIGHT VISUAL
        ==================================== */}

        <motion.div
          className="hero-visual"
          style={{
            y: visualY,
            scale: visualScale,
            rotate: visualRotate,
          }}
          initial={{
            opacity: 0,
            x: 70,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* RINGS */}

          <div className="hero-ring hero-ring-1" />
          <div className="hero-ring hero-ring-2" />
          <div className="hero-ring hero-ring-3" />

          {/* ORBIT DOT 1 */}

          <motion.div
            className="
              hero-orbit-dot
              hero-orbit-dot-1
            "
            animate={{
              y: [
                0,
                -15,
                0,
              ],
              x: [
                0,
                5,
                0,
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* ORBIT DOT 2 */}

          <motion.div
            className="
              hero-orbit-dot
              hero-orbit-dot-2
            "
            animate={{
              y: [
                0,
                12,
                0,
              ],
              x: [
                0,
                -5,
                0,
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* ====================================
              IMAGE
          ==================================== */}

          <motion.div
            className="hero-image-wrapper"
            animate={{
              y: [
                0,
                -10,
                0,
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="hero-image-glow" />

            <Image
              src="/images/sps-hero-vr.png"
              alt="SPS Solutions futuristic learning experience"
              fill
              priority
              sizes="
                (max-width: 900px)
                100vw,
                55vw
              "
              className="hero-main-image"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* ======================================
          STATS
      ====================================== */}

      <motion.div
        className="hero-stats"
        style={{
          y: statsY,
        }}
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
          amount: 0.25,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {stats.map(
          (stat, index) => (
            <motion.div
              className="hero-stat"
              key={stat.label}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay:
                  index * 0.12,
              }}
            >
              <div
                className={`
                  stat-icon
                  stat-icon-${index + 1}
                `}
              >
                {stat.icon}
              </div>

              <div className="stat-info">
                <strong>
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </strong>

                <span>
                  {stat.label}
                </span>
              </div>
            </motion.div>
          )
        )}
      </motion.div>

      {/* ======================================
          SCROLL INDICATOR
      ====================================== */}

      <motion.a
        href="#features"
        className="hero-scroll-indicator"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1.2,
        }}
      >
        <span className="scroll-text">
          SCROLL TO EXPLORE
        </span>

        <div className="scroll-mouse">
          <motion.span
            animate={{
              y: [
                0,
                8,
                0,
              ],
              opacity: [
                1,
                0.3,
                1,
              ],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.a>

      {/* ======================================
          SIDE QUOTE
      ====================================== */}

      <a
        href="/contact"
        className="hero-quote"
      >
        <span>
          Get a Free Quote
        </span>

        <FiArrowUpRight />
      </a>

      {/* ======================================
          BOTTOM TRANSITION
      ====================================== */}

      <div className="hero-bottom-curve" />
    </section>
  );
}