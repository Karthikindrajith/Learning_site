"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import {
  FiArrowRight,
  FiClock,
  FiHeadphones,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiShield,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import "./ContactPage.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // ==========================================
  // HANDLE INPUT CHANGE
  // ==========================================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================
  // HANDLE FORM SUBMIT
  // ==========================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/contact/send/",
        {
          full_name: formData.full_name,
          email: formData.email,
          phone_number: formData.phone_number,
          subject: formData.subject,
          message: formData.message,
        }
      );

      console.log("Contact message saved:", response.data);

      setSuccess(true);

      // Clear form after successful submission
      setFormData({
        full_name: "",
        email: "",
        phone_number: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(
        "Contact form error:",
        error.response?.data || error.message
      );

      if (error.response?.data) {
        setError(
          "Please check your details and try again."
        );
      } else {
        setError(
          "Unable to send your message. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="contact-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="contact-hero">

          <div className="contact-hero-image-wrap">

            <Image
              src="/images/contact/contact-hero.webp"
              alt="SPS Solutions office"
              fill
              priority
              sizes="(max-width: 700px) 100vw, 58vw"
              className="contact-hero-image"
            />

          </div>

          <div className="contact-hero-overlay" />

          <div className="contact-hero-pattern" />

          <div className="contact-container">

            <motion.div
              className="contact-hero-content"
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

              <span className="contact-kicker">
                CONTACT SPS
              </span>

              <h1>
                Let&apos;s Build Something
                <strong>
                  Great Together
                </strong>
              </h1>

              <p>
                Have a project, question or business
                enquiry? We&apos;d love to hear from you.
              </p>

              <a
                href="#contact-form"
                className="contact-hero-btn"
              >
                <FiSend />
                Send Enquiry
                <FiArrowRight />
              </a>

            </motion.div>

          </div>
        </section>


        {/* =====================================================
            CONTACT MAIN
        ===================================================== */}

        <section className="contact-main-section">

          <div className="contact-container">

            <div className="contact-main-grid">

              {/* =================================================
                  LEFT SIDE
              ================================================= */}

              <div className="contact-left-column">

                {/* GET IN TOUCH */}

                <motion.div
                  className="contact-info-card"
                  initial={{
                    opacity: 0,
                    x: -25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                >

                  <div className="contact-card-heading">

                    <span>
                      GET IN TOUCH
                    </span>

                    <h2>
                      Contact Information
                    </h2>

                  </div>


                  <div className="contact-info-item">

                    <div className="contact-info-icon">
                      <FiMapPin />
                    </div>

                    <div>

                      <strong>
                        Our Location
                      </strong>

                      <p>
                        No. 123, Velachery Main Road,
                        <br />
                        Chennai, Tamil Nadu - 600042
                      </p>

                    </div>

                  </div>


                  <div className="contact-info-item">

                    <div className="contact-info-icon">
                      <FiMail />
                    </div>

                    <div>

                      <strong>
                        Email Us
                      </strong>

                      <p>
                        info@spssolutions.com
                        <br />
                        hr@spssolutions.com
                      </p>

                    </div>

                  </div>


                  <div className="contact-info-item">

                    <div className="contact-info-icon">
                      <FiPhone />
                    </div>

                    <div>

                      <strong>
                        Call Us
                      </strong>

                      <p>
                        +91 98765 43210
                        <br />
                        +91 44 4567 8901
                      </p>

                    </div>

                  </div>

                </motion.div>


                {/* BUSINESS HOURS */}

                <motion.div
                  className="contact-info-card business-hours-card"
                  initial={{
                    opacity: 0,
                    x: -25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.1,
                  }}
                >

                  <div className="contact-card-heading">

                    <span>
                      OFFICE HOURS
                    </span>

                    <h2>
                      Business Hours
                    </h2>

                  </div>


                  <div className="business-hours-content">

                    <div className="business-hours-icon">
                      <FiClock />
                    </div>

                    <div className="business-hours-list">

                      <div>
                        <strong>
                          Mon - Fri
                        </strong>

                        <span>
                          9:00 AM - 6:00 PM
                        </span>
                      </div>

                      <div>
                        <strong>
                          Saturday
                        </strong>

                        <span>
                          10:00 AM - 2:00 PM
                        </span>
                      </div>

                      <div>
                        <strong>
                          Sunday
                        </strong>

                        <span>
                          Closed
                        </span>
                      </div>

                    </div>

                  </div>

                </motion.div>

              </div>


              {/* =================================================
                  FORM
              ================================================= */}

              <motion.div
                className="contact-form-card"
                id="contact-form"
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

                <div className="contact-card-heading">

                  <span>
                    SEND US A MESSAGE
                  </span>

                  <h2>
                    Let&apos;s Talk About Your Project
                  </h2>

                  <p>
                    Fill the form below and we&apos;ll get
                    back to you as soon as possible.
                  </p>

                </div>


                {/* SUCCESS MESSAGE */}

                {success ? (

                  <motion.div
                    className="contact-success"
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                  >

                    <div className="contact-success-icon">
                      <FiCheckCircle />
                    </div>

                    <h3>
                      Message Sent Successfully
                    </h3>

                    <p>
                      Thank you for contacting SPS
                      Solutions. Our team will get
                      back to you soon.
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        setSuccess(false);
                        setError("");
                      }}
                    >
                      Send Another Message
                    </button>

                  </motion.div>

                ) : (

                  <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                  >

                    {/* ERROR MESSAGE */}

                    {error && (
                      <div className="contact-error">
                        {error}
                      </div>
                    )}


                    <div className="contact-form-grid">

                      {/* NAME */}

                      <div className="contact-field">

                        <label htmlFor="full_name">
                          Full Name
                          <span>*</span>
                        </label>

                        <input
                          id="full_name"
                          name="full_name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.full_name}
                          onChange={handleChange}
                          required
                        />

                      </div>


                      {/* EMAIL */}

                      <div className="contact-field">

                        <label htmlFor="email">
                          Email Address
                          <span>*</span>
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />

                      </div>


                      {/* PHONE */}

                      <div className="contact-field">

                        <label htmlFor="phone_number">
                          Phone Number
                        </label>

                        <input
                          id="phone_number"
                          name="phone_number"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone_number}
                          onChange={handleChange}
                        />

                      </div>


                      {/* SUBJECT */}

                      <div className="contact-field">

                        <label htmlFor="subject">
                          Subject
                          <span>*</span>
                        </label>

                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="Enter the subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />

                      </div>

                    </div>


                    {/* MESSAGE */}

                    <div className="contact-field contact-message-field">

                      <label htmlFor="message">
                        Your Message
                        <span>*</span>
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={7}
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />

                    </div>


                    {/* SUBMIT */}

                    <button
                      type="submit"
                      className="contact-submit-btn"
                      disabled={loading}
                    >

                      {loading ? (
                        <>
                          <span className="contact-spinner" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend />
                          Send Message
                          <FiArrowRight />
                        </>
                      )}

                    </button>


                    <p className="contact-privacy">
                      We respect your privacy. Your
                      information is safe with us.
                    </p>

                  </form>

                )}

              </motion.div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FEATURES CTA
        ===================================================== */}

        <section className="contact-feature-section">

          <div className="contact-container">

            <div className="contact-feature-box">

              <div className="contact-feature-main">

                <div className="contact-feature-main-icon">
                  <FiHeadphones />
                </div>

                <div>

                  <span>
                    NEED HELP?
                  </span>

                  <h2>
                    Let&apos;s Start a Conversation
                  </h2>

                  <p>
                    Our team is ready to help you
                    bring your ideas to life.
                  </p>

                </div>

              </div>


              <div className="contact-feature-item">

                <div className="contact-feature-icon">
                  <FiClock />
                </div>

                <div>

                  <strong>
                    Fast Response
                  </strong>

                  <p>
                    We reply within
                    <br />
                    24 hours
                  </p>

                </div>

              </div>


              <div className="contact-feature-item">

                <div className="contact-feature-icon">
                  <FiUsers />
                </div>

                <div>

                  <strong>
                    Expert Team
                  </strong>

                  <p>
                    Professionals ready
                    <br />
                    to help you
                  </p>

                </div>

              </div>


              <div className="contact-feature-item">

                <div className="contact-feature-icon">
                  <FiShield />
                </div>

                <div>

                  <strong>
                    Real Solutions
                  </strong>

                  <p>
                    Tailored solutions
                    <br />
                    for your needs
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            MAP / LOCATION IMAGE
        ===================================================== */}

        <section className="contact-map-section">

          <div className="contact-container">

            <div className="contact-map-card">

              <div className="contact-map-overlay">

                <span>
                  VISIT SPS
                </span>

                <h2>
                  Chennai, Tamil Nadu
                </h2>

                <p>
                  No. 123, Velachery Main Road,
                  Chennai - 600042
                </p>

              </div>

              <div className="contact-map-grid" />

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}