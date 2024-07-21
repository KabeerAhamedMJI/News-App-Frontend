import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

export async function loader({ params }) {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/authors/${params.authorId}`);
        const author = response.data;
        return { author };
    } catch (error) {
        console.error('Error fetching author data:', error);
       
        return { author: {} }; 
    }
}

function Author(props) {
    const { author } = useLoaderData();

    const paragraphs = author.description?.split('<br><br>').map((paragraph, index) => (
        <p key={index} className='pb-4'>{paragraph}</p>
    )) || [];

    return (
        <section>
            <div className='container p-16'>
                <div className='flex flex-col md:flex-row gap-16 items-center'>
                    <img className="rounded-lg w-full h-50" src={author.image} alt={author.name} />
                    <div className='content-center'>
                        <h3 className='pt-2 text-2xl font-bold' style={{ color: '#2e69ac' }}>{author.name}</h3>
                        <h4 className='pb-4 pt-2' style={{ color: 'black' }}>{author.designation}</h4>
                        {paragraphs}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Author;
