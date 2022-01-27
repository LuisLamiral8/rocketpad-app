import React from 'react';
import Card from './../hooks/Card'

const Article = () => {
  return(
      <article className='cards'>
        <div className="input-container">
        <input id="search-btn" type="text" placeholder='Project name' />
        </div>
          
        <div className="cards-container">
          <Card 
          title= "Token1"
          description= "Project in line to be loaded into the Rocketpad"
          swapRate= "1 USDT = 2010.405 METAV"
          cap= "10000"
          access= "Private"
          participants= "351"
          />
          <Card 
          title= "Token2"
          description= "Project in line to be loaded into the Rocketpad"
          swapRate= "1 USDT = 2010.405 METAV"
          cap= "10000"
          access= "Private"
          participants= "351"
          />
          
          <Card 
          title= "Token3"
          description= "Project in line to be loaded into the Rocketpad"
          swapRate= "1 USDT = 2010.405 METAV"
          cap= "10000"
          access= "Private"
          participants= "351"
          />
          <Card 
          title= "Token4"
          description= "Project in line to be loaded into the Rocketpad"
          swapRate= "1 USDT = 2010.405 METAV"
          cap= "10000"
          access= "Private"
          participants= "351"
          />
        </div>
        <div className="card-pagination">
          <div className="pagination-buttons">

          <button className="previous">Previous</button>
          <button className="page-active">1</button>
          <button>2</button>
          <button>3</button>
          <button className="next">Next</button>
          </div>
        </div>
     </article>
    )
};

export default Article;
