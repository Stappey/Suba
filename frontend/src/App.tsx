import { useEffect, useState } from 'react'
import './App.css'

// Custom Teal Icons
const IconWallet = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '30px' }}>
    <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
    <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
    <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
  </svg>
);

const IconRide = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '30px' }}>
    <circle cx="18.5" cy="17.5" r="3.5" />
    <circle cx="5.5" cy="17.5" r="3.5" />
    <path d="M7 12l5-3" />
    <path d="M9.5 9l5 9" />
  </svg>
);

const IconSecurity = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '30px' }}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconFlash = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '30px' }}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

function App() {
  const [activeTab, setActiveTab] = useState<'rider' | 'driver'>('rider');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-page">
      <div className="bg-blob" style={{ top: '-10%', left: '-10%' }}></div>
      <div className="bg-blob" style={{ bottom: '20%', right: '-10%', opacity: 0.5 }}></div>

      <nav className="nav-fixed">
        <div className="container nav-content">
          <div className="logo-text">SUBA<span className="accent-dot">.</span></div>
          <div className="nav-links">
            <a href="#features">What we do</a>
            <a href="#how-it-works">How it works</a>
            <a href="#download" className="btn-nav">Get Suba</a>
          </div>
        </div>
      </nav>

      <header className="hero-section container">
        <div className="reveal hero-content">
          <div className="badge">
            <span className="floating">👋</span> Meet the new way to move
          </div>
          <h1 className="hero-title">
            The ride app that <br />
            <span className="text-gradient">pays you back.</span>
          </h1>
          <p className="hero-subtitle">
            Suba is a simple ride-booking app. The big difference? You can pay with normal money or digital dollars (USDC), and drivers get paid the exact second the trip ends.
          </p>
          <div className="hero-btns">
            <a href="#download" className="btn btn-primary">Download App</a>
            <a href="#features" className="btn btn-outline">See Features</a>
          </div>
        </div>
      </header>

      <section id="features" className="section-padding">
        <div className="container">
          <div className="reveal section-header">
            <h2 className="section-title">Built for <span className="text-gradient">Real Life.</span></h2>
            <p className="section-subtitle">We made transportation simple, fair, and fast for everyone.</p>
          </div>
          
          <div className="reveal toggle-wrapper">
            <div className="toggle-box">
              <button onClick={() => setActiveTab('rider')} className={activeTab === 'rider' ? 'active' : ''}>For Riders</button>
              <button onClick={() => setActiveTab('driver')} className={activeTab === 'driver' ? 'active' : ''}>For Drivers</button>
            </div>
          </div>

          <div className="reveal features-grid">
            {activeTab === 'rider' ? (
              <>
                <div className="feature-card">
                  <div className="feature-icon-box"><IconWallet /></div>
                  <h3>Pay Your Way</h3>
                  <p>Use what you have. Pay for rides with your local money or digital USDC. It's as simple as one tap.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon-box"><IconRide /></div>
                  <h3>Fast Booking</h3>
                  <p>No more waiting. Our app finds the closest driver and the best route so you get there faster.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon-box"><IconSecurity /></div>
                  <h3>Safe & Secure</h3>
                  <p>Ride with peace of mind. Every driver is verified and every trip is tracked for your safety.</p>
                </div>
              </>
            ) : (
              <>
                <div className="feature-card">
                  <div className="feature-icon-box"><IconFlash /></div>
                  <h3>Get Paid Now</h3>
                  <p>Don't wait for banks. Your money hits your wallet the second the passenger steps out of the car.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon-box"><IconWallet /></div>
                  <h3>Keep More Money</h3>
                  <p>Choose your payout. Save your earnings in digital dollars (USDC) to protect your hard-earned money.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon-box"><IconSecurity /></div>
                  <h3>Total Control</h3>
                  <p>Track exactly what you earn. No hidden fees, no surprises—just clear, simple earnings data.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Bold Settlement Section - Simplified */}
      <section id="how-it-works" className="container reveal" style={{ marginBottom: '100px' }}>
        <div className="bold-section">
          <div className="section-header" style={{ textAlign: 'left', maxWidth: '600px' }}>
            <h2 className="section-title">How the <br /><span className="text-gradient">Magic happens.</span></h2>
            <p style={{ opacity: 0.7, fontSize: '1.2rem', lineHeight: '1.6' }}>
              Usually, banks take days to move money. We use a digital network to move money in seconds. 
              It’s like sending a text message, but with money.
            </p>
          </div>

          <div className="dual-model-grid">
            <div className="model-card">
              <span className="model-accent">The Daily Path</span>
              <h3>Normal Money</h3>
              <p style={{ opacity: 0.7, marginTop: '1rem' }}>
                You pay with your regular bank card. We instantly send money to the driver so they don't have to wait.
              </p>
            </div>
            <div className="model-card" style={{ borderColor: 'var(--accent-teal)' }}>
              <span className="model-accent">The Modern Path</span>
              <h3>Digital Dollars</h3>
              <p style={{ opacity: 0.7, marginTop: '1rem' }}>
                Use USDC to pay. The money moves directly from you to the driver. No middlemen, no extra fees.
              </p>
            </div>
          </div>

          <div className="tech-stats" style={{ marginTop: '80px', display: 'flex', gap: '5rem' }}>
            <div className="stat-item">
              <span className="stat-num">~5 Sec</span>
              <span className="stat-text">Money moves</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">&lt; $0.01</span>
              <span className="stat-text">Network Fee</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">24/7</span>
              <span className="stat-text">Always open</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="container section-padding reveal">
        <div className="cta-section">
          <div className="bg-blob" style={{ top: '-50%', left: '30%', opacity: 0.3 }}></div>
          <div className="cta-content">
            <h2 className="section-title">Ready to start? <br /><span className="text-gradient">Download Suba.</span></h2>
            <p className="hero-subtitle" style={{ margin: '0 auto 3rem' }}>Join the community of smarter riders and faster-paid drivers.</p>
            <div className="hero-btns" style={{ justifyContent: 'center' }}>
              <button className="btn btn-primary">App Store</button>
              <button className="btn btn-outline">Google Play</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-text">SUBA<span className="accent-dot">.</span></div>
            <p>Better rides. Instant payments.</p>
            <p className="copyright">© 2026 Suba Labs. All rights reserved.</p>
          </div>
          <div className="nav-links" style={{ justifyContent: 'space-around', width: '100%' }}>
            <div className="link-group">
              <h4 style={{ marginBottom: '1.5rem' }}>Use Suba</h4>
              <p><a href="#">Rider App</a></p>
              <p><a href="#">Driver App</a></p>
            </div>
            <div className="link-group">
              <h4 style={{ marginBottom: '1.5rem' }}>About</h4>
              <p><a href="#">The Tech</a></p>
              <p><a href="#">USDC</a></p>
            </div>
            <div className="link-group">
              <h4 style={{ marginBottom: '1.5rem' }}>Support</h4>
              <p><a href="#">Contact</a></p>
              <p><a href="#">Privacy</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
