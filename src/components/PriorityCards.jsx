import React from 'react';
import { Heart, Landmark, Users, TrendingUp } from 'lucide-react';

const PriorityCards = () => {
    const priorities = [
        {
            title: "Fair Funding",
            desc: "Fighting for every penny Wales is owed to transform our public services.",
            icon: <Landmark size={40} />
        },
        {
            title: "Health First",
            desc: "Protecting our NHS and ensuring local care is available when you need it.",
            icon: <Heart size={40} />
        },
        {
            title: "Local Economy",
            desc: "Building a stronger Wales by supporting local businesses and jobs.",
            icon: <TrendingUp size={40} />
        },
        {
            title: "Community Power",
            desc: "Giving you a real voice in the decisions that shape your neighborhood.",
            icon: <Users size={40} />
        }
    ];

    return (
        <section id="priorities" style={{ padding: '6rem 0', backgroundColor: '#f9f9f9' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', color: 'var(--pc-green-dark)' }}>OUR <span style={{ color: 'var(--pc-green-vibrant)' }}>PRIORITIES</span></h2>
                    <div style={{ width: '80px', height: '6px', backgroundColor: 'var(--pc-yellow)', margin: '1.5rem auto' }}></div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {priorities.map((item, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            padding: '3rem 2rem',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            transition: 'var(--transition)',
                            borderBottom: '5px solid var(--pc-green-vibrant)',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                            }}
                        >
                            <div style={{ color: 'var(--pc-green-vibrant)', marginBottom: '1.5rem' }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--pc-green-dark)' }}>{item.title}</h3>
                            <p style={{ color: '#666' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PriorityCards;
