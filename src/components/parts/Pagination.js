import React from 'react';

const Pagination = () => {
    return (
        <div className="row text-center pt-5 border-top">
        <div className="col-md-12">
          <div className="custom-pagination">
            <span>1</span>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <span>...</span>
            <a href="#">15</a>
          </div>
        </div>
    </div>
    )
}

export default Pagination;