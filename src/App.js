import React, { useState, useEffect } from "react";
import { Pagination } from "./components/Pagination";
import deleteRecord from "./util/posts/delete";
import getPosts from "./util/posts/get";

const pageLimit = 2;
const dataLimit = 3;
const tableHeaders = ["Index", "Title", "Description"];
const tableFields = ["id", "title", "body"];

export default function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [postLength, setPostLength] = useState();

  const deletePost = async (email) => {
    const response = await deleteRecord(email);
    const postCount = parseInt(response.length);
    // deletePost: sets new postCount
    setPostLength(postCount);
  };

  // Request posts:
  useEffect(() => {
    getPosts().then((data) => {
      console.log("DATA:", data);
      setPosts(data);
    });
  }, []);

  if (error) return <h1>{error}</h1>;

  return (
    <>
      {posts.length > 0 ? (
        <>
          <Pagination
            data={posts}
            tableHeaders={tableHeaders}
            tableFields={tableFields}
            title="Posts"
            recommendedPageLimit={pageLimit}
            dataLimit={dataLimit}
            deletePost={deletePost}
          />
        </>
      ) : (
        <h1>No Posts to display</h1>
      )}
    </>
  );
}
