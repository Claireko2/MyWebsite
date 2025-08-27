import React, { useState, useEffect } from "react";


export default function Blogs() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);

    const blogPosts = [
        {
            id: 1,
            title: "Building Scalable REST APIs with Node.js: Best Practices",
            category: "web-dev",
            date: "February 28, 2024",
            readTime: "6 min read",
            excerpt: "A comprehensive guide to creating robust and scalable RESTful APIs using Node.js and Express.js. Learn about authentication, error handling, database optimization, and deployment strategies that will make your APIs production-ready.",
            image: "React Performance Tips"
        },
        {
            id: 2,
            title: "Machine Learning in Production: Lessons from the Field",
            category: "data-science",
            date: "February 10, 2024",
            readTime: "10 min read",
            excerpt: "Real-world experiences and challenges of deploying machine learning models in production environments. Discussion of monitoring, model drift, and maintenance strategies for ML systems at scale.",
            image: "ML in Production"
        },
        {
            id: 3,
            title: "React Performance Optimization: From Basics to Advanced",
            category: "tutorials",
            date: "January 25, 2024",
            readTime: "12 min read",
            excerpt: "Deep dive into React performance optimization techniques including memo, useMemo, useCallback, code splitting, and lazy loading. Practical examples and benchmarking results included.",
            image: "React Optimization"
        },
        {
            id: 4,
            title: "Advanced Pandas Techniques for Data Analysis",
            category: "data-science",
            date: "January 12, 2024",
            readTime: "8 min read",
            excerpt: "Master advanced Pandas operations for efficient data manipulation. Learn about groupby operations, time series analysis, and memory optimization techniques for large datasets.",
            image: "Python Data Analysis"
        },
        {
            id: 5,
            title: "Transitioning from Analyst to Data Scientist: A Complete Guide",
            category: "career",
            date: "December 20, 2023",
            readTime: "15 min read",
            excerpt: "Practical advice on making the transition from data analyst to data scientist. Skills to develop, projects to build, and strategies for landing your first data science role.",
            image: "Career Growth"
        },
        {
            id: 6,
            title: "PostgreSQL vs MongoDB: Choosing the Right Database",
            category: "web-dev",
            date: "December 8, 2023",
            readTime: "7 min read",
            excerpt: "Comprehensive comparison of PostgreSQL and MongoDB for modern web applications. Performance benchmarks, use cases, and migration strategies discussed.",
            image: "Database Design"
        },
        {
            id: 7,
            title: "Building Real-time Applications with WebSockets",
            category: "tutorials",
            date: "November 22, 2023",
            readTime: "9 min read",
            excerpt: "Step-by-step tutorial on implementing real-time features using WebSockets. Build a chat application and learn about scaling real-time applications.",
            image: "API Development"
        },
        {
            id: 8,
            title: "Creating Stunning Data Visualizations with D3.js",
            category: "data-science",
            date: "November 10, 2023",
            readTime: "11 min read",
            excerpt: "Learn to create custom, interactive data visualizations using D3.js. From basic charts to complex animations, master the art of data storytelling.",
            image: "Visualization Guide"
        }
    ];

    const categories = [
        { id: 'all', label: 'All' },
        { id: 'data-science', label: 'Data Science' },
        { id: 'web-dev', label: 'Web Dev' },
        { id: 'tutorials', label: 'Tutorials' },
        { id: 'career', label: 'Career' }
    ];

    useEffect(() => {
        let filtered = blogPosts;

        // Filter by category
        if (activeFilter !== 'all') {
            filtered = filtered.filter(post => post.category === activeFilter);
        }

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredPosts(filtered);
    }, [activeFilter, searchTerm]);

    const getCategoryLabel = (category) => {
        const categoryMap = {
            'data-science': 'Data Science',
            'web-dev': 'Web Dev',
            'tutorials': 'Tutorials',
            'career': 'Career'
        };
        return categoryMap[category] || category;
    };

    const styles = {
        body: {
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            lineHeight: 1.6,
            color: '#333',
            background: '#1e3a8a',
            minHeight: '100vh',
            margin: 0,
            padding: 0
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px'
        },
        header: {
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 1000,
            boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)'
        },
        nav: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 0'
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#4a5568'
        },
        navLinks: {
            display: 'flex',
            listStyle: 'none',
            gap: '2rem',
            margin: 0,
            padding: 0
        },
        navLink: {
            textDecoration: 'none',
            color: '#4a5568',
            fontWeight: 500,
            transition: 'all 0.3s ease'
        },
        navLinkActive: {
            color: '#1e3a8a'
        },
        main: {
            marginTop: '100px',
            padding: '2rem 0'
        },
        blogHeader: {
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '3rem',
            marginBottom: '3rem',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
        },
        pageTitle: {
            fontSize: '3rem',
            marginBottom: '1rem',
            background: '#1e3a8a',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
        },
        pageSubtitle: {
            fontSize: '1.3rem',
            color: '#666',
            marginBottom: '2rem'
        },
        searchFilter: {
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
        },
        searchBox: {
            padding: '12px 20px',
            border: '2px solid #e2e8f0',
            borderRadius: '25px',
            fontSize: '1rem',
            outline: 'none',
            transition: 'all 0.3s ease',
            minWidth: '300px'
        },
        searchBoxFocus: {
            borderColor: '#1e3a8a',
            boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)'
        },
        filterTags: {
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap'
        },
        filterTag: {
            padding: '8px 16px',
            background: 'transparent',
            border: '2px solid #1e3a8a',
            color: '#1e3a8a',
            borderRadius: '20px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontWeight: 500
        },
        filterTagActive: {
            background: '#1e3a8a',
            color: 'white'
        },
        featuredPost: {
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '3rem',
            marginBottom: '3rem',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
            border: '3px solid #1e3a8a'
        },
        featuredBadge: {
            background: '#1e3a8a',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            fontWeight: 600,
            display: 'inline-block',
            marginBottom: '1rem'
        },
        blogGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
        },
        blogCard: {
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
        },
        blogCardHover: {
            transform: 'translateY(-5px)',
            boxShadow: '0 15px 50px rgba(0, 0, 0, 0.15)'
        },
        blogImage: {
            width: '100%',
            height: '200px',
            background: '#1e3a8a',
            borderRadius: '15px',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.2rem',
            fontWeight: 600
        },
        blogTitle: {
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#333',
            marginBottom: '0.5rem',
            lineHeight: 1.3
        },
        blogMeta: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            color: '#666',
            fontSize: '0.9rem'
        },
        blogCategory: {
            background: '#f0f4f8',
            color: '#1e3a8a',
            padding: '0.3rem 0.8rem',
            borderRadius: '15px',
            fontWeight: 600,
            fontSize: '0.8rem'
        },
        blogExcerpt: {
            color: '#555',
            marginBottom: '1.5rem',
            lineHeight: 1.6
        },
        readMore: {
            color: '#1e3a8a',
            textDecoration: 'none',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease'
        },
        pagination: {
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '3rem'
        },
        pageBtn: {
            padding: '10px 20px',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '2px solid #1e3a8a',
            color: '#1e3a8a',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            fontWeight: 600
        },
        pageBtnActive: {
            background: '#1e3a8a',
            color: 'white'
        },
        newsletter: {
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '3rem',
            marginTop: '3rem',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
        },
        newsletterTitle: {
            color: '#333',
            marginBottom: '1rem',
            fontSize: '1.8rem'
        },
        newsletterForm: {
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '2rem',
            flexWrap: 'wrap'
        },
        newsletterInput: {
            padding: '12px 20px',
            border: '2px solid #e2e8f0',
            borderRadius: '25px',
            fontSize: '1rem',
            outline: 'none',
            minWidth: '300px'
        },
        newsletterBtn: {
            padding: '12px 30px',
            background: '#1e3a8a',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease'
        }
    };
    return (
        <div className="container">
            <div style={styles.blogHeader}>
                <h1 style={styles.pageTitle}>My Blog</h1>
                <p style={styles.pageSubtitle}>Insights on Data Science, Web Development, and Technology</p>

                <div style={styles.searchFilter}>
                    <div style={styles.filterTags}>
                        {categories.map(category => (
                            <button
                                key={category.id}
                                style={{
                                    ...styles.filterTag,
                                    ...(activeFilter === category.id ? styles.filterTagActive : {})
                                }}
                                onClick={() => setActiveFilter(category.id)}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div style={styles.featuredPost}>
                <div style={styles.featuredBadge}>⭐ Featured Post</div>
                <h2 style={{ ...styles.blogTitle, fontSize: '2rem', marginBottom: '1rem' }}>
                    The Future of Data Visualization: Interactive Dashboards in 2024
                </h2>
                <div style={{ ...styles.blogMeta, marginBottom: '1.5rem' }}>
                    <span>📅 March 15, 2024</span>
                    <span style={styles.blogCategory}>Data Science</span>
                    <span>🕒 8 min read</span>
                </div>
                <p style={{ ...styles.blogExcerpt, fontSize: '1.1rem' }}>
                    Exploring the latest trends in data visualization and how interactive dashboards are revolutionizing business intelligence.
                    This comprehensive guide covers emerging technologies like WebGL-based visualizations, real-time data streaming, and the
                    integration of AI-powered insights into modern dashboard designs. Learn how to create compelling visual narratives that
                    drive business decisions.
                </p>
                <a href="blog-post.html" style={styles.readMore}>Read Full Article →</a>
            </div>

            <div style={styles.blogGrid}>
                {filteredPosts.map(post => (
                    <article key={post.id} style={styles.blogCard}>
                        <div style={styles.blogImage}>{post.image}</div>
                        <h3 style={styles.blogTitle}>{post.title}</h3>
                        <div style={styles.blogMeta}>
                            <span>📅 {post.date}</span>
                            <span style={styles.blogCategory}>{getCategoryLabel(post.category)}</span>
                            <span>🕒 {post.readTime}</span>
                        </div>
                        <p style={styles.blogExcerpt}>{post.excerpt}</p>
                        <a href="blog-post.html" style={styles.readMore}>Read More →</a>
                    </article>
                ))}
            </div>

            {filteredPosts.length === 0 && (
                <div style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
                    <h3>No articles found</h3>
                    <p>Try adjusting your search or filter criteria.</p>
                </div>
            )}


        </div>
    );
}
