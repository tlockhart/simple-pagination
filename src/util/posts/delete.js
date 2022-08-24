import AUTH_BASE_URL from "../AUTH_BASE_URL";

const post = async (email) => {
    const url = "auth/post/"
    // console.log(`Delete post Email ${email}`);

        // In delete post
    const response = await fetch(`${AUTH_BASE_URL}${url}${email}`, {
      method: 'DELETE',
    });

    // transform results from object to json
    const data = await response.json();

    // call search function
    return data
  };


export default post;