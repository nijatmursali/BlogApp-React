import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


//const postItems = posts.map((post) => <Breadcrumbs post={post} />);

const Breadcrumbs = () => {
    return (
        <div className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span>Category</span>
              <h3>Sports</h3>
              <p>Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Breadcrumbs;