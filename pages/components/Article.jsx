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
          title= "Token 1"
          to= "/tokens/token1"
          description= "Project in line to be loaded into the Rocketpad"
          swapRate= "1 USDT = 2010.405 METAV"
          cap= "10000"
          access= "Private"
          participants= "351"
          />
          <Card 
          title= "Token 2"
          to= "/tokens/token2"
          description= "Project in line to be loaded into the Rocketpad"
          swapRate= "1 USDT = 2010.405 METAV"
          cap= "10000"
          access= "Public"
          participants= "351"
          />
          
          <Card 
          title= "Token 3"
          to= "/tokens/token3"
          description= "Project in line to be loaded into the Rocketpad"
          swapRate= "1 USDT = 2010.405 METAV"
          cap= "10000"
          access= "Private"
          participants= "351"
          />
          <Card 
          title= "Token 4"
          to= "/tokens/token4"
          description= "Project in line to be loaded into the Rocketpad"
          swapRate= "1 USDT = 2010.405 METAV"
          cap= "10000"
          access= "Public"
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
