"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FiAward,
  FiArrowUpRight,
  FiBriefcase,
  FiCheckCircle,
  FiCode,
  FiTrendingUp,
  FiUsers,
  FiStar,
  FiZap,
} from "react-icons/fi";

import Image from "next/image";
import "./SuccessWall.css";


const companies = [
  "siemens.png",
  "nextwave.png",
  "mytica.png",
  "strive.png",
  "classiczone.png",
  "regel.png",
  "abhiwan.png",
  "inmakes.png",
];

const activities = [
  "Python ERP Successfully Delivered",
  "Hospital Management System Completed",
  "AI Career Assistant Production Ready",
  "React E-Commerce Project Submitted",
  "Cloud LMS Successfully Deployed",
  "Placement Mock Interview Completed",
  "Resume Successfully Reviewed",
  "Student Selected For Internship",
];

const stats = [
  {
    icon: <FiCode />,
    value: 850,
    suffix: "+",
    title: "Projects Completed",
    color: "#6C63FF",
  },
  {
    icon: <FiUsers />,
    value: 3200,
    suffix: "+",
    title: "Students Trained",
    color: "#00C2FF",
  },
  {
    icon: <FiBriefcase />,
    value: 75,
    suffix: "+",
    title: "Company Projects",
    color: "#00D084",
  },
  {
    icon: <FiTrendingUp />,
    value: 640,
    suffix: "+",
    title: "Career Guidance",
    color: "#FFB547",
  },
  {
    icon: <FiAward />,
    value: 180,
    suffix: "+",
    title: "Hiring Partners",
    color: "#FF5C8A",
  },
  {
    icon: <FiStar />,
    value: 98,
    suffix: "%",
    title: "Success Rate",
    color: "#7C4DFF",
  },
];

const timeline = [
  {
    year: "2023",
    title: "Python Foundation",
    desc: "Programming fundamentals and problem solving.",
  },
  {
    year: "2024",
    title: "Full Stack Development",
    desc: "React + Django + REST API Projects.",
  },
  {
    year: "2025",
    title: "Industry Projects",
    desc: "Real company applications and teamwork.",
  },
  {
    year: "2026",
    title: "Placement Support",
    desc: "Resume, Interview & Career Guidance.",
  },
];

const achievements = [
  {
    title: "Python ERP",
    text: "Successfully Delivered",
    icon: "🏆",
  },
  {
    title: "Hospital ERP",
    text: "Client Approved",
    icon: "⭐",
  },
  {
    title: "AI Career Assistant",
    text: "Production Ready",
    icon: "🚀",
  },
  {
    title: "LMS Platform",
    text: "Live Deployment",
    icon: "💼",
  },
];

