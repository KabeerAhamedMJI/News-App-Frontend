import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Articles() {
    const [Tparticles, setTparticles] = useState([]);
    const [Tarticles, setTechArticles] = useState([]);
    const [Larticles, setLifeArticles] = useState([]);
    const [Sarticles, setSportArticles] = useState([]);

    useEffect(() => {
        async function fetchTopNewsArticles() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/articles?category=topNews`);
                if (response.data.length > 0) {
                    setTparticles(response.data.slice(0, 6));
                }
            } catch (error) {
                console.error('Error fetching top news articles:', error);
            }
        }

        fetchTopNewsArticles();
    }, []);

    useEffect(() => {
        async function fetchTechnologyArticles() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/articles?category=technology`);
                if (response.data.length > 0) {
                    setTechArticles(response.data.slice(0, 6));
                }
            } catch (error) {
                console.error('Error fetching technology articles:', error);
            }
        }

        fetchTechnologyArticles();
    }, []);

    useEffect(() => {
        async function fetchLifestyleArticles() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/articles?category=lifestyle`);
                if (response.data.length > 0) {
                    setLifeArticles(response.data.slice(0, 4)); 
                }
            } catch (error) {
                console.error('Error fetching lifestyle articles:', error);
            }
        }

        fetchLifestyleArticles();
    }, []);

    useEffect(() => {
        async function fetchSportsArticles() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/articles?category=sports`);
                if (response.data.length > 0) {
                    setSportArticles(response.data.slice(0, 6));
                }
            } catch (error) {
                console.error('Error fetching sports articles:', error);
            }
        }

        fetchSportsArticles();
    }, []);

    return (
        <section>
            <div className="container p-4">
                {Tparticles.length > 0 && (
                    <>
                        <h2 className="heading text-sm md:text-base lg:text-lg mb-4">{Tparticles[0].category.toUpperCase()}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {Tparticles.map((article, index) => (
                                <Link key={index} to={`/articles/${article._id}`} className="block overflow-hidden rounded-t-lg">
                                    <article className="article-item">
                                        <img className="img-fluid w-full object-cover pb-3" src={article.thumbnail} alt={article.title} />
                                        <h3 className="TitleText2 text-sm md:text-sm lg:text-sm">{article.title}</h3>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="container p-4">
                {Tarticles.length > 0 && (
                    <>
                        <h2 className="heading text-sm md:text-base lg:text-lg mb-4">{Tarticles[0].category.toUpperCase()}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {Tarticles.map((article, index) => (
                                <Link key={index} to={`/articles/${article._id}`} className="block overflow-hidden rounded-t-lg">
                                    <article className="article-item">
                                        <img className="img-fluid w-full object-cover pb-3" src={article.thumbnail} alt={article.title} />
                                        <h3 className="TitleText2 text-sm md:text-sm lg:text-sm">{article.title}</h3>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="container p-4">
                {Larticles.length > 0 && (
                    <>
                        <h2 className="heading text-sm md:text-base lg:text-lg mb-4">{Larticles[0].category.toUpperCase()}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {Larticles.map((article, index) => (
                                <Link key={index} to={`/articles/${article._id}`} className="block overflow-hidden rounded-t-lg">
                                    <article className="article-item">
                                        <img className="img-fluid w-full object-cover pb-3" src={article.thumbnail} alt={article.title} />
                                        <h3 className="TitleText2 text-sm md:text-sm lg:text-sm">{article.title}</h3>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="container p-4">
                {Sarticles.length > 0 && (
                    <>
                        <h2 className="heading text-sm md:text-base lg:text-lg mb-4">{Sarticles[0].category.toUpperCase()}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {Sarticles.map((article, index) => (
                                <Link key={index} to={`/articles/${article._id}`} className="block overflow-hidden rounded-t-lg">
                                    <article className="article-item">
                                        <img className="img-fluid w-full object-cover pb-3" src={article.thumbnail} alt={article.title} />
                                        <h3 className="TitleText2 text-sm md:text-sm lg:text-sm">{article.title}</h3>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default Articles;
