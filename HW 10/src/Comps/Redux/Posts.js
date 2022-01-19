import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Loader, Error, Post} from "./forPosts";
import { getPostsData, getPostsError, getPostsLoading} from "./store/posts.js/selectors";
import {getPostsWithThunk} from "./store/posts.js/action";


export const justIds = {
    id: "t",
}
export const Posts  = () => {

    const dispatch = useDispatch();
    const isError = useSelector(getPostsError);
    const isLoading = useSelector(getPostsLoading);
    const posts = useSelector(getPostsData);

    const getData = () => {
        dispatch(getPostsWithThunk);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <h1 data-testId = {justIds.id}>
                Posts
            </h1>
            <button onClick={getData}>Reload</button>
            { isLoading && <Loader />}
            {
                isError && <Error reload = {getData}/>
            }
            {
                !isLoading && posts.length> 0 && <Post posts = {posts} />            }
        </div>
    )
}