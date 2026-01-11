import React from 'react';

const Navbar = () => {
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
                            src="/src/assets/header_logo.png"
                            alt="Plaid Cymru Logo"
                            style={{ height: '40px', width: 'auto' }}
                        />
                    </a>
                </div>

                <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', fontWeight: 700 }}>
                    <li><a href="#about" style={{ transition: 'var(--transition)' }}>ABOUT</a></li>
                    <li><a href="#priorities" style={{ transition: 'var(--transition)' }}>PRIORITIES</a></li>
                    <li><a href="#news" style={{ transition: 'var(--transition)' }}>NEWS</a></li>
                    <li><a href="#involved" style={{ transition: 'var(--transition)' }}>GET INVOLVED</a></li>
                </ul>

                <a
                    href="https://fw.partyof.wales/donate"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(2px)'}
                    onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    DONATE
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
