

export const SET_ERROR = "SET_ERROR";
export const SET_DATA = "SET_DATA";
export const SET_LOADING = "SET_LOADING";

export  const setLoading = (status) => ({
    type: SET_LOADING,
    payload: status
});

export  const setError = (status) => ({
    type: SET_ERROR,
    payload: status
});

export  const setData = (posts) => ({
    type: SET_DATA,
    payload: posts
});

const postApi = "https://jsonplaceholder.typicode.com/posts";

export const getPostsWithThunk = async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setError(false));
    dispatch(setData([]));
    
    try {
        const response = await fetch(postApi);
        if(!response.ok) {
            throw new Error("Error");
        }

        const result  = await response.json();
        dispatch(setData(result));
    }catch(e) {
        console.error(e);
        dispatch(setError(true));
    }

    dispatch(setLoading(false));
} 
