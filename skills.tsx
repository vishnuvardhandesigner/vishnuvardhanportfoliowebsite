"use client"

import { useEffect, useRef } from "react"

const skillsData = [
  {
    no: "01",
    icon: "⬡",
    name: "UI / UX DESIGN",
    pills: ["Figma", "Wireframing", "Prototyping"],
    percentage: 95,
  },
  {
    no: "02",
    icon: "◈",
    name: "GRAPHIC DESIGN",
    pills: ["Illustrator", "Photoshop", "Print"],
    percentage: 92,
  },
  {
    no: "03",
    icon: "◉",
    name: "BRAND IDENTITY",
    pills: ["Logo Design", "Style Guides", "Packaging"],
    percentage: 95,
  },
  {
    no: "04",
    icon: "▷",
    name: "MOTION & SOCIAL",
    pills: ["After Effects", "Reels", "Ad Creatives"],
    percentage: 88,
  },
  {
    no: "05",
    icon: "✦",
    name: "USER RESEARCH",
    pills: ["Interviews", "Usability", "Info Arch."],
    percentage: 80,
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in")
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const fills = entry.target.querySelectorAll(".sk-fill") as NodeListOf<HTMLElement>
          fills.forEach((b) => {
            b.style.width = `${b.dataset.width}%`
          })
          barObserver.unobserve(entry.target)
        })
      },
      { threshold: 0.3 }
    )

    const reveals = sectionRef.current?.querySelectorAll(".reveal")
    reveals?.forEach((el) => revealObserver.observe(el))

    const rows = sectionRef.current?.querySelectorAll(".sk-row")
    rows?.forEach((r) => barObserver.observe(r))

    return () => {
      revealObserver.disconnect()
      barObserver.disconnect()
    }
  }, [])

  return (
    <section id="skills" ref={sectionRef}>
      <div className="sk-head reveal">
        <div>
          <div className="s-label">Expertise</div>
          <h2 className="s-h">
            What I<br />
            <em>do best</em>
          </h2>
        </div>
        <p className="sk-head-r">
          A blend of strategic thinking, creative execution, and obsessive attention to detail —
          across digital and print.
        </p>
      </div>

      <div className="reveal">
        {skillsData.map((skill) => (
          <div className="sk-row" key={skill.no}>
            <span className="sk-no">{skill.no}</span>
            <span className="sk-ic">{skill.icon}</span>
            <span className="sk-nm">{skill.name}</span>
            <div className="sk-pills">
              {skill.pills.map((pill) => (
                <span className="sk-pill" key={pill}>
                  {pill}
                </span>
              ))}
            </div>
            <div className="sk-bar-w">
              <div className="sk-pct-txt">{skill.percentage}%</div>
              <div className="sk-track">
                <div className="sk-fill" data-width={skill.percentage}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
