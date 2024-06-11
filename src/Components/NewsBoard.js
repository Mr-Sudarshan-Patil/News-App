import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

function NewsBoard({ category }) {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=b14177d92d114db59e3d89728a53fc83`;
                const response = await axios.get(url, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                });
                if (response.data.status !== "ok") {
                    throw new Error(`Error from API: ${response.data.message}`);
                }
                setArticles(response.data.articles);
            } catch (error) {
                if (error.response && error.response.status === 426) {
                    setError("The server requires the client to upgrade the protocol. Please check the server configuration.");
                } else {
                    setError(error.message);
                }
                console.error('Error fetching the news:', error);
            }
        };

        fetchNews();
    }, [category]);

    return (
        <div>
            <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <div className="d-flex flex-wrap justify-content-center">
                {articles.map((news, index) => (
                    <NewsItem
                        key={news.url || index}  // Ensure a unique key, preferably from the data itself
                        title={news.title}
                        description={news.description}
                        src={news.urlToImage}
                        url={news.url}
                    />
                ))}
            </div>
        </div>
    );
}

export default NewsBoard;
