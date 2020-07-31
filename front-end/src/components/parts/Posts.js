import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostItem from './PostItem';
import Pagination from './Pagination';

const Posts = () => {

    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch;

    const postItems = posts.map((post) => <PostItem post={post} />);

    console.log(posts);

    return (
        <>
            <div className="site-section bg-white">
                <div className="container">
                    <div className="row">
                        {postItems}
                    </div>
                </div>

            <Pagination />
            </div>
        </>
    )
}

export default Posts;