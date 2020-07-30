import React from 'react';
const Background = 'images/img_2.jpg';
const SingleItemHeader = () => {
    return (
        <div className="site-cover site-cover-sm same-height overlay single-page" style={{backgroundImage: `url(${Background})`}}>
            <div className="container">
                <div className="row same-height justify-content-center">
                    <div className="col-md-12 col-lg-10">
                        <div className="post-entry text-center">
                            <span className="post-category text-white bg-success mb-3">Nature</span>
                            <h1 className="mb-4"><a href="#">The AI magically removes moving objects from videos.</a></h1>
                            <div className="post-meta align-items-center text-center">
                                <figure className="author-figure mb-0 mr-3 d-inline-block"><img src="images/person_1.jpg" alt="Image" className="img-fluid" /></figure>
                                <span className="d-inline-block mt-1">By Carrol Atkinson</span>
                                <span>&nbsp;-&nbsp; February 10, 2019</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SingleItemHeader;