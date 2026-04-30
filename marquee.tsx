"use client"

const items = [
  "UI/UX Design",
  "Branding",
  "Graphic Design",
  "Typography",
  "Visual Identity",
  "Figma",
  "Illustration",
  "Motion Design",
  "User Research",
  "50+ Clients",
]

export default function Marquee() {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {[...Array(2)].map((_, i) =>
          items.map((item, j) => (
            <span key={`${i}-${j}`}>
              {item}
              <span className="dot">·</span>
            </span>
          ))
        )}
      </div>
    </div>
  )
}
