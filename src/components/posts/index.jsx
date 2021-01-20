import React, { useEffect, useState } from 'react';
import Filter from '../filter';
import Post from '../post';

import './posts.scss';

function Posts() {

    const [posts, setPosts] = useState([]);
    const [term, setTerm] = useState('');

    async function fetchedPosts() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const dataPosts = await res.json();
        const resUsers = await fetch("https://jsonplaceholder.typicode.com/users");
        const dataUsers = await resUsers.json();

        let concatData = [];

        dataPosts.forEach((dataPost) => {
            dataUsers.forEach((dataUser) => {
                if (dataPost.userId === dataUser.id) {
                    concatData.push({
                        ...dataPost,
                        name: dataUser.name
                    })
                }
            })
        })

        setPosts(concatData)

    }

    const onHandleChange = (e) => {
        setTerm(e.target.value)
    }


    useEffect(() => {
        fetchedPosts();
    }, [])




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
