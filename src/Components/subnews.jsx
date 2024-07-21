import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SubNews(props) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchArticles() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/articles?category=sports`);
                if (response.data.length > 0) {
                    setArticles(response.data.slice(0, 3)); 
                }
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        }

        fetchArticles();
    }, []);

    return (
        <div className="d-flex flex-column flex-md-row pt-4 pb-4 pl-2 gap-4">
            {articles.map((article, index) => (
                <article key={index}>
                    <Link to={`/articles/${article._id}`}> 
                        <img className="img-fluid" src={article.thumbnail} alt="" />
                        <h4 className="Category">{article.category.toUpperCase()}</h4>
                        <h3 className="TitleText">{article.title}</h3>
                    </Link>
                </article>
            ))}
        </div>
    );
}

export default SubNews;