export default function SuccessWall() {
  return (
    <section className="success-wall">

      <div className="success-grid"></div>
      <div className="success-glow glow-one"></div>
      <div className="success-glow glow-two"></div>

      <div className="success-container">

        {/* Header */}

        <motion.div
          className="success-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <div className="success-badge">
            <span></span>
            SUCCESS WALL
            <FiZap />
          </div>

          <h2>
            Real Results.
            <span> Real Success.</span>
          </h2>

          <p>
            Every project completed, every interview cleared and every
            successful career journey begins with practical learning at SPS.
          </p>

        </motion.div>

        {/* Counters */}

        <div className="success-counter-grid">

          {stats.map((item, index) => (

            <motion.div
              key={item.title}
              className="success-counter-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .1,
                duration: .6,
              }}
            >

              <div
                className="counter-icon"
                style={{
                  background: item.color,
                }}
              >
                {item.icon}
              </div>

              <h3>

                <CountUp
                  end={item.value}
                  duration={3}
                  enableScrollSpy
                />

                {item.suffix}

              </h3>

              <p>{item.title}</p>

            </motion.div>

          ))}

        </div>

        {/* Main Grid */}

        <div className="success-main-grid">

          {/* Timeline */}

          <motion.div
            className="timeline-card glass-card"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h3>Career Journey</h3>

            <div className="timeline">

              {timeline.map((item) => (

                <div
                  className="timeline-item"
                  key={item.year}
                >

                  <div className="timeline-dot"></div>

                  <div className="timeline-content">

                    <span>{item.year}</span>

                    <h4>{item.title}</h4>

                    <p>{item.desc}</p>

                  </div>

                </div>

              ))}

            </div>

          </motion.div>

          {/* Trophy */}

          <motion.div
            className="trophy-card glass-card"
            initial={{ opacity: 0, scale: .9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >

            <Image
              src="/images/success/trophy.webp"
              alt="Success Trophy"
              width={320}
              height={320}
              className="trophy-image"
            />

            <h3>SUCCESS STARTS HERE</h3>

            <p>
              We transform learners into professionals through
              practical projects, mentorship and placement support.
            </p>

          </motion.div>

          {/* Achievement */}

          <motion.div
            className="achievement-column"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            {achievements.map((item) => (

              <div
                className="achievement-card glass-card"
                key={item.title}
              >

                <div className="achievement-icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

                <p>{item.text}</p>

                <FiArrowUpRight />

              </div>

            ))}

          </motion.div>

        </div>

        {/* Company Logo Marquee */}

     {/* =====================================================
    COMPANY PARTNERS
===================================================== */}

<motion.div
  className="company-partners"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>

  <div className="company-title">

    <span>OUR INDUSTRY PARTNERS</span>

    <h3>
      Trusted By
      <strong> Leading Companies.</strong>
    </h3>

    <p>
      Students gain practical exposure by working on
      real-time company requirements and industry projects.
    </p>

  </div>

  <div className="company-marquee">

    <div className="company-track">

      {[...companies, ...companies].map((logo, index) => (

        <motion.div
          key={index}
          className="company-box"
          whileHover={{
            y: -8,
            scale: 1.05,
          }}
        >

          <Image
            src={`/images/companies/${logo}`}
            alt={logo}
            width={150}
            height={70}
          />

        </motion.div>

      ))}

    </div>

  </div>

</motion.div>


{/* =====================================================
      LIVE PROJECT ACTIVITY
===================================================== */}

<motion.div
  className="live-activity glass-card"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>

  <div className="live-header">

    <span className="live-indicator"></span>

    LIVE PROJECT FEED

  </div>

  <div className="activity-list">

    {activities.map((activity, index) => (

      <motion.div
        key={index}
        className="activity-item"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: index * .08,
        }}
      >

        <FiCheckCircle />

        <span>{activity}</span>

      </motion.div>

    ))}

  </div>

</motion.div>


{/* =====================================================
      PLACEMENT SUPPORT
===================================================== */}

<motion.div
  className="placement-section"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>

  <div className="placement-left">

    <span className="placement-badge">

      PLACEMENT TEAM SUPPORT

    </span>

    <h2>

      Your Career Doesn't End
      <span> After Learning.</span>

    </h2>

    <p>

      Our dedicated placement team continuously supports
      every learner with resume preparation,
      interview training,
      company opportunities,
      application guidance,
      career mentoring
      and placement assistance.

    </p>


    <div className="placement-points">

      <div>

        <FiCheckCircle />

        Dedicated Placement Team

      </div>

      <div>

        <FiCheckCircle />

        Resume Review

      </div>

      <div>

        <FiCheckCircle />

        ATS Friendly Resume

      </div>

      <div>

        <FiCheckCircle />

        Mock HR Interview

      </div>

      <div>

        <FiCheckCircle />

        Technical Interview

      </div>

      <div>

        <FiCheckCircle />

        LinkedIn Profile Setup

      </div>

      <div>

        <FiCheckCircle />

        Company Referrals

      </div>

      <div>

        <FiCheckCircle />

        Career Mentoring

      </div>

    </div>

  </div>


  <motion.div
    className="placement-right"
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: 5,
      ease: "easeInOut",
    }}
  >

    <Image
      src="/images/success/students.webp"
      alt="Placement Support"
      width={520}
      height={520}
      className="placement-image"
    />

  </motion.div>

</motion.div>


{/* =====================================================
      SUCCESS CTA
===================================================== */}

<motion.div
  className="success-cta"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>

  <h2>

    Build Skills.
    Build Projects.
    <span> Build Your Future.</span>

  </h2>

  <p>

    Join SPS Learning Solutions and start your
    transformation with practical learning,
    live projects,
    dedicated mentors
    and placement support.

  </p>

  <a
    href="/contact"
    className="success-button"
  >

    Start Your Journey

    <FiArrowUpRight />

  </a>

</motion.div>

</div>

</section>

    
  );
}