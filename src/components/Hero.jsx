import React from 'react';
import candidateHero from '../assets/candidate_hero.jpg';

const Hero = () => {
    return (
        <section id="about" className="hero" style={{
            background: 'linear-gradient(135deg, var(--pc-green-mid) 0%, var(--pc-green-dark) 100%)',
            color: 'var(--pc-white)',
            padding: '6rem 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative background circle */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '500px',
                height: '500px',
                background: 'rgba(255, 226, 0, 0.05)',
                borderRadius: '50%',
                zIndex: 0
            }}></div>

            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                alignItems: 'center',
                gap: '4rem',
                position: 'relative',
                zIndex: 1
            }}>
                <div>
                    <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', lineHeight: 1 }}>
                        DEAN <br />
                        <span style={{ color: 'var(--pc-yellow)' }}>DAVIES</span>
                    </h1>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--pc-white)', opacity: 0.9 }}>
                        STANDING UP FOR OUR COMMUNITIES
                    </h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '500px', opacity: 0.9 }}>
                        Join Dean Davies and the Plaid Cymru movement for a fairer, stronger Wales. Together, we can deliver real change for our local area.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a
                            href="https://fw.partyof.wales/act"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                backgroundColor: 'var(--pc-yellow)',
                                color: 'var(--pc-black)',
                                padding: '1.2rem 2.5rem',
                                borderRadius: 'var(--radius-sm)',
                                fontWeight: 900,
                                fontSize: '1.1rem',
                                display: 'inline-block',
                                textAlign: 'center'
                            }}
                        >
                            JOIN THE CAMPAIGN
                        </a>
                        <a
                            href="https://www.partyof.wales/manifesto"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                backgroundColor: 'transparent',
                                border: '2px solid var(--pc-white)',
                                color: 'var(--pc-white)',
                                padding: '1.2rem 2.5rem',
                                borderRadius: 'var(--radius-sm)',
                                fontWeight: 900,
                                fontSize: '1.1rem',
                                display: 'inline-block',
                                textAlign: 'center',
                                textDecoration: 'none'
                            }}
                        >
                            LEARN MORE
                        </a>
                    </div>
                </div>

                <div style={{ position: 'relative' }}>
                    <div style={{
                        width: '100%',
                        height: '500px',
                        backgroundColor: '#ddd',
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        boxShadow: '20px 20px 0 var(--pc-green-mid)',
                        backgroundImage: `url("${candidateHero}")`, // Actual candidate photo
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    </div>
                    {/* Slogan Badge */}
                    <div style={{
                        position: 'absolute',
                        bottom: '-20px',
                        left: '-20px',
                        backgroundColor: 'var(--pc-red)',
                        color: 'white',
                        padding: '1rem 2rem',
                        fontWeight: 900,
                        transform: 'rotate(-5deg)',
                        boxShadow: '5px 5px 15px rgba(0,0,0,0.3)'
                    }}>
                        VOTE PLAID CYMRU
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
