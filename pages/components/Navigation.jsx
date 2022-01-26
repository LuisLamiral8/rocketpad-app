import React from 'react';
const Navigation = () => {
  return(
      <section className="navigation">
            <h5>Project</h5>
          <ul>
            <li><a href="#">Home</a></li>
            <li> {">"} </li>
            <li><a className='active' href="#">Project</a></li>
          </ul>
      </section>
      ) 
};

export default Navigation;
