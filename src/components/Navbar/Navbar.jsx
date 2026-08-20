"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container">

        {/* =========================
            LOGO
        ========================= */}
        <Link
          href="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img
            src="/images/logo/sps-logo.png"
            alt="SPS Learning Solutions"
            className="navbar-logo-image"
          />

          <span className="logo-main">
            SPS
          </span>

          <span className="logo-sub">
            LEARNING SOLUTIONS
          </span>
        </Link>

        {/* =========================
            NAVIGATION
        ========================= */}
        <div
          className={`navbar-menu ${
            menuOpen ? "menu-open" : ""
          }`}
        >

          {/* HOME */}
          <Link
            href="/"
            className="nav-link active"
            onClick={closeMenu}
          >
            Home
          </Link>

          {/* COURSES */}
          <Link
            href="/courses"
            className="nav-link courses-link"
            onClick={closeMenu}
          >
            Courses
            <FiChevronDown />
          </Link>

          {/* FEATURES */}
          <Link
            href="/features"
            className="nav-link"
            onClick={closeMenu}
          >
            Features
          </Link>

          {/* PROJECTS */}
          <Link
            href="/projects"
            className="nav-link"
            onClick={closeMenu}
          >
            Projects
          </Link>

          {/* CAREER GUIDANCE */}
          <Link
            href="/career-guidance"
            className="nav-link"
            onClick={closeMenu}
          >
            Career Guidance
          </Link>

          {/* CAREER */}
          <Link
            href="/career"
            className="nav-link"
            onClick={closeMenu}
          >
            Career
          </Link>

          {/* CONTACT */}
          <Link
            href="/contact"
            className="nav-link"
            onClick={closeMenu}
          >
            Contact
          </Link>

          {/* MOBILE CTA */}
          <Link
            href="/courses"
            className="mobile-get-started"
            onClick={closeMenu}
          >
            Get Started
            <FiArrowUpRight />
          </Link>

        </div>

        {/* =========================
            DESKTOP CTA
        ========================= */}
        <Link
          href="/courses"
          className="get-started-btn"
        >
          <span>
            Get Started
          </span>

          <FiArrowUpRight />
        </Link>

        {/* =========================
            MOBILE MENU BUTTON
        ========================= */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() =>
            setMenuOpen((prev) => !prev)
          }
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <FiX />
          ) : (
            <FiMenu />
          )}
        </button>

      </nav>
    </header>
  );
}