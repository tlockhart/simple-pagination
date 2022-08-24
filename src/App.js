import React, {useState, useEffect} from 'react';
import {Pagination} from "./components/Pagination";
import {Post} from "./components/Post";
import deleteRecord from "./util/posts/delete";
import getPosts from "./util/posts/get";

// const url = 'https://jsonplaceholder.typicode.com/posts';
// const numOfPosts = 11;
const pageLimit = 2;
const dataLimit = 3;

export default function App() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [postLength, setPostLength] = useState();

    const deletePost = async (email) => {
        const response = await deleteRecord(email);
        const postCount = parseInt(response.length);
        // deletePost: sets new postCount
        setPostLength(postCount);
      };

    // Request posts:
    useEffect(() => {
        getPosts().then((data)=>{
            console.log("DATA:", data);
            setPosts(data);
        });
    }, []);

    if (error) return <h1>{error}</h1>;

    return (
        <div>
            {posts.length > 0 ? (
                <>
                    <Pagination
                        data={posts}
                        RenderComponent={Post}
                        title="Posts"
                        recommendedPageLimit={pageLimit}
                        dataLimit={dataLimit}
                        deletePost={deletePost}
                    />
                </>
            ) : (
                <h1>No Posts to display</h1>
            )}
        </div>
    );
}
