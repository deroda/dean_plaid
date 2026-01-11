import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PriorityCards from './components/PriorityCards';
import NewsSection from './components/NewsSection';
import Modal from './components/Modal';
import { Facebook, Instagram } from 'lucide-react';
import candidateHero from './assets/candidate_hero.jpg';
import logoLight from './assets/logo_light.png';
import logoDaffodil from './assets/logo_daffodil.png';

function App() {
    const [activeModal, setActiveModal] = React.useState(null);

    const openModal = (type) => setActiveModal(type);
    const closeModal = () => setActiveModal(null);

    const modalContent = {
        about: {
            title: "ABOUT DEAN DAVIES",
            content: (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p><strong>A Local Voice for Fflint and Wrecsam: Rooted in Buckley, Driven by Action</strong></p>
                    <p>I am Dean Davies, a proud Buckley resident and your Plaid Cymru candidate for 2026.</p>
                    <p>My career has been built on practical action, not just words. From renovating my own home to managing grounds for national sports teams, I believe in rolling up my sleeves to get the job done.</p>
                    <p><strong>Why I am the right choice for our community:</strong></p>
                    <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><strong>Community Leader:</strong> Leading efforts to regenerate a historic building into a vibrant community asset in Buckley.</li>
                        <li><strong>Guardian of Standards:</strong> Serving on Plaid Cymru’s national Membership, Disciplinary, and Standards Committee.</li>
                        <li><strong>Sustainability Expert:</strong> IEMA-certified practitioner focusing on biodiversity and green solutions.</li>
                        <li><strong>Innovator in Technology:</strong> Over a decade in media/telecoms, training engineers and driving innovation.</li>
                    </ul>
                    <p>I combine technical expertise with a passion for our local heritage. In 2026, vote for a candidate who has the experience to build a sustainable, fair, and thriving future.</p>
                </div>
            )
        },
        policy: {
            title: "OUR POLICIES",
            content: (
                <>
                    <p>Plaid Cymru stands for a fairer, wealthier, and more ambitious Wales. Our key priorities include:</p>
                    <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                        <li><strong>Fair Funding:</strong> Securing the investment Wales deserves from Westminster.</li>
                        <li><strong>Local Services:</strong> Protecting our schools, hospitals, and transport links.</li>
                        <li><strong>Environment:</strong> Leading the transition to a green economy while protecting our natural heritage.</li>
                    </ul>
                </>
            )
        },
        privacy: {
            title: "PRIVACY POLICY",
            content: (
                <>
                    <p>Your privacy is important to us. Any information you provide to this campaign is handled in strict accordance with the Data Protection Act 2018 and GDPR.</p>
                    <p style={{ marginTop: '1rem' }}>We only use your data to keep you informed about Dean Davies' campaign and Plaid Cymru's activities. We never sell your personal information to third parties.</p>
                </>
            )
        }
    };

    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />

                {/* Mission Statement Section */}
                <section style={{ padding: '5rem 0', backgroundColor: 'var(--pc-green-dark)', color: 'white', textAlign: 'center' }}>
                    <div className="container">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
                            DEAN DAVIES: A VOICE FOR <span style={{ color: 'var(--pc-yellow)' }}>YOU</span>
                        </h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.9 }}>
                            Dean Davies is committed to a Wales that works for everyone. From protecting our local services to championing the local economy, Dean is solely focused on the best interests of our community and our nation.
                        </p>
                    </div>
                </section>

                {/* Biography Section */}
                <section id="bio" style={{ padding: '6rem 0', background: 'white' }}>
                    <div className="container grid-2" style={{ alignItems: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <img
                                src={candidateHero}
                                alt="Dean Davies in the community"
                                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            />
                            <div style={{ position: 'absolute', top: '-15px', right: '-15px', backgroundColor: 'var(--pc-yellow)', padding: '1rem', fontWeight: 900, borderRadius: 'var(--radius-sm)', transform: 'rotate(5deg)' }}>
                                LOCAL & COMMITTED
                            </div>
                        </div>
                        <div className="mobile-center">
                            <h2 style={{ fontSize: '2.5rem', color: 'var(--pc-green-dark)', marginBottom: '1rem', lineHeight: '1.2' }}>
                                A LOCAL VOICE FOR FFLINT AND WRECSAM
                            </h2>
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--pc-green-vibrant)', marginBottom: '1.5rem' }}>
                                Rooted in Buckley, Driven by Action
                            </h3>
                            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--pc-yellow)', marginBottom: '2rem' }} className="mobile-hide"></div>

                            <p style={{ marginBottom: '1.2rem', fontSize: '1.1rem', color: '#333', fontWeight: 700 }}>
                                I am Dean Davies, a proud Buckley resident and your Plaid Cymru candidate for 2026.
                            </p>

                            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', color: '#444' }}>
                                My career has been built on practical action, not just words. From renovating my own home to managing grounds for national sports teams, I believe in rolling up my sleeves to get the job done.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '1rem', marginBottom: '2rem', textAlign: 'left' }}>
                                <div style={{ borderLeft: '3px solid var(--pc-yellow)', paddingLeft: '1rem' }}>
                                    <p style={{ fontSize: '0.95rem', color: '#555' }}>
                                        <strong>Community Leader:</strong> Leading efforts to regenerate a historic building into a vibrant community asset in Buckley.
                                    </p>
                                </div>
                                <div style={{ borderLeft: '3px solid var(--pc-yellow)', paddingLeft: '1rem' }}>
                                    <p style={{ fontSize: '0.95rem', color: '#555' }}>
                                        <strong>Guardian of Standards:</strong> Serving on Plaid Cymru’s national committee, ensuring integrity and fairness.
                                    </p>
                                </div>
                                <div style={{ borderLeft: '3px solid var(--pc-yellow)', paddingLeft: '1rem' }}>
                                    <p style={{ fontSize: '0.95rem', color: '#555' }}>
                                        <strong>Sustainability Expert:</strong> IEMA-certified, focusing on biodiversity and practical green solutions.
                                    </p>
                                </div>
                                <div style={{ borderLeft: '3px solid var(--pc-yellow)', paddingLeft: '1rem' }}>
                                    <p style={{ fontSize: '0.95rem', color: '#555' }}>
                                        <strong>Innovator:</strong> Over a decade in technology, training engineers and driving customer service innovation.
                                    </p>
                                </div>
                            </div>

                            <p style={{ marginBottom: '2rem', fontSize: '1.05rem', color: '#444', fontStyle: 'italic' }}>
                                I combine technical expertise with a passion for our local heritage. In 2026, vote for a candidate who has the experience to build a sustainable, fair, and thriving future for Fflint and Wrecsam.
                            </p>

                            <a
                                href="https://www.partyof.wales/manifesto"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    backgroundColor: 'var(--pc-green-vibrant)',
                                    color: 'white',
                                    padding: '1rem 2rem',
                                    borderRadius: 'var(--radius-sm)',
                                    fontWeight: 900,
                                    fontSize: '1rem',
                                    display: 'inline-block',
                                    textAlign: 'center',
                                    textDecoration: 'none'
                                }}
                            >
                                READ THE FULL MANIFESTO
                            </a>
                        </div>
                    </div>
                </section>

                <NewsSection />

                <PriorityCards />

                {/* Newsletter Section */}
                <section id="involved" style={{ padding: '6rem 0', background: 'white', position: 'relative' }}>
                    <div className="container" style={{
                        backgroundColor: 'var(--pc-green-mid)',
                        padding: '6rem 4rem',
                        borderRadius: 'var(--radius-lg)',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        position: 'relative'
                    }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>JOIN THE CAMPAIGN</h2>
                        <p style={{ marginBottom: '2rem', opacity: 0.9, position: 'relative', zIndex: 1 }}>Take action today and help us build a stronger, fairer nation.</p>
                        <a
                            href="https://fw.partyof.wales/act"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                backgroundColor: 'var(--pc-yellow)',
                                color: 'var(--pc-black)',
                                padding: '1.2rem 3rem',
                                borderRadius: 'var(--radius-sm)',
                                fontWeight: 900,
                                fontSize: '1.2rem',
                                textDecoration: 'none',
                                transition: 'var(--transition)',
                                position: 'relative',
                                zIndex: 1
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            GET INVOLVED
                        </a>
                    </div>
                </section>

                {/* Footer */}
                <footer style={{ padding: '4rem 0', backgroundColor: '#111', color: 'white', borderTop: '5px solid var(--pc-green-vibrant)' }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                            <div>
                                <img
                                    src={logoLight}
                                    alt="Plaid Cymru Logo"
                                    style={{ height: '35px', width: 'auto', marginBottom: '1.5rem' }}
                                />
                                <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>
                                    Promoted by Plaid Cymru, Tŷ Gwynfor, Cardiff, CF10 4AL.
                                    Building a fairer, stronger nation for all.
                                </p>
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '1.5rem' }}>QUICK LINKS</h4>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: 0.8 }}>
                                    <li><a href="#about" onClick={(e) => { e.preventDefault(); openModal('about'); }}>About</a></li>
                                    <li><a href="#policy" onClick={(e) => { e.preventDefault(); openModal('policy'); }}>Policy</a></li>
                                    <li><a href="https://fw.partyof.wales/act" target="_blank" rel="noopener noreferrer">Volunteer</a></li>
                                    <li><a href="#privacy" onClick={(e) => { e.preventDefault(); openModal('privacy'); }}>Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '1.5rem' }}>CONNECT</h4>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href="https://www.facebook.com/profile.php?id=61579480122031" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition)' }} className="social-icon">
                                        <Facebook size={20} />
                                    </a>
                                    <a href="https://www.instagram.com/deanplaid_flintshire/" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition)' }} className="social-icon">
                                        <Instagram size={20} />
                                    </a>
                                    <a href="https://www.tiktok.com/@dean_plaid" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition)' }} className="social-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                                    </a>
                                    <a href="https://bsky.app/profile/dean78.bsky.social" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition)' }} className="social-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17.15 4c-2.15 0-3.15 2-5.15 2s-3-2-5.15-2A4.91 4.91 0 0 0 2 9.78c0 4.22 3 12.22 6 12.22 1.25 0 2.5-1.06 4-1.06Z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', opacity: 0.5, fontSize: '0.8rem' }}>
                            © 2026 PLAID CYMRU. ALL RIGHTS RESERVED.
                        </div>
                    </div>
                </footer>
            </main>

            <Modal
                isOpen={!!activeModal}
                onClose={closeModal}
                title={activeModal ? modalContent[activeModal].title : ''}
            >
                {activeModal ? modalContent[activeModal].content : null}
            </Modal>
        </div>
    );
}

export default App;
