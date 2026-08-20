"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

import Link from "next/link";

import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import "./Footer.css";

const footerLinks = {
  Explore: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Projects", href: "/projects" },
  ],

  Learning: [
    { label: "Project Lab", href: "/projects" },
    { label: "Career Guidance", href: "/career-guidance" },
    { label: "Mock Interview", href: "/career-guidance" },
    { label: "Placement Support", href: "/career-guidance" },
  ],

  Company: [
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
    { label: "Success Wall", href: "/#success-wall" },
    { label: "Get Started", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="sps-footer">

      {/* Background */}
      <div className="footer-grid" />
      <div className="footer-glow footer-glow-one" />
      <div className="footer-glow footer-glow-two" />

      <div className="footer-container">

        {/* =====================================================
            TOP CTA
        ===================================================== */}

        <motion.div
          className="footer-cta"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="footer-cta-content">

            <span className="footer-mini-badge">
              <span />
              START YOUR JOURNEY
            </span>

            <h2>
              Build Skills.
              <br />
              <span>Build Your Future.</span>
            </h2>

            <p>
              Learn practical skills, build real projects and get the
              support you need to move confidently towards your career.
            </p>

          </div>

          <Link
            href="/contact"
            className="footer-cta-button"
          >
            Get Started
            <FiArrowUpRight />
          </Link>

        </motion.div>


        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div className="footer-main">

          {/* =================================================
              BRAND
          ================================================= */}

          <motion.div
            className="footer-brand"
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

            <Link
              href="/"
              className="footer-logo"
            >
              SPS
              <span>.</span>
            </Link>

            <h3>
              Learning Solutions
            </h3>

            <p>
              Learn. Build. Practice. Grow.
            </p>

            <p className="footer-brand-description">
              Empowering students and professionals with practical
              learning, real-world projects, mentorship and career
              support.
            </p>


            {/* Social */}
            <div className="footer-socials">

              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Link>

              <Link
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </Link>

              <Link
                href="https://wa.me/917395814082"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </Link>

            </div>

          </motion.div>


          {/* =================================================
              LINKS
          ================================================= */}

          <div className="footer-link-columns">

            {Object.entries(footerLinks).map(
              ([title, links], index) => (
                <motion.div
                  className="footer-link-column"
                  key={title}
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
                    delay: index * 0.1,
                    duration: 0.6,
                  }}
                >

                  <h4>{title}</h4>

                  {links.map((link) => (
                    <Link
                      href={link.href}
                      key={link.label}
                    >
                      {link.label}
                      <FiArrowUpRight />
                    </Link>
                  ))}

                </motion.div>
              )
            )}

          </div>


          {/* =================================================
              CONTACT / ADDRESS
          ================================================= */}

          <motion.div
            className="footer-contact"
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
              delay: 0.2,
              duration: 0.6,
            }}
          >

            <h4>Visit & Connect</h4>


            {/* Address */}
            <div className="footer-contact-item">

              <span className="footer-contact-icon">
                <FiMapPin />
              </span>

              <div>

                <small>VISIT US</small>

                <p>
                  SPS Learning Solutions
                  <br />
                  Chennai
                  <br />
                  Velacheery, Tamil-Nadu - 600756
                  <br />
                  India
                </p>

              </div>

            </div>


            {/* Phone */}
            <Link
              href="tel:+917395814082"
              className="footer-contact-item"
            >

              <span className="footer-contact-icon">
                <FiPhone />
              </span>

              <div>

                <small>CALL US</small>

                <p>
                  +91 7395814082
                  <br />
                  +91 7695898959
                </p>

              </div>

            </Link>


            {/* Email */}
            <Link
              href="mailto:karthik2000indrajith@gmail.com"
              className="footer-contact-item"
            >

              <span className="footer-contact-icon">
                <FiMail />
              </span>

              <div>

                <small>EMAIL US</small>

                <p>
                  karthik2000indrajith@gmail.com
                </p>

              </div>

            </Link>

          </motion.div>

        </div>


        {/* =====================================================
            NEWSLETTER
        ===================================================== */}

        <motion.div
          className="footer-newsletter"
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
            duration: 0.7,
          }}
        >

          <div>

            <span>STAY UPDATED</span>

            <h3>
              Get the latest from SPS.
            </h3>

            <p>
              Get updates about courses, projects and career
              opportunities.
            </p>

          </div>


          <form
            className="footer-newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >

            <div className="footer-input-wrap">

              <FiMail />

              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
              />

            </div>

            <button type="submit">
              <FiSend />
              Subscribe
            </button>

          </form>

        </motion.div>


        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} SPS Learning Solutions.
            All rights reserved.
          </p>

          <div className="footer-bottom-links">

            <Link href="/privacy">
              Privacy Policy
            </Link>

            <span>•</span>

            <Link href="/terms">
              Terms & Conditions
            </Link>

          </div>

          <Link
            href="#"
            className="footer-back-top"
            aria-label="Back to top"
          >
            <FiArrowUpRight />
          </Link>

        </div>

      </div>

    </footer>
  );
}