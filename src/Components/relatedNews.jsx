import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RelatedNews() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchArticles() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/articles?category=lifestyle`);
                if (response.data.length > 1) {
                    setArticles(response.data.slice(1, 9));
                }
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        }

        fetchArticles();
    }, []);

    return (
        <div>
            <h3 className='text-xl font-semibold mb-4 mt-3 text-[#3778c2]'>Related News</h3>
            <div className='grid gap-4'>
                {articles.map((article, index) => (
                    <Link to={`/articles/${article._id}`} key={index} className='flex flex-row gap-4 bg-white p-2 rounded-lg shadow-md'>
                        <img className='w-1/2 h-auto rounded' src={article.thumbnail} alt={article.title} />
                        <div className='box2 d-flex flex-col ml-2'>
                            <h4 className="Category">{article.category.toUpperCase()}</h4>
                            <h3 className='TitleText3 text-md p-2'>{article.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default RelatedNews;
