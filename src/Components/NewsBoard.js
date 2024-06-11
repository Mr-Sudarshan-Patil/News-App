import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

function NewsBoard({ category }) {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (category) {
            const fetchNews = async () => {
                try {
                    const url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`;
                    const response = await axios.get(url, {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                    });
                    setArticles(response.data.articles);
                } catch (error) {
                    if (error.response) {
                        console.error('Error response:', error.response.data);
                        console.error('Error status:', error.response.status);
                        console.error('Error headers:', error.response.headers);
                        setError(`Error: ${error.response.status} ${error.response.statusText}`);
                    } else if (error.request) {
                        console.error('Error request:', error.request);
                        setError("No response received from the server.");
                    } else {
                        console.error('Error message:', error.message);
                        setError(`Error: ${error.message}`);
                    }
                    console.error('Error config:', error.config);
                }
            };

            fetchNews();
        }
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
