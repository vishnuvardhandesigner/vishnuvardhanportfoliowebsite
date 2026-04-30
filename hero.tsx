"use client"

import { useEffect, useRef } from "react"

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const target = parseInt(el.dataset.count || "0", 10)
          let v = 0
          const inc = target / 60
          const interval = setInterval(() => {
            v += inc
            if (v >= target) {
              el.textContent = target.toString()
              clearInterval(interval)
              return
            }
            el.textContent = Math.floor(v).toString()
          }, 22)
          observer.unobserve(el)
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll("[data-count]").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" style={{ scrollMarginTop: 0 }}>
      <div className="hero-left">
        <div>
          <div className="hero-eyebrow">UI/UX &amp; Graphic Designer · Hyderabad, India</div>
          <h1 className="hero-name">
            <span className="hn-1">VISHNU</span>
            <span className="hn-2">VARDHAN</span>
            <span className="hn-3">OGGU</span>
          </h1>
        </div>

        <div className="hero-cta-row">
          <div className="hero-pill">
            <span>UI/UX</span>
            <span className="sep"></span>
            <span>Branding</span>
            <span className="sep"></span>
            <span>Graphic Design</span>
          </div>
          <div className="hero-btn-group">
            <a href="#portfolio" className="btn-main">
              View Work →
            </a>
            <a href="#contact" className="btn-ghost">
              {"Let's Talk"}
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <p className="hero-bio">
            Crafting <strong>pixel-perfect interfaces</strong> and{" "}
            <strong>bold visual identities</strong> that resonate. 2 yrs graphic design · 1 yr
            UI/UX · 50+ happy clients worldwide.
          </p>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-photo-wrap">
          <img src="/hero-photo.jpg" alt="Vishnu Vardhan Oggu" className="hero-photo" />

          <div className="photo-hint">
            <div className="photo-hint-ring">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.85)"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M2 12C4.5 7 8 4 12 4s7.5 3 10 8c-2.5 5-6 8-10 8s-7.5-3-10-8z" />
              </svg>
            </div>
            <span className="photo-hint-txt">Hover to reveal colour</span>
          </div>

          <div className="hero-photo-badge">
            <span className="hp-dot"></span>Available for Projects
          </div>

          <div className="hero-photo-stats" ref={statsRef}>
            <div className="hps-item">
              <div className="hps-n">
                <span data-count="50">0</span>+
              </div>
              <div className="hps-l">Clients</div>
            </div>
            <div className="hps-div"></div>
            <div className="hps-item">
              <div className="hps-n">
                <span data-count="50">0</span>+
              </div>
              <div className="hps-l">Projects</div>
            </div>
            <div className="hps-div"></div>
            <div className="hps-item">
              <div className="hps-n">
                <span data-count="3">0</span>+
              </div>
              <div className="hps-l">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
