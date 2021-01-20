import React from 'react';

import './post.scss';

function Post({ title, body, name }) {



    return (
        <div className="post">
            <h1 className="post__title">{title}</h1>
            <div className="post__text">{body}</div>
            <div className="post__author">{name}</div>
        </div>
    )
}

export default Post
