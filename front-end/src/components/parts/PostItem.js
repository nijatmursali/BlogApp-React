import React from 'react';

const PostItem = () => {
    return (
        <div className="site-section bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="entry2">
                            <a href="single.html"><img src="images/img_1.jpg" alt="Image" className="img-fluid rounded" /></a>
                            <div className="excerpt">
                                <span className="post-category text-white bg-secondary mb-3">Politics</span>

                                <h2><a href="single.html">The AI magically removes moving objects from videos.</a></h2>
                                <div className="post-meta align-items-center text-left clearfix">
                                    <figure className="author-figure mb-0 mr-3 float-left"><img src="images/person_1.jpg" alt="Image" className="img-fluid" /></figure>
                                    <span className="d-inline-block mt-1">By <a href="#">Carrol Atkinson</a></span>
                                    <span>&nbsp;-&nbsp; July 19, 2019</span>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                                <p><a href="#">Read More</a></p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default PostItem;