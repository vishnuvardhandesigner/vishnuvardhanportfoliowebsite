"use client"

interface NavbarProps {
  onMenuClick: () => void
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav>
      <div className="nav-logo">
        VV<em>O</em>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#hero" className="nav-home-link">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Work</a>
        </li>
        <li>
          <a href="#process">Process</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="nav-right">
        <div className="nav-avail">Available</div>
        <a href="#contact" className="btn-hire">
          Hire Me
        </a>
        <div
          className="hbg"
          onClick={onMenuClick}
          tabIndex={0}
          role="button"
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}
