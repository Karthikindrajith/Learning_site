"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

import {
  FiArrowLeft,
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiMapPin,
  FiPhone,
  FiUpload,
  FiUser,
  FiMail,
  FiUsers,
} from "react-icons/fi";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import "./CareerApply.css";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://127.0.0.1:8000";

export default function CareerApply() {
  const params = useParams();
  const router = useRouter();

  const jobId = params?.id;

  const [job, setJob] = useState(null);

  const [loadingJob, setLoadingJob] =
    useState(true);

  const [loadingSubmit, setLoadingSubmit] =
    useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    cover_letter: "",
  });

  const [resume, setResume] = useState(null);
  const [resumeError, setResumeError] =
    useState("");

  /* =========================================================
     FETCH JOB
  ========================================================= */

  useEffect(() => {
    if (!jobId) return;

    let cancelled = false;

    const fetchJob = async () => {
      try {
        setLoadingJob(true);
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
            `Unable to fetch job (${response.status})`
          );
        }

        const data = await response.json();

        if (!cancelled) {
          setJob(data);
        }
      } catch (err) {
        console.error("Career Apply Job Error:", err);

        if (!cancelled) {
          setError(
            "Unable to load this job opening."
          );
        }
      } finally {
        if (!cancelled) {
          setLoadingJob(false);
        }
      }
    };

    fetchJob();

    return () => {
      cancelled = true;
    };
  }, [jobId]);

  /* =========================================================
     INPUT CHANGE
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================================================
     RESUME
  ========================================================= */

  const handleResumeChange = (e) => {
    const file = e.target.files?.[0];

    setResumeError("");

    if (!file) {
      setResume(null);
      return;
    }

    const allowedExtensions = [
      ".pdf",
      ".doc",
      ".docx",
    ];

    const fileName = file.name.toLowerCase();

    const validExtension =
      allowedExtensions.some((extension) =>
        fileName.endsWith(extension)
      );

    const maxSize =
      5 * 1024 * 1024;

    if (!validExtension) {
      setResume(null);
      setResumeError(
        "Only PDF, DOC and DOCX files are allowed."
      );

      e.target.value = "";
      return;
    }

    if (file.size > maxSize) {
      setResume(null);
      setResumeError(
        "Resume must be less than 5 MB."
      );

      e.target.value = "";
      return;
    }

    setResume(file);
  };

  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess(false);
    setResumeError("");

    if (!resume) {
      setResumeError(
        "Please upload your resume."
      );
      return;
    }

    try {
      setLoadingSubmit(true);

      const data = new FormData();

      data.append(
        "job",
        String(jobId)
      );

      data.append(
        "full_name",
        formData.full_name.trim()
      );

      data.append(
        "email",
        formData.email.trim()
      );

      data.append(
        "phone",
        formData.phone.trim()
      );

      data.append(
        "location",
        formData.location.trim()
      );

      data.append(
        "experience",
        formData.experience.trim()
      );

      data.append(
        "cover_letter",
        formData.cover_letter.trim()
      );

      data.append(
        "resume",
        resume
      );

      const response = await fetch(
        `${API_URL}/api/applications/`,
        {
          method: "POST",
          body: data,
        }
      );

      const responseText =
        await response.text();

      let responseData = null;

      try {
        responseData =
          responseText
            ? JSON.parse(responseText)
            : null;
      } catch {
        responseData = responseText;
      }

      if (!response.ok) {
        console.error(
          "Application API error:",
          responseData
        );

        throw new Error(
          "Unable to submit your application."
        );
      }

      setSuccess(true);

      setFormData({
        full_name: "",
        email: "",
        phone: "",
        location: "",
        experience: "",
        cover_letter: "",
      });

      setResume(null);

      const fileInput =
        document.getElementById(
          "career-resume"
        );

      if (fileInput) {
        fileInput.value = "";
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (err) {
      console.error(err);

      setError(
        err.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoadingSubmit(false);
    }
  };

  /* =========================================================
     LOADING
  ========================================================= */

  if (loadingJob) {
    return (
      <>
        <Navbar />

        <main className="career-apply-page">
          <div className="career-apply-status">

            <div className="career-apply-spinner" />

            <p>
              Loading application...
            </p>

          </div>
        </main>

        <Footer />
      </>
    );
  }

  /* =========================================================
     JOB ERROR
  ========================================================= */

  if (error && !job) {
    return (
      <>
        <Navbar />

        <main className="career-apply-page">
          <div className="career-apply-status error">

            <FiBriefcase />

            <h2>
              Job opening not found
            </h2>

            <p>
              This position is no longer available.
            </p>

            <button
              type="button"
              onClick={() =>
                router.push("/career")
              }
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

  return (
    <>
      <Navbar />

      <main className="career-apply-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="career-apply-hero">

          <div className="career-apply-hero-image">
            <div className="career-apply-hero-pattern" />

            <img
              src="/images/career/career-hero.webp"
              alt="SPS Careers"
            />
          </div>

          <div className="career-apply-hero-overlay" />

          <div className="career-apply-container">

            <motion.div
              className="career-apply-hero-content"
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
                className="career-apply-back"
                onClick={() =>
                  router.push(
                    `/career/${jobId}`
                  )
                }
              >
                <FiArrowLeft />
                Back to Job
              </button>

              <span>
                APPLY AT SPS
              </span>

              <h1>
                Start Your
                <strong>
                  Application
                </strong>
              </h1>

              <p>
                Take the next step in your career
                and become part of the SPS team.
              </p>

            </motion.div>

          </div>
        </section>


        {/* =====================================================
            FORM CONTENT
        ===================================================== */}

        <section className="career-apply-content">

          <div className="career-apply-container">

            <div className="career-apply-grid">

              {/* =================================================
                  FORM
              ================================================= */}

              <motion.div
                className="career-application-card"
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
                  duration: 0.6,
                }}
              >

                <div className="application-heading">

                  <span>
                    APPLICATION FORM
                  </span>

                  <h2>
                    Tell Us About Yourself
                  </h2>

                  <p>
                    Please provide your details and
                    upload an updated resume.
                  </p>

                </div>


                {/* =================================================
                    SUCCESS
                ================================================= */}

                {success && (
                  <motion.div
                    className="application-success"
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                  >

                    <div className="success-icon">
                      <FiCheckCircle />
                    </div>

                    <h3>
                      Application Submitted!
                    </h3>

                    <p>
                      Thank you for applying for{" "}
                      <strong>
                        {job?.title}
                      </strong>
                      . Our team will review your
                      profile and contact you if your
                      experience matches the opportunity.
                    </p>

                    <div className="success-actions">

                      <button
                        type="button"
                        onClick={() =>
                          router.push("/career")
                        }
                      >
                        Back to Careers
                      </button>

                      <button
                        type="button"
                        className="success-secondary-btn"
                        onClick={() =>
                          router.push(
                            `/career/${jobId}`
                          )
                        }
                      >
                        View Job
                      </button>

                    </div>

                  </motion.div>
                )}


                {/* =================================================
                    FORM
                ================================================= */}

                {!success && (
                  <form
                    className="career-application-form"
                    onSubmit={handleSubmit}
                  >

                    {/* NAME */}

                    <div className="form-group">

                      <label htmlFor="full_name">
                        Full Name
                        <span>*</span>
                      </label>

                      <div className="input-wrap">

                        <FiUser />

                        <input
                          id="full_name"
                          name="full_name"
                          type="text"
                          placeholder="Enter your full name"
                          value={
                            formData.full_name
                          }
                          onChange={
                            handleChange
                          }
                          required
                        />

                      </div>

                    </div>


                    {/* EMAIL */}

                    <div className="form-group">

                      <label htmlFor="email">
                        Email Address
                        <span>*</span>
                      </label>

                      <div className="input-wrap">

                        <FiMail />

                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={
                            formData.email
                          }
                          onChange={
                            handleChange
                          }
                          required
                        />

                      </div>

                    </div>


                    {/* PHONE */}

                    <div className="form-group">

                      <label htmlFor="phone">
                        Phone Number
                        <span>*</span>
                      </label>

                      <div className="input-wrap">

                        <FiPhone />

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={
                            formData.phone
                          }
                          onChange={
                            handleChange
                          }
                          required
                        />

                      </div>

                    </div>


                    {/* LOCATION */}

                    <div className="form-group">

                      <label htmlFor="location">
                        Location
                      </label>

                      <div className="input-wrap">

                        <FiMapPin />

                        <input
                          id="location"
                          name="location"
                          type="text"
                          placeholder="Chennai, India"
                          value={
                            formData.location
                          }
                          onChange={
                            handleChange
                          }
                        />

                      </div>

                    </div>


                    {/* EXPERIENCE */}

                    <div className="form-group">

                      <label htmlFor="experience">
                        Experience
                      </label>

                      <div className="input-wrap">

                        <FiUsers />

                        <input
                          id="experience"
                          name="experience"
                          type="text"
                          placeholder="Example: 2 Years"
                          value={
                            formData.experience
                          }
                          onChange={
                            handleChange
                          }
                        />

                      </div>

                    </div>


                    {/* RESUME */}

                    <div className="form-group full-width">

                      <label htmlFor="career-resume">
                        Resume
                        <span>*</span>
                      </label>

                      <label
                        htmlFor="career-resume"
                        className={`resume-upload ${
                          resume
                            ? "has-file"
                            : ""
                        }`}
                      >

                        <div className="resume-upload-icon">
                          <FiUpload />
                        </div>

                        <div className="resume-upload-content">

                          <strong>
                            {resume
                              ? resume.name
                              : "Upload your resume"}
                          </strong>

                          <span>
                            PDF, DOC or DOCX · Maximum 5 MB
                          </span>

                        </div>

                        <div className="resume-upload-action">
                          Browse
                        </div>

                        <input
                          id="career-resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={
                            handleResumeChange
                          }
                        />

                      </label>

                      {resumeError && (
                        <small className="field-error">
                          {resumeError}
                        </small>
                      )}

                    </div>


                    {/* COVER LETTER */}

                    <div className="form-group full-width">

                      <label htmlFor="cover_letter">
                        Cover Letter
                      </label>

                      <div className="textarea-wrap">

                        <FiFileText />

                        <textarea
                          id="cover_letter"
                          name="cover_letter"
                          placeholder="Tell us briefly about yourself, your experience and why you are interested in this role..."
                          value={
                            formData.cover_letter
                          }
                          onChange={
                            handleChange
                          }
                          rows={7}
                        />

                      </div>

                    </div>


                    {/* API ERROR */}

                    {error && (
                      <div className="application-error">
                        {error}
                      </div>
                    )}


                    {/* SUBMIT */}

                    <button
                      type="submit"
                      className="application-submit-btn"
                      disabled={
                        loadingSubmit
                      }
                    >

                      {loadingSubmit ? (
                        <>
                          <span className="submit-spinner" />
                          Submitting Application...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <FiArrowRight />
                        </>
                      )}

                    </button>

                  </form>
                )}

              </motion.div>


              {/* =================================================
                  SIDEBAR
              ================================================= */}

              <motion.aside
                className="career-apply-sidebar"
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
                transition={{
                  duration: 0.6,
                }}
              >

                {/* JOB CARD */}

                <div className="apply-job-card">

                  <span>
                    YOU&apos;RE APPLYING FOR
                  </span>

                  <div className="apply-job-icon">
                    <FiBriefcase />
                  </div>

                  <h3>
                    {job?.title}
                  </h3>

                  <p>
                    {job?.company ||
                      "SPS Solutions"}
                  </p>

                  <div className="apply-job-meta">

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

                </div>


                {/* BEFORE APPLY */}

                <div className="apply-info-card">

                  <h3>
                    Before You Apply
                  </h3>

                  <div className="apply-info-item">
                    <FiCheckCircle />
                    <span>
                      Make sure your resume is updated.
                    </span>
                  </div>

                  <div className="apply-info-item">
                    <FiCheckCircle />
                    <span>
                      Use a professional email address.
                    </span>
                  </div>

                  <div className="apply-info-item">
                    <FiCheckCircle />
                    <span>
                      Highlight relevant technical skills.
                    </span>
                  </div>

                  <div className="apply-info-item">
                    <FiCheckCircle />
                    <span>
                      Keep your information accurate.
                    </span>
                  </div>

                </div>

              </motion.aside>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}