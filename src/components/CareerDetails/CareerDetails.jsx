"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

import {
  FiArrowLeft,
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiMapPin,
  FiUsers,
} from "react-icons/fi";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import "./CareerDetails.css";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://127.0.0.1:8000";

export default function CareerDetails() {
  const params = useParams();
  const router = useRouter();

  const jobId = params?.id;

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!jobId) return;

    let cancelled = false;

    const fetchJob = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_URL}/api/careers/${jobId}/`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error(
            `Unable to fetch job: ${response.status}`
          );
        }

        const data = await response.json();

        if (!cancelled) {
          setJob(data);
        }
      } catch (err) {
        console.error(err);

        if (!cancelled) {
          setError(
            "Unable to load this job opening."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchJob();

    return () => {
      cancelled = true;
    };
  }, [jobId]);

  if (loading) {
    return (
      <>
        <Navbar />

        <main className="career-details-page">
          <div className="career-details-status">
            <div className="career-details-spinner" />
            <p>Loading job details...</p>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  if (error || !job) {
    return (
      <>
        <Navbar />

        <main className="career-details-page">
          <div className="career-details-status error">
            <FiBriefcase />

            <h2>Job opening not found</h2>

            <p>
              This position may have been removed
              or is no longer available.
            </p>

            <button
              type="button"
              onClick={() => router.push("/career")}
            >
              <FiArrowLeft />
              Back to Careers
            </button>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  const skills = Array.isArray(job.skills)
    ? job.skills
    : [];

  const requirements = job.requirements
    ? job.requirements
        .split(/\r?\n/)
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

  const responsibilities = job.responsibilities
    ? job.responsibilities
        .split(/\r?\n/)
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

  return (
    <>
      <Navbar />

      <main className="career-details-page">

        {/* =================================================
            HERO WITH IMAGE
        ================================================= */}

        <section className="career-details-hero">

          <div className="career-details-hero-image">
            <Image
              src="/images/career/career-hero.webp"
              alt="SPS careers"
              fill
              priority
              sizes="100vw"
              className="details-hero-img"
            />
          </div>

          <div className="career-details-hero-overlay" />
          <div className="career-details-hero-pattern" />

          <div className="career-details-container">

            <motion.div
              className="career-details-hero-content"
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
              }}
            >

              <button
                type="button"
                className="career-back-btn"
                onClick={() =>
                  router.push("/career")
                }
              >
                <FiArrowLeft />
                Back to Careers
              </button>

              <span className="career-details-kicker">
                {job.department ||
                  "CAREER OPPORTUNITY"}
              </span>

              <h1>{job.title}</h1>

              <p className="career-details-company">
                {job.company ||
                  "SPS Solutions"}
              </p>

              <div className="career-details-meta">

                {job.location && (
                  <span>
                    <FiMapPin />
                    {job.location}
                  </span>
                )}

                {job.employment_type && (
                  <span>
                    <FiClock />
                    {job.employment_type}
                  </span>
                )}

                {job.experience && (
                  <span>
                    <FiUsers />
                    {job.experience}
                  </span>
                )}

                {job.salary && (
                  <span>
                    <FiDollarSign />
                    {job.salary}
                  </span>
                )}

              </div>

            </motion.div>

          </div>
        </section>


        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <section className="career-details-content">

          <div className="career-details-container">

            <div className="career-details-grid">

              {/* LEFT */}

              <motion.div
                className="career-details-main"
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

                <section className="details-section">

                  <span className="details-label">
                    ABOUT THE ROLE
                  </span>

                  <h2>
                    Job Overview
                  </h2>

                  <p>
                    {job.description ||
                      "Join our team and contribute to meaningful projects while growing your technical skills and career."}
                  </p>

                </section>


                {responsibilities.length > 0 && (
                  <section className="details-section">

                    <span className="details-label">
                      RESPONSIBILITIES
                    </span>

                    <h2>
                      What You&apos;ll Do
                    </h2>

                    <div className="details-check-list">

                      {responsibilities.map(
                        (item, index) => (
                          <div
                            className="details-check-item"
                            key={`${item}-${index}`}
                          >
                            <FiCheckCircle />
                            <span>{item}</span>
                          </div>
                        )
                      )}

                    </div>

                  </section>
                )}


                {requirements.length > 0 && (
                  <section className="details-section">

                    <span className="details-label">
                      REQUIREMENTS
                    </span>

                    <h2>
                      What We&apos;re Looking For
                    </h2>

                    <div className="details-check-list">

                      {requirements.map(
                        (item, index) => (
                          <div
                            className="details-check-item"
                            key={`${item}-${index}`}
                          >
                            <FiCheckCircle />
                            <span>{item}</span>
                          </div>
                        )
                      )}

                    </div>

                  </section>
                )}


                {skills.length > 0 && (
                  <section className="details-section">

                    <span className="details-label">
                      SKILLS
                    </span>

                    <h2>
                      Technologies &amp; Skills
                    </h2>

                    <div className="details-skills">

                      {skills.map((skill) => (
                        <span key={skill}>
                          {skill}
                        </span>
                      ))}

                    </div>

                  </section>
                )}

              </motion.div>


              {/* RIGHT SIDEBAR */}

              <motion.aside
                className="career-details-sidebar"
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
              >

                {/* IMAGE CARD */}

                <div className="details-image-card">

                  <Image
                    src="/images/career/career-cta.webp"
                    alt="Join SPS team"
                    fill
                    sizes="350px"
                    className="details-side-image"
                  />

                  <div className="details-image-overlay" />

                  <div className="details-image-text">
                    <span>
                      LIFE AT SPS
                    </span>

                    <h3>
                      Build. Learn. Grow.
                    </h3>

                    <p>
                      Be part of a team that believes
                      in people and technology.
                    </p>
                  </div>

                </div>


                {/* APPLY */}

                <div className="career-apply-card">

                  <span>
                    INTERESTED IN THIS ROLE?
                  </span>

                  <h3>
                    Ready to join SPS?
                  </h3>

                  <p>
                    Take the next step and apply
                    for this opportunity.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      router.push(
                        `/career/${job.id}/apply`
                      )
                    }
                  >
                    Apply Now
                    <FiArrowRight />
                  </button>

                </div>


                {/* SUMMARY */}

                <div className="career-summary-card">

                  <h3>
                    Job Summary
                  </h3>

                  {job.location && (
                    <div className="summary-item">
                      <div className="summary-icon">
                        <FiMapPin />
                      </div>

                      <div>
                        <span>Location</span>
                        <strong>
                          {job.location}
                        </strong>
                      </div>
                    </div>
                  )}

                  {job.employment_type && (
                    <div className="summary-item">
                      <div className="summary-icon">
                        <FiClock />
                      </div>

                      <div>
                        <span>Job Type</span>
                        <strong>
                          {job.employment_type}
                        </strong>
                      </div>
                    </div>
                  )}

                  {job.experience && (
                    <div className="summary-item">
                      <div className="summary-icon">
                        <FiUsers />
                      </div>

                      <div>
                        <span>Experience</span>
                        <strong>
                          {job.experience}
                        </strong>
                      </div>
                    </div>
                  )}

                  {job.salary && (
                    <div className="summary-item">
                      <div className="summary-icon">
                        <FiDollarSign />
                      </div>

                      <div>
                        <span>Salary</span>
                        <strong>
                          {job.salary}
                        </strong>
                      </div>
                    </div>
                  )}

                </div>

              </motion.aside>

            </div>

          </div>
        </section>


        {/* =================================================
            CTA WITH IMAGE
        ================================================= */}

        <section className="career-details-cta">

          <div className="career-details-container">

            <div className="career-details-cta-box">

              <div className="details-cta-image">
                <Image
                  src="/images/career/career-cta.webp"
                  alt="Join SPS"
                  fill
                  sizes="50vw"
                  className="details-cta-img"
                />
              </div>

              <div className="details-cta-overlay" />

              <div className="details-cta-content">

                <span>
                  READY TO JOIN SPS?
                </span>

                <h2>
                  Take The Next Step
                  <strong>
                    In Your Career
                  </strong>
                </h2>

                <p>
                  Apply today and become part of
                  our growing team.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    router.push(
                      `/career/${job.id}/apply`
                    )
                  }
                >
                  Apply Now
                  <FiArrowRight />
                </button>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}