import React from 'react';
import headerLogo from '../assets/header_logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <nav className="navbar" style={{
            backgroundColor: 'var(--pc-green-dark)',
            color: 'var(--pc-white)',
            padding: '1rem 0',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="#about" style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src={headerLogo}
                            alt="Plaid Cymru Logo"
                            style={{ height: '40px', width: 'auto' }}
                        />
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{
                        display: 'none',
                        backgroundColor: 'transparent',
                        color: 'white',
                        fontSize: '1.5rem',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                    className="mobile-toggle"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} style={{
                    display: 'flex',
                    listStyle: 'none',
                    gap: '2rem',
                    fontWeight: 700
                }}>
                    <li><a href="#about" onClick={() => setIsMenuOpen(false)}>ABOUT</a></li>
                    <li><a href="#priorities" onClick={() => setIsMenuOpen(false)}>PRIORITIES</a></li>
                    <li><a href="#news" onClick={() => setIsMenuOpen(false)}>NEWS</a></li>
                    <li><a href="#involved" onClick={() => setIsMenuOpen(false)}>GET INVOLVED</a></li>
                    <li className="mobile-only">
                        <a
                            href="https://fw.partyof.wales/donate"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--pc-yellow)',
                                fontWeight: 900
                            }}
                        >
                            DONATE
                        </a>
                    </li>
                </ul>

                <a
                    href="https://fw.partyof.wales/donate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="desktop-only"
                    style={{
                        backgroundColor: 'var(--pc-yellow)',
                        color: 'var(--pc-black)',
                        padding: '0.8rem 1.5rem',
                        borderRadius: 'var(--radius-sm)',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        boxShadow: '0 4px 0 #b39e00',
                        transition: 'transform 0.1s',
                        display: 'inline-block',
                        textAlign: 'center'
                    }}
                >
                    DONATE
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
