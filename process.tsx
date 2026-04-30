"use client"

import { useEffect, useRef } from "react"

const steps = [
  {
    no: "01",
    title: "DISCOVER",
    desc: "Deep-dive into your goals, audience, and brand values to build a solid strategic foundation.",
  },
  {
    no: "02",
    title: "DEFINE",
    desc: "Wireframes, mood boards, and concept directions — aligned before a single pixel is designed.",
  },
  {
    no: "03",
    title: "DESIGN",
    desc: "High-fidelity visuals built with precision. Iterate through structured feedback until perfect.",
  },
  {
    no: "04",
    title: "DELIVER",
    desc: "Organised handoff with style guides, dev specs, and post-delivery support — you're set.",
  },
]

export default function Process() {
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
    <section id="process" ref={sectionRef}>
      <div className="proc-l reveal">
        <div className="s-label">My Process</div>
        <h2 className="s-h">
          How I bring
          <br />
          ideas to
          <br />
          <em>life</em>
        </h2>
        <p className="s-p" style={{ marginTop: 18, marginBottom: 0 }}>
          A transparent, iterative process built on communication, craft, and clarity — from brief
          to delivery.
        </p>
      </div>
      <div className="proc-r reveal">
        {steps.map((step) => (
          <div className="p-step" key={step.no}>
            <div className="p-no">{step.no}</div>
            <div>
              <div className="p-ttl">{step.title}</div>
              <p className="p-desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
