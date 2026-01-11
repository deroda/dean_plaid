import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
            backdropFilter: 'blur(5px)'
        }} onClick={onClose}>
            <div style={{
                backgroundColor: 'white',
                padding: '2.5rem',
                borderRadius: 'var(--radius-lg)',
                maxWidth: '600px',
                width: '100%',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }} onClick={e => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1.5rem',
                        right: '1.5rem',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        color: 'var(--pc-green-dark)',
                        fontWeight: 'bold'
                    }}
                >
                    ✕
                </button>
                <h3 style={{
                    color: 'var(--pc-green-dark)',
                    fontSize: '2rem',
                    marginBottom: '1.5rem',
                    borderBottom: '4px solid var(--pc-yellow)',
                    display: 'inline-block'
                }}>
                    {title}
                </h3>
                <div style={{ color: '#333', lineHeight: '1.6', fontSize: '1.1rem' }}>
                    {children}
                </div>
                <div style={{ marginTop: '2rem', textAlign: 'right' }}>
                    <button
                        onClick={onClose}
                        style={{
                            backgroundColor: 'var(--pc-green-vibrant)',
                            color: 'white',
                            padding: '0.8rem 2rem',
                            borderRadius: 'var(--radius-sm)',
                            border: 'none',
                            fontWeight: '900',
                            cursor: 'pointer'
                        }}
                    >
                        CLOSE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
