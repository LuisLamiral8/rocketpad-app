import React from 'react';
import Card from './../hooks/Card'

const Article = () => {
  return(
      <article className='cards'>
        <div className="input-container">
        <input id="search-btn" type="text" placeholder='Project name' />
        </div>
        <div className="cards-container">
          <Card/>
        </div>

     </article>
    )
};

export default Article;
