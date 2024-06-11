import React from 'react';

function NewsItem({ title, description, src, url }) {
    if (!title || !description || !src || !url) {
        return null;
    }

    return (
        <div className="card m-3 bg-dark text-light" style={{ maxWidth: "345px" }}>
            <img src={src} className="card-img-top" alt={title} style={{ objectFit: "cover", height: "200px" }} />
            <div className="card-body d-flex flex-column">
                <div className="flex-grow-1">
                    <h5 className="card-title">{title.slice(0, 50)}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="mt-auto">
                    <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;
