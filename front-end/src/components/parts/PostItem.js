import React from 'react';

const PostItem = (props) => {
    return (

                    <div className="col-lg-4 mb-4">
                        <div className="entry2">
                            <a href="single.html"><img src={props.post.imgUrl} alt="Image" className="img-fluid rounded" /></a>
                            <div className="excerpt">
                                <span className="post-category text-white bg-secondary mb-3">{props.post.category.name}</span>

                                <h2><a href="single.html">{props.post.title}</a></h2>
                                <div className="post-meta align-items-center text-left clearfix">
                                    <figure className="author-figure mb-0 mr-3 float-left"><img src="images/person_1.jpg" alt="Image" className="img-fluid" /></figure>
                                    <span className="d-inline-block mt-1">By <a href="#">{props.post.createdBy}</a></span>
                                    <span>&nbsp;-&nbsp; {props.post.createdAt.substr(0,10)}</span>
                                </div>

                                <p>{props.post.description}</p>
                                <p><a href="#">Read More</a></p>
                            </div>
                        </div>
                    </div>

    )
}

export default PostItem;