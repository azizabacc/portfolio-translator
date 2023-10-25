// PageLoader.js
import React from 'react';


import '../css/PageLoader.css';

function PageLoader() {
  return (
    <div className="page-loader">
      <div className='site-image' style={{height : '27%'}}></div>

      <div className="loader"></div>
    </div>
  );
}

export default PageLoader;
