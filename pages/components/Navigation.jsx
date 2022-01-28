import React from 'react';
const Navigation = ({current}) => {
  return(
      <header className="navigation">
            <h5>Project</h5>
          <ul>
            <li><a href="#">Home</a></li>
            <li> {">"} </li>
            <li><a className='active' href="#">{current}</a></li>
          </ul>
      </header>
      ) 
};

export default Navigation;
