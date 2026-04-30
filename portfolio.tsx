"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const portfolioItems = [
  {
    cat: "uiux",
    bgClass: "gb1",
    category: "UI / UX Design",
    title: "IRCTC Redesign — TatkalSwift",
    hasImage: true,
    imageUrl: "/portfolio/irctc.jpg",
    link: "/works/irctc-redesign",
  },
  {
    cat: "branding",
    bgClass: "gb2",
    category: "Brand Identity",
    title: "Logo Design for Startups",
    hasImage: true,
    imageUrl: "/portfolio/logo-branding.jpg",
    link: "/works/logos-for-startups",
  },
  {
    cat: "uiux",
    bgClass: "gb3",
    category: "UI / UX Design",
    title: "Threadloom — Mobile App",
    hasImage: true,
    imageUrl: "/portfolio/threadloom.jpg",
  },
  {
    cat: "graphic",
    bgClass: "gb4",
    category: "Graphic Design",
    title: "Festival Poster Series",
    emoji: "🎨",
  },
  {
    cat: "social",
    bgClass: "gb5",
    category: "Social Media",
    title: "Brand Content Kit",
    emoji: "📱",
  },
  {
    cat: "branding",
    bgClass: "gb6",
    category: "Branding + Packaging",
    title: "Eco Startup Identity",
    emoji: "🌿",
  },
  {
    cat: "uiux",
    bgClass: "gb1",
    category: "UI / UX Design",
    title: "SaaS Dashboards",
    hasImage: true,
    imageUrl: "/portfolio/saas.jpg",
    link: "/works/saas-dashboards",
  },
  {
    cat: "graphic",
    bgClass: "gb2",
    category: "Graphic Design",
    title: "Corporate Annual Report",
    emoji: "📰",
  },
]

const filters = [
  { key: "all", label: "All" },
  { key: "uiux", label: "UI / UX" },
  { key: "branding", label: "Branding" },
  { key: "graphic", label: "Graphic" },
  { key: "social", label: "Social Media" },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all")
  const sectionRef = useRef<HTMLElement>(null)
  const bentoRef = useRef<HTMLDivElement>(null)

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

    const reveals = sectionRef.current?.querySelectorAll(".reveal")
    reveals?.forEach((el) => revealObserver.observe(el))

    // Stagger animation for portfolio cards
    const cards = bentoRef.current?.querySelectorAll(".pc") as NodeListOf<HTMLElement>
    cards?.forEach((c, i) => {
      c.style.opacity = "0"
      c.style.transform = "translateY(18px)"
      c.style.transition = `opacity .5s ${i * 0.06}s ease, transform .5s ${i * 0.06}s ease`
    })

    const bentoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards?.forEach((c) => {
              c.style.opacity = "1"
              c.style.transform = ""
            })
            bentoObserver.disconnect()
          }
        })
      },
      { threshold: 0.05 }
    )

    if (bentoRef.current) {
      bentoObserver.observe(bentoRef.current)
    }

    return () => {
      revealObserver.disconnect()
      bentoObserver.disconnect()
    }
  }, [])

  const handleFilter = (filter: string) => {
    setActiveFilter(filter)
  }

  return (
    <section id="portfolio" ref={sectionRef}>
      <div className="pf-head reveal">
        <div>
          <div className="s-label">Portfolio</div>
          <h2 className="s-h">
            Selected
            <br />
            <em>Works</em>
          </h2>
        </div>
        <div className="pf-count">50+ Projects</div>
      </div>

      <div className="filters reveal">
        {filters.map((f) => (
          <button
            key={f.key}
            className={`fil ${activeFilter === f.key ? "on" : ""}`}
            onClick={() => handleFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="bento reveal" id="bento" ref={bentoRef}>
        {portfolioItems.map((item, index) => {
          const show = activeFilter === "all" || item.cat === activeFilter
          const CardWrapper = item.link ? Link : "div"
          const cardProps = item.link ? { href: item.link } : {}
          return (
            <CardWrapper
              key={index}
              {...cardProps}
              className={`pc ${item.bgClass}`}
              data-cat={item.cat}
              style={{
                opacity: show ? 1 : 0.18,
                transform: show ? "" : "scale(.95)",
                pointerEvents: show ? "auto" : "none",
                transition: "opacity .3s, transform .3s",
              }}
            >
              {item.hasImage ? (
                <img src={item.imageUrl} alt={item.title} className="pc-img-thumb" />
              ) : (
                <div className="pc-thumb">{item.emoji}</div>
              )}
              <div className="pc-ov">
                <div className="pc-cat">{item.category}</div>
                <div className="pc-ttl">{item.title}</div>
                {item.link ? (
                  <span className="pc-view-btn">View Project</span>
                ) : item.hasImage ? (
                  <span className="pc-view-btn">View Project</span>
                ) : (
                  <div className="pc-arr">→</div>
                )}
              </div>
            </CardWrapper>
          )
        })}
      </div>
    </section>
  )
}
