"use client"

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  return (
    <div className={`mob-d ${isOpen ? "open" : ""}`}>
      <button className="mob-x" onClick={onClose}>
        ✕
      </button>
      <a href="#hero" onClick={onClose}>
        Home
      </a>
      <a href="#about" onClick={onClose}>
        About
      </a>
      <a href="#skills" onClick={onClose}>
        Skills
      </a>
      <a href="#portfolio" onClick={onClose}>
        Work
      </a>
      <a href="#process" onClick={onClose}>
        Process
      </a>
      <a href="#contact" onClick={onClose}>
        Contact
      </a>
    </div>
  )
}
