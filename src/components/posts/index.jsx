import React from 'react';
import Post from '../post';

import './posts.scss';

function Posts() {
    return (
        <div className="container">
            <div className="posts__body">
                <Post />
            </div>
        </div>
    )
}

export default Posts
