import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function ArticlePage() {
    const [article, setArticle] = useState(null);
    const [error, setError] = useState(null);
    const { ArticleId } = useParams();

    useEffect(() => {
        async function fetchArticle() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/Articles/${ArticleId}`);
                if (response.data) {
                    setArticle(response.data);
                    setError(null); 
                } else {
                    setError('Article not found');
                }
            } catch (error) {
                setError('Error fetching article');
                console.error('Error fetching article:', error);
            }
        }

        fetchArticle();
    }, [ArticleId]);

    const renderParagraphs = () => {
        if (article && article.description) {
            return article.description.split('<br><br>').map((paragraph, index) => (
                <p key={index} className='pr-6 pl-6 pb-1 pt-4'>{paragraph}</p>
            ));
        }
        return null;
    };

    return (
        <div className='mx-auto flex flex-col lg:flex-row'>
            <div>
                {error ? (
                    <p className='text-red-500'>{error}</p>
                ) : article ? (
                    <article className='bg-white p-2 rounded-lg shadow-md'>
                        <img className='w-full h-auto rounded' src={article.thumbnail} alt={article.title} />
                        <h2 className='text-xl sm:text-2xl md:text-2xl font-bold mt-4 pl-5 pr-5'>{article.title}</h2>
                        {renderParagraphs()}
                    </article>
                ) : (
                    <p>Loading...</p>
                )}
                <div className='p-3 mt-2 bg-white rounded-lg shadow-md'>
                    <p className='text-xs text-slate-500'>
                        The comments posted here are not those of News Today. Comments are solely the responsibility of the author. According to the IT policy of the Central Government, making insults and obscene language against individual, community, religion and country is a punishable offence. Legal action will be taken against such comments.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ArticlePage;
