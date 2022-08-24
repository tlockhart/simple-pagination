import React, {useState, useEffect} from 'react';
import {Pagination} from "./components/Pagination";
import {Post} from "./components/Post";
import TableController from "./components/Pagination/TableController";
import deleteRecord from "./util/posts/delete";
import getPosts from "./util/posts/get";
import ComponentRenderer from './components/global/ComponentRenderer';

// const url = 'https://jsonplaceholder.typicode.com/posts';
// const numOfPosts = 11;
const pageLimit = 2;
const dataLimit = 3;
const tableHeaders = ["Index", "Title", "Description"];
const tableFields = ["id", "title","body"]

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

      // add tableHeaders to TableControllerComponent;
      function withTableHeaders(WrappedComponent, headers, fields) {
          console.log("WrappedComponent", WrappedComponent);
          console.log("Headers:", headers);
          console.log("Fields:", fields);
          return () => {
              return (
                  <ComponentRenderer
                  data={posts}
                  component={WrappedComponent}
                  tableHeaders={headers}
                  tableFields={fields}
                  deletePost={deletePost}
                  />
              );
          }
      }
      const TableControllerWithHeaders = withTableHeaders(TableController, tableHeaders, tableFields);

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
                        // RenderComponent={Post}
                        // RenderComponent={TableController}
                        RenderComponent={TableControllerWithHeaders}
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
