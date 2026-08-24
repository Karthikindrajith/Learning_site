"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import Navbar from "../Navbar/Navbar";
import {
  FiArrowRight,
  FiUsers,
  FiAward,
  FiTrendingUp,
  FiTarget,
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
  FiMessageCircle,
  FiBarChart2,
} from "react-icons/fi";

import "./CareerGuidance.css";

export default function CareerGuidance() {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartCount(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
  
    <main className="career-page">
  <Navbar />
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="career-hero">

        <div className="career-hero-grid-bg"></div>

        <div className="career-hero-overlay"></div>

        <div className="career-container career-hero-grid">

          {/* HERO CONTENT */}

          <div className="career-hero-content">

            <div className="career-kicker">
              CAREER GUIDANCE
            </div>

            <h1>
              Build Your
              <span>Career With Confidence.</span>
            </h1>

            <p>
              Get the right guidance, practical skills and career
              support you need to move from learning to a successful
              professional career.
            </p>

            <Link
              href="/contact"
              className="career-primary-btn"
            >
              Talk To Our Career Team
              <FiArrowRight />
            </Link>


            {/* =================================================
                STATS
            ================================================= */}

            <div className="career-stats">

              {/* MENTORS */}

              <div className="career-stat floating-stat">

                <FiUsers />

                <div>

                  <strong>
                    {startCount ? (
                      <CountUp
                        start={0}
                        end={50}
                        duration={2.2}
                        suffix="+"
                      />
                    ) : (
                      "0+"
                    )}
                  </strong>

                  <span>
                    Expert Mentors
                  </span>

                </div>

              </div>


              {/* STUDENTS */}

              <div className="career-stat floating-stat delay-1">

                <FiAward />

                <div>

                  <strong>
                    {startCount ? (
                      <CountUp
                        start={0}
                        end={1000}
                        duration={2.5}
                        separator=","
                        suffix="+"
                      />
                    ) : (
                      "0+"
                    )}
                  </strong>

                  <span>
                    Placed Students
                  </span>

                </div>

              </div>


              {/* SUCCESS */}

              <div className="career-stat floating-stat delay-2">

                <FiTrendingUp />

                <div>

                  <strong>
                    {startCount ? (
                      <CountUp
                        start={0}
                        end={92}
                        duration={2.3}
                        suffix="%"
                      />
                    ) : (
                      "0%"
                    )}
                  </strong>

                  <span>
                    Success Rate
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              HERO IMAGE
          ================================================= */}

          <div className="career-hero-visual">

            <div className="career-image-glow"></div>

            <img
              src="/images/career-guidance/career-hero.webp"
              alt="Career Guidance"
              className="career-hero-image"
            />

            <div className="career-quote-card">

              <span>“</span>

              <p>
                Your career journey needs the
                <strong> right direction</strong>,
                not just more information.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CAREER SUPPORT
      ===================================================== */}

      <section className="career-support">

        <div className="career-container">

          <div className="career-section-heading">

            <span>
              COMPLETE CAREER SUPPORT
            </span>

            <h2>
              Everything You Need
              To Move Forward.
            </h2>

            <p>
              From choosing the right technology to preparing
              for interviews, our career guidance program supports
              you throughout your journey.
            </p>

          </div>


          <div className="career-support-grid">

            {/* CARD 1 */}

            <div className="career-support-card purple">

              <div>

                <div className="career-support-icon">
                  <FiTarget />
                </div>

                <h3>
                  Career Planning
                </h3>

                <p>
                  Understand your strengths and choose
                  the right career path based on your
                  interests and goals.
                </p>

              </div>

            </div>


            {/* CARD 2 */}

            <div className="career-support-card blue">

              <div>

                <div className="career-support-icon">
                  <FiBookOpen />
                </div>

                <h3>
                  Skill Development
                </h3>

                <p>
                  Build practical technical skills that
                  companies actually look for in
                  modern developers.
                </p>

              </div>

            </div>


            {/* CARD 3 */}

            <div className="career-support-card green">

              <div>

                <div className="career-support-icon">
                  <FiBriefcase />
                </div>

                <h3>
                  Placement Support
                </h3>

                <p>
                  Get continuous support and guidance
                  while preparing for real-world
                  job opportunities.
                </p>

              </div>

            </div>


            {/* CARD 4 */}

            <div className="career-support-card orange">

              <div>

                <div className="career-support-icon">
                  <FiMessageCircle />
                </div>

                <h3>
                  Mock Interviews
                </h3>

                <p>
                  Practice technical and HR interviews
                  with realistic interview scenarios
                  and expert feedback.
                </p>

              </div>

            </div>


            {/* CARD 5 */}

            <div className="career-support-card pink">

              <div>

                <div className="career-support-icon">
                  <FiAward />
                </div>

                <h3>
                  Resume Building
                </h3>

                <p>
                  Create a professional resume that
                  highlights your technical skills,
                  projects and experience.
                </p>

              </div>

            </div>


            {/* CARD 6 */}

            <div className="career-support-card violet">

              <div>

                <div className="career-support-icon">
                  <FiBarChart2 />
                </div>

                <h3>
                  Career Growth
                </h3>

                <p>
                  Continue improving your skills and
                  make better decisions for long-term
                  career growth.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY SPS
      ===================================================== */}

      <section className="career-why">

        <div className="career-container">

          <div className="career-why-box">

            <div className="career-why-intro">

              <span>
                WHY SPS
              </span>

              <h2>
                Guidance That
                <strong> Goes Beyond Training.</strong>
              </h2>

              <p>
                Learning technology is only one part of
                becoming a successful developer. We help
                you understand what comes next.
              </p>

            </div>


            <div className="career-benefits">

              <div className="career-benefit">

                <div className="career-benefit-icon">
                  <FiCheckCircle />
                </div>

                <h3>
                  Industry Focused
                </h3>

                <p>
                  Learn skills aligned with
                  current industry expectations.
                </p>

              </div>


              <div className="career-benefit">

                <div className="career-benefit-icon">
                  <FiUsers />
                </div>

                <h3>
                  Expert Mentorship
                </h3>

                <p>
                  Get guidance from experienced
                  trainers and professionals.
                </p>

              </div>


              <div className="career-benefit">

                <div className="career-benefit-icon">
                  <FiBriefcase />
                </div>

                <h3>
                  Real Projects
                </h3>

                <p>
                  Build practical projects that
                  strengthen your portfolio.
                </p>

              </div>


              <div className="career-benefit">

                <div className="career-benefit-icon">
                  <FiTrendingUp />
                </div>

                <h3>
                  Continuous Growth
                </h3>

                <p>
                  Receive support even after
                  completing your training.
                </p>

              </div>

            </div>

          </div>

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
              Learn.
              <strong> Build. </strong>
              Get Hired.
            </h2>

            <p>
              A simple and structured approach to help
              you become job-ready.
            </p>

          </div>


          <div className="career-journey-line"></div>


          <div className="career-journey-grid">

            <div className="career-journey-item">

              <div className="career-journey-icon">
                <FiTarget />
              </div>

              <span className="journey-number">
                01
              </span>

              <h3>
                Discover
              </h3>

              <p>
                Identify your interests,
                strengths and career goals.
              </p>

            </div>


            <div className="career-journey-item">

              <div className="career-journey-icon">
                <FiBookOpen />
              </div>

              <span className="journey-number">
                02
              </span>

              <h3>
                Learn
              </h3>

              <p>
                Learn modern technologies with
                practical hands-on training.
              </p>

            </div>


            <div className="career-journey-item">

              <div className="career-journey-icon">
                <FiBriefcase />
              </div>

              <span className="journey-number">
                03
              </span>

              <h3>
                Build
              </h3>

              <p>
                Create real-world projects and
                build a strong portfolio.
              </p>

            </div>


            <div className="career-journey-item">

              <div className="career-journey-icon">
                <FiMessageCircle />
              </div>

              <span className="journey-number">
                04
              </span>

              <h3>
                Prepare
              </h3>

              <p>
                Improve your resume, communication
                and interview skills.
              </p>

            </div>


            <div className="career-journey-item">

              <div className="career-journey-icon">
                <FiAward />
              </div>

              <span className="journey-number">
                05
              </span>

              <h3>
                Get Hired
              </h3>

              <p>
                Attend interviews and take the
                next step in your career.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="career-final-cta">

        <div className="career-container">

          <div className="career-final-box">

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
                Let's Build Your
                <strong> Career Together.</strong>
              </h2>

              <p>
                Talk to our career guidance team and
                get a clear roadmap for your professional
                journey.
              </p>

              <Link
                href="/contact"
                className="career-final-btn"
              >
                Get Career Guidance
                <FiArrowRight />
              </Link>


              <div className="career-trust">

                <span>
                  ✓ Personalised Guidance
                </span>

                <span>
                  ✓ Expert Mentors
                </span>

                <span>
                  ✓ Placement Support
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}