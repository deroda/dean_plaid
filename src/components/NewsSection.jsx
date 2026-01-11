import React, { useState, useEffect } from 'react';

const NewsSection = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const RSS_URL = 'https://deanplaid.substack.com/feed';
                const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

                const response = await fetch(API_URL);
                if (!response.ok) throw new Error('Failed to fetch news updates');

                const data = await response.json();

                if (data.status === 'ok') {
                    // Normalize the date format and clean up the description
                    const formattedPosts = data.items.slice(0, 3).map(post => {
                        // Create a date object
                        const dateObj = new Date(post.pubDate);
                        const options = { day: '2-digit', month: 'short', year: 'numeric' };
                        const formattedDate = dateObj.toLocaleDateString('en-GB', options).toUpperCase();

                        // Strip HTML from description for the excerpt
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = post.description;
                        const textContent = tempDiv.textContent || tempDiv.innerText || "";
                        const excerpt = textContent.length > 200
                            ? textContent.substring(0, 197) + '...'
                            : textContent;

                        return {
                            date: formattedDate,
                            title: post.title,
                            excerpt: excerpt,
                            link: post.link
                        };
                    });
                    setPosts(formattedPosts);
                } else {
                    throw new Error('News feed data error');
                }
            } catch (err) {
                console.error('Substack fetch error:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <section id="news" style={{ padding: '6rem 0', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
                <div className="container">
                    <p style={{ fontSize: '1.2rem', color: '#666' }}>Loading latest updates...</p>
                </div>
            </section>
        );
    }

    // Fallback posts if fetch fails or is empty
    const displayPosts = posts.length > 0 ? posts : [
        {
            date: 'LATEST',
            title: "Join the Conversation on Substack",
            excerpt: "Stay up to date with the latest campaign news, local updates, and political analysis from Dean Davies.",
            link: "https://deanplaid.substack.com"
        }
    ];

    return (
        <section id="news" style={{ padding: '6rem 0', backgroundColor: '#f9f9f9' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--pc-green-dark)', marginBottom: '1rem' }}>LATEST UPDATES</h2>
                    <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
                        Stay up to date with the latest campaign news, local updates, and political analysis from Dean Davies on Substack.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {displayPosts.map((post, idx) => (
                        <div key={idx} style={{
                            backgroundColor: 'white',
                            padding: '2rem',
                            borderRadius: 'var(--radius-sm)',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}
                            onClick={() => window.open(post.link, '_blank')}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <span style={{ color: 'var(--pc-green-mid)', fontWeight: 900, fontSize: '0.8rem', marginBottom: '1rem' }}>{post.date}</span>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--pc-green-dark)', minHeight: '3.2rem' }}>{post.title}</h3>
                            <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>{post.excerpt}</p>
                            <a
                                href={post.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    marginTop: 'auto',
                                    color: 'var(--pc-green-vibrant)',
                                    fontWeight: 900,
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                READ MORE ON SUBSTACK →
                            </a>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <a
                        href="https://deanplaid.substack.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            backgroundColor: 'var(--pc-green-dark)',
                            color: 'white',
                            padding: '1rem 3rem',
                            borderRadius: 'var(--radius-sm)',
                            fontWeight: 900,
                            textDecoration: 'none',
                            display: 'inline-block',
                            transition: 'var(--transition)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--pc-green-mid)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--pc-green-dark)'}
                    >
                        VISIT DEAN'S SUBSTACK
                    </a>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
