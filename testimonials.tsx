"use client"

import { useEffect, useRef } from "react"

const testimonials = [
  {
    initials: "AK",
    name: "Arjun Kumar",
    role: "CEO, TechStartup",
    text: "Vishnu completely transformed our brand. Attention to detail was extraordinary — he understood our vision better than we did. Final identity exceeded all expectations.",
    bgColor: undefined,
  },
  {
    initials: "PR",
    name: "Priya Reddy",
    role: "Product Manager, FinApp",
    text: "The UI/UX redesign boosted our app retention by 40%. The process was collaborative, transparent, and the results were absolutely stunning. Highest recommendation!",
    bgColor: "var(--terracotta)",
  },
  {
    initials: "SM",
    name: "Siddharth Mehta",
    role: "Founder, D2C Brand",
    text: "Social media engagement tripled after the content system was done. Professional, creative, on-time every time. Vishnu is our go-to designer for everything.",
    bgColor: "var(--sage)",
  },
]

export default function Testimonials() {
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
    <section id="testimonials" ref={sectionRef}>
      <div className="reveal" style={{ textAlign: "center", marginBottom: 52 }}>
        <div className="s-label" style={{ justifyContent: "center" }}>
          Client Love
        </div>
        <h2 className="s-h" style={{ textAlign: "center" }}>
          What people
          <br />
          are <em>saying</em>
        </h2>
      </div>
      <div className="t-grid reveal">
        {testimonials.map((t, i) => (
          <div className="t-card" key={i}>
            <div className="t-qmark">&ldquo;</div>
            <div className="t-stars">★★★★★</div>
            <p className="t-txt">{t.text}</p>
            <div className="t-author">
              <div className="t-av" style={t.bgColor ? { background: t.bgColor } : undefined}>
                {t.initials}
              </div>
              <div>
                <div className="t-name">{t.name}</div>
                <div className="t-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
