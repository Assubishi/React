export const getPosts = (state) => state.posts;
export const getPostsData = (state) => getPosts(state).posts;
export const getPostsLoading = (state) => getPosts(state).isLoading;
export const getPostsError = (state) => getPosts(state).isError;

