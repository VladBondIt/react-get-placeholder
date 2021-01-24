import React from 'react';

import './post.scss';

function Post({ term, userId, title, body }) {
    const [authorName, setAuthorName] = React.useState('');

    async function fetchedName(id) {
        const resUsers = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id + ''}`);
        const dataUser = await resUsers.json();
        setAuthorName(dataUser[0].name);
    }

    React.useEffect(() => {
        fetchedName(userId);
    }, [userId])

    const visiblePost = authorName.includes(term)
        ? <div className="post">
            <h1 className="post__title">{title}</h1>
            <div className="post__text">{body}</div>
            <div className="post__author">{authorName}</div>
        </div>
        : null;

    return visiblePost
}

export default Post
