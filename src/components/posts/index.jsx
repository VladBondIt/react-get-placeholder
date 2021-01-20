import React, { useEffect, useState } from 'react';
import Filter from '../filter';
import Post from '../post';

import './posts.scss';

function Posts() {

    const [posts, setPosts] = useState([]);
    const [term, setTerm] = useState('');

    async function fetchedPosts() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
        const dataPosts = await res.json();
        const resNames = await fetch("https://jsonplaceholder.typicode.com/users");
        const dataNames = await resNames.json();
        let concatData = [];
        dataPosts.forEach((dataPost, i) => {
            concatData.push({
                ...dataPost,
                name: dataNames[i].name
            })
        })
        setPosts(concatData)
        console.log(concatData);
    }

    const onHandleChange = (e) => {
        setTerm(e.target.value)
    }


    useEffect(() => {
        fetchedPosts();
    }, [])

    console.log(term);



    return (
        <div className="container">
            <Filter onHandleChange={onHandleChange} />
            <div className="posts">
                {posts && !term
                    ? posts.map((post) => <Post {...post} key={post.id} />)
                    : posts.filter((post) => post.name.includes(term)).map((post) => <Post {...post} key={post.id} />)}
            </div>
        </div>
    )
}

export default Posts
