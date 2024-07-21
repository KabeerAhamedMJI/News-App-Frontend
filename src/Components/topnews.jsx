import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TopNews(props) {
    const [article, setArticle] = useState();

    useEffect(() => {
        async function fetchArticle() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/articles?category=topNews`);
                if (response.data.length > 0) {
                    setArticle(response.data[0]);
                }
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        }

        fetchArticle();
    }, []);

    return (
        <div className='main'>
            {article && (
                <div className="article-item">
                    <Link to={`/articles/${article._id}`}>
                        <div className='second'>
                            <h4 className="PosIcon text-xs md:text-sm lg:text-lg">TOP NEWS</h4>
                            <h3 className="Mainh3 text-base md:text-lg lg:text-xl">{article.title}</h3>
                        </div>
                        <img className="img-fluid" src={article.thumbnail} alt={article.title} />
                    </Link>
                </div>
            )}
        </div>
    );
}

export default TopNews;
