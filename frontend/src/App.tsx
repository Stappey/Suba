import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState<'rider' | 'driver'>('rider');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-1.5px', color: '#000' }}>
            SUBA<span style={{ color: 'var(--accent-green)' }}>.</span>
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            <a href="#features" style={{ color: '#000', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>Features</a>
            <a href="#how-it-works" style={{ color: '#000', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>How it Works</a>
            <a href="#download" className="btn btn-secondary" style={{ padding: '0.7rem 1.5rem', fontSize: '0.9rem', borderRadius: '4px' }}>Install App</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container section-padding" style={{ textAlign: 'left', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="reveal">
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 5.5rem)', marginBottom: '2rem', maxWidth: '900px' }}>
            The smartest way to <br />
            <span style={{ borderBottom: '8px solid var(--accent-green)' }}>get around.</span>
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '3rem', fontWeight: 500 }}>
            Suba combines high-speed mobility with instant USDC settlements. Fast, secure, and built for the future of work.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#download" className="btn btn-primary">Start Riding</a>
            <a href="#features" className="btn btn-outline">Earn with Suba</a>
          </div>
        </div>
      </header>

      {/* Trust Section */}
      <section className="section-gray section-padding">
        <div className="container reveal">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Instant Settlements</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Drivers get paid in USDC seconds after a trip is completed. No more weekly waits.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Zero Friction</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Pay with local currency or USDC. We handle the blockchain complexity behind the scenes.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Open Infrastructure</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Built on Stellar, the most efficient network for real-world asset movement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Toggle Section */}
      <section id="features" className="section-white section-padding">
        <div className="container">
          <div className="reveal" style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Experience Suba</h2>
            <div style={{ display: 'flex', gap: '1px', background: '#eee', padding: '4px', borderRadius: '8px', width: 'fit-content' }}>
              <button 
                onClick={() => setActiveTab('rider')}
                style={{ 
                  padding: '1rem 2rem', 
                  border: 'none', 
                  background: activeTab === 'rider' ? '#fff' : 'transparent',
                  fontWeight: 700,
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: '0.2s'
                }}
              >
                Rider
              </button>
              <button 
                onClick={() => setActiveTab('driver')}
                style={{ 
                  padding: '1rem 2rem', 
                  border: 'none', 
                  background: activeTab === 'driver' ? '#fff' : 'transparent',
                  fontWeight: 700,
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: '0.2s'
                }}
              >
                Driver
              </button>
            </div>
          </div>

          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {activeTab === 'rider' ? (
              <>
                <div className="card">
                  <h3 style={{ marginBottom: '1rem' }}>Tap and Go</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Request a ride in seconds. Our smart matching engine connects you with the nearest driver instantly.</p>
                </div>
                <div className="card">
                  <h3 style={{ marginBottom: '1rem' }}>Predictable Pricing</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Know exactly what you'll pay before you book. No hidden fees or unexpected surcharges.</p>
                </div>
                <div className="card">
                  <h3 style={{ marginBottom: '1rem' }}>Safe & Verified</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>All drivers undergo rigorous background checks and vehicle inspections for your peace of mind.</p>
                </div>
              </>
            ) : (
              <>
                <div className="card">
                  <h3 style={{ marginBottom: '1rem' }}>Earn on Your Terms</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>You are the boss. Work when you want, where you want, and as much as you want.</p>
                </div>
                <div className="card">
                  <h3 style={{ marginBottom: '1rem' }}>USDC Payouts</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Receive your earnings in a global stablecoin. Protect your income from local currency inflation.</p>
                </div>
                <div className="card">
                  <h3 style={{ marginBottom: '1rem' }}>Lower Service Fees</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Because we use Stellar, our infrastructure costs are lower—meaning more money stays in your pocket.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="download" className="section-gray section-padding reveal">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Start your journey.</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Download the Suba app today and experience the future of mobility.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-secondary" style={{ width: '220px' }}>
              App Store
            </button>
            <button className="btn btn-secondary" style={{ width: '220px' }}>
              Google Play
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container" style={{ padding: '5rem 0', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '3rem', borderTop: '1px solid var(--border-light)' }}>
        <div>
          <div style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.5rem' }}>SUBA.</div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Moving the world, one block at a time.</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '2rem' }}>© 2026 Suba Labs.</p>
        </div>
        <div style={{ display: 'flex', gap: '5rem' }}>
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Product</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>Ride</li>
              <li>Drive</li>
              <li>Safety</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>About</li>
              <li>Contact</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
