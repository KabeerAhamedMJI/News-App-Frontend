import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrendingNow(props) {
    const [article, setArticle] = useState(null); 

    useEffect(() => {
        async function TrendingArticle() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/articles?category=trendingNow`);
                if (response.data.length > 0) {
                    setArticle(response.data[0]);
                }
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        }

        TrendingArticle();
    }, []);

    return (
        <div className="d-flex flex-column flex-xl-row align-items-xl-center pt-1 pb-4 pl-2 gap-2">
            {article && (
                <>
                    <h3 className="trending-box">TRENDING NOW</h3>
                    <span className='article-title'>{article.title}</span>
                </>
            )}
        </div>
    );
}

export default TrendingNow;
