import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SaaS Dashboards - UI/UX Design | Portfolio",
  description: "Enterprise-grade cybersecurity dashboard designs featuring real-time threat monitoring, user management, and data visualization.",
}

export default function SaaSDashboardsPage() {
  return (
    <div className="project-detail-page">
      {/* Header */}
      <header className="project-header">
        <Link href="/#portfolio" className="back-btn">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Works
        </Link>

        <div className="project-title-section">
          <span className="project-category">UI / UX Design</span>
          <h1 className="project-title">SaaS Dashboards</h1>
          <p className="project-description">
            Enterprise-grade cybersecurity dashboard designs featuring real-time threat monitoring, 
            vulnerability tracking, user management systems, and comprehensive data visualization 
            for security operations centers.
          </p>
        </div>
      </header>

      {/* Project Details */}
      <section className="project-details">
        <div className="detail-grid">
          <div className="detail-item">
            <span className="detail-label">Role</span>
            <span className="detail-value">UI/UX Designer</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Timeline</span>
            <span className="detail-value">4 Weeks</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Tools</span>
            <span className="detail-value">Figma</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Type</span>
            <span className="detail-value">Dashboard Design</span>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="project-highlights">
        <h2>Dashboard Features</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <span className="highlight-number">01</span>
            <h3>Real-Time Monitoring</h3>
            <p>Live threat detection with active incursion tracking and mitigation rate displays.</p>
          </div>
          <div className="highlight-card">
            <span className="highlight-number">02</span>
            <h3>Vulnerability Tracking</h3>
            <p>Critical vulnerability cards with severity levels and one-click remediation actions.</p>
          </div>
          <div className="highlight-card">
            <span className="highlight-number">03</span>
            <h3>User Management</h3>
            <p>Comprehensive user administration with role-based access control and activity logs.</p>
          </div>
          <div className="highlight-card">
            <span className="highlight-number">04</span>
            <h3>Security Protocols</h3>
            <p>Multi-factor auth, IP whitelisting, and session timeout controls in one panel.</p>
          </div>
        </div>
      </section>

      {/* Dashboard Showcase */}
      <section className="project-case-study-section">
        <h2>Dashboard Designs</h2>
        <p className="pdf-description">
          Two comprehensive cybersecurity dashboard interfaces: VertexGuard for cyber-intelligence 
          monitoring and Finly for command center operations, both featuring dark themes optimized 
          for 24/7 security operations.
        </p>
        <div className="case-study-image-container">
          <img 
            src="/portfolio/saas-dashboards.jpg" 
            alt="SaaS Dashboard Designs - VertexGuard Cyber Intelligence Live dashboard with world map, threat radar, packet stream monitoring, and critical vulnerabilities section. Finly Command Center with user management, security protocols, and system logs."
            className="case-study-image"
          />
        </div>
      </section>

      {/* Design Highlights */}
      <section className="logos-gallery-section" style={{ background: "var(--cream-dark)" }}>
        <h2>Design Approach</h2>
        <p className="section-description">
          Dark theme interfaces optimized for security operations centers, featuring high-contrast 
          data visualization and intuitive navigation for critical decision-making.
        </p>
        
        <div className="design-approach-grid">
          <div className="approach-card">
            <div className="approach-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3>Real-Time Data</h3>
            <p>Live packet streams, active user counts, and system uptime metrics updated in real-time.</p>
          </div>
          <div className="approach-card">
            <div className="approach-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3>Security Focus</h3>
            <p>Vulnerability severity indicators with color-coded badges for instant threat assessment.</p>
          </div>
          <div className="approach-card">
            <div className="approach-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <h3>Modular Layout</h3>
            <p>Card-based design allowing operators to focus on critical information at a glance.</p>
          </div>
          <div className="approach-card">
            <div className="approach-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3>Global Monitoring</h3>
            <p>World map visualization showing attack origins and network traffic patterns.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="project-footer">
        <Link href="/#portfolio" className="back-btn-large">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Works
        </Link>
      </footer>
    </div>
  )
}
