import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";
import Nav from "./nav";

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      {/* <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/">EventSnap</Link>
          </div>
          <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <Link
              href="#home"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="#" className="nav-cta">
              Create Event
            </Link>
          </div>
          <div
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav> */}
      <Nav/>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Share Event Photos{" "}
              <span className="gradient-text">Instantly</span>
            </h1>
            <p className="hero-subtitle">
              Create a shared photo space for your event. Guests scan a QR code
              to upload and download photos in real-time. No apps required, just
              instant photo sharing magic.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Create Your Event</button>
              <button className="btn-secondary">See Demo</button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Events Created</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2M+</span>
                <span className="stat-label">Photos Shared</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99%</span>
                <span className="stat-label">Happy Organizers</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="qr-code">
                  <div className="qr-pattern">
                    <div className="qr-square"></div>
                    <div className="qr-square"></div>
                    <div className="qr-square"></div>
                    <div className="qr-square"></div>
                    <div className="qr-square"></div>
                    <div className="qr-square"></div>
                    <div className="qr-square"></div>
                    <div className="qr-square"></div>
                    <div className="qr-square"></div>
                  </div>
                </div>
                <p className="scan-text">Scan to join event</p>
              </div>
            </div>
            <div className="floating-photos">
              <div className="photo photo-1">📸</div>
              <div className="photo photo-2">🎉</div>
              <div className="photo photo-3">🎊</div>
              <div className="photo photo-4">📷</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Everything You Need for Event Photo Sharing
            </h2>
            <p className="section-subtitle">
              Simple, fast, and secure photo sharing for any event
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>QR Code Access</h3>
              <p>
                Guests simply scan a QR code to instantly access your event's
                photo space. No downloads or sign-ups required.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">☁️</div>
              <h3>Instant Upload</h3>
              <p>
                Photos upload automatically in the background. High-quality
                images are processed and available immediately.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⬇️</div>
              <h3>Easy Download</h3>
              <p>
                Download individual photos or entire albums with one click.
                Perfect for sharing memories after the event.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Private & Secure</h3>
              <p>
                Each event gets a private space. Only people with the QR code or
                link can access and contribute photos.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Real-time Gallery</h3>
              <p>
                Watch your event gallery grow in real-time as guests upload
                photos. Perfect for live events and celebrations.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Event Management</h3>
              <p>
                Organize photos by event, set upload limits, and manage access.
                Full control over your event's photo sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Get started in 3 simple steps</p>
          </div>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Create Your Event</h3>
                <p>
                  Set up your event in seconds. Add event details, customize
                  settings, and generate your unique QR code.
                </p>
              </div>
              <div className="step-visual">
                <div className="create-icon">➕</div>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Share the QR Code</h3>
                <p>
                  Display the QR code at your event or share the link. Guests
                  can scan and start uploading photos instantly.
                </p>
              </div>
              <div className="step-visual">
                <div className="qr-icon">📱</div>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Collect & Share</h3>
                <p>
                  Watch photos pour in during your event. Download everything
                  afterward or share the gallery with attendees.
                </p>
              </div>
              <div className="step-visual">
                <div className="gallery-icon">🖼️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-subtitle">
              Choose the plan that fits your event size
            </p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-name">Starter</div>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">9</span>
                <span className="period">/event</span>
              </div>
              <ul className="plan-features">
                <li>Up to 50 guests</li>
                <li>500 photo uploads</li>
                <li>7 days storage</li>
                <li>QR code access</li>
                <li>Basic gallery</li>
              </ul>
              <button className="plan-button">Get Started</button>
            </div>
            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <div className="plan-name">Pro</div>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">29</span>
                <span className="period">/event</span>
              </div>
              <ul className="plan-features">
                <li>Up to 200 guests</li>
                <li>Unlimited uploads</li>
                <li>30 days storage</li>
                <li>Custom branding</li>
                <li>Advanced gallery</li>
                <li>Download analytics</li>
              </ul>
              <button className="plan-button primary">Get Started</button>
            </div>
            <div className="pricing-card">
              <div className="plan-name">Enterprise</div>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">99</span>
                <span className="period">/event</span>
              </div>
              <ul className="plan-features">
                <li>Unlimited guests</li>
                <li>Unlimited uploads</li>
                <li>90 days storage</li>
                <li>White-label solution</li>
                <li>Priority support</li>
                <li>API access</li>
              </ul>
              <button className="plan-button">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ready to Transform Your Event?</h2>
            <p className="section-subtitle">
              Join thousands of event organizers who trust EventSnap
            </p>
          </div>
          <div className="contact-content">
            <button className="btn-primary large">Start Your Free Event</button>
            <p className="contact-note">
              No credit card required • Setup in under 2 minutes
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>EventSnap</h3>
              <p>
                Making event photo sharing effortless, one QR code at a time.
              </p>
            </div>
            <div className="footer-section">
              <h4>Product</h4>
              <Link href="#">Features</Link>
              <Link href="#">Pricing</Link>
              <Link href="#">How It Works</Link>
              <Link href="#">API Docs</Link>
            </div>
            <div className="footer-section">
              <h4>Use Cases</h4>
              <Link href="#">Weddings</Link>
              <Link href="#">Corporate Events</Link>
              <Link href="#">Parties</Link>
              <Link href="#">Conferences</Link>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <Link href="#">Help Center</Link>
              <Link href="#">Contact Us</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 EventSnap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
