"use client"

import { useEffect, useRef } from "react"

export default function Contact() {
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
    <section id="contact" ref={sectionRef}>
      <div className="ct-inner reveal">
        <div>
          <div className="ct-big">
            {"LET'S"}
            <br />
            BUILD
            <br />
            SOMETHING
            <br />
            <em>GREAT</em>
          </div>
          <p className="ct-sub">
            {"Whether it's a bold rebrand, a beautiful app, or stunning creatives — I'm ready when you are. Let's create something that truly stands out."}
          </p>
          <div className="ct-div"></div>
          <div className="ct-links">
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="ct-lnk">
              ↗ Behance
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="ct-lnk">
              ↗ Dribbble
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="ct-lnk">
              ↗ LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="ct-lnk">
              ↗ Instagram
            </a>
          </div>
          <a href="mailto:vishnuvardhanoggu@gmail.com" className="ct-email">
            vishnuvardhanoggu@gmail.com
          </a>
        </div>
        <div className="ct-actions">
          <a href="mailto:vishnuvardhanoggu@gmail.com" className="ct-btn ct-main">
            ✉ Send a Message
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="ct-btn ct-out">
            ↗ Connect on LinkedIn
          </a>
          <a href="#portfolio" className="ct-btn ct-out">
            ◈ View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
