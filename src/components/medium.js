// https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz
import React, { useState, useEffect } from 'react';
import Post from './post';
import PostMedium from './postMediun';

export default () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let myPosts;

        const data = sessionStorage.getItem("posts");
        if(data){
            return setPosts(JSON.parse(data));
        }

        async function getMediumPosts() {
            const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz");
            myPosts = await response.json();
            sessionStorage.setItem("posts", JSON.stringify(myPosts.items));

            setPosts(myPosts.items);
        }

        getMediumPosts();

    }, [])

    return (
        <div className="max-w-4xl mx-auto overflow-x-scroll">
            <Post 
                data={posts} 
                card={PostMedium}
                title="Mis publicaciones en Medium"/> 
        </div>
        
    )
}