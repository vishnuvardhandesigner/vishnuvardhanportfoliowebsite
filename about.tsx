"use client"

import { useEffect, useRef } from "react"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    const reveals = sectionRef.current?.querySelectorAll(".reveal")
    reveals?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef}>
      <div className="about-vis reveal">
        <div className="chip c1">UI/UX Designer</div>
        <div className="chip c2">Available for Freelance</div>
        <div className="av-box">
          <img src="/about-photo.jpg" alt="Vishnu Vardhan Oggu" />
        </div>
        <div className="av-avail">
          <div className="av-dot"></div>Open to New Projects
        </div>
      </div>

      <div className="about-txt reveal">
        <div className="s-label">About Me</div>
        <h2 className="s-h">
          Designing with
          <br />
          <em>purpose</em>
        </h2>
        <p className="about-p">
          {"Hi — I'm"} <strong>Vishnu Vardhan Oggu</strong>, a designer who believes great design
          is the intersection of <strong>clarity, beauty, and intention</strong>. 2 years graphic
          design, 1 year UI/UX — each project crafted to convert and captivate.
        </p>
        <p className="about-p">
          Having partnered with <strong>50+ clients</strong> across startups, agencies, and
          enterprises, I know design {"isn't"} decoration — {"it's"}{" "}
          <strong>strategy made visible</strong>.
        </p>

        <div className="info-tbl">
          <div className="i-cell">
            <div className="i-k">Location</div>
            <div className="i-v">Hyderabad, India 🇮🇳</div>
          </div>
          <div className="i-cell">
            <div className="i-k">Experience</div>
            <div className="i-v">3+ Years</div>
          </div>
          <div className="i-cell">
            <div className="i-k">Focus</div>
            <div className="i-v">UI/UX + Branding</div>
          </div>
          <div className="i-cell">
            <div className="i-k">Status</div>
            <div className="i-v" style={{ color: "var(--sage)" }}>
              ✦ Available
            </div>
          </div>
        </div>

        <a href="#contact" className="btn-main" style={{ width: "fit-content" }}>
          Start a Project →
        </a>
      </div>
    </section>
  )
}
