const url = 'https://jsonplaceholder.typicode.com/posts';

const numOfPosts = 11;

const get = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log("Data:", data, "; length:", data.length);
        let posts;
        if (data.length > numOfPosts) {
            posts = data.slice(0, numOfPosts);
        } else
            posts = data;
        return posts;
    } catch (e) {
        console.log("Error:", e);
    }
};

export default get;