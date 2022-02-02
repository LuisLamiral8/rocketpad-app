import React from 'react';

const Cursor = () => {
    if (typeof window !== 'undefined') {
        const cursor = document.getElementById('uno');
       
         const handleMouseMove = (e) => {
           cursor.style.top = e.clientY + 'px';
           cursor.style.left = e.clientX + 'px';
         }
       
         document.addEventListener('mousemove', handleMouseMove);
       
       
         const cursorDos = document.getElementById('dos');
       
         const handleMouseMoveDos = (e) => {
           cursorDos.style.top = e.clientY + 'px';
           cursorDos.style.left = e.clientX + 'px';
         }
       
         document.addEventListener('mousemove', handleMouseMoveDos);
       
       }

  return (

      <div>
        <div id="uno" className="mouse-cursor cursor-outer"></div>
        <div id="dos" className="mouse-cursor cursor-inner"></div>

      <style jsx>{`
      .mouse-cursor{
          position: fixed;
          left: 0;
          top: 0;
          pointer-events: none;
          border-radius: 50%;
          z-index:50 !important;
        }
        
        .cursor-outer{
            margin-left: -15px;
            margin-top: -15px;
            width: 30px;
            height: 30px;
            border: 2px solid #4d535e;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            opacity: .5;
            -webkit-transition: all .08s ease-out;
            transition: all .08s ease-out;
            z-index:50 !important;
        }
        
        .cursor-inner{
            margin-left: -3px;
            margin-top: -3px;
            width: 6px;
            z-index:50 !important;
            height: 6px;
            background-color: #4d535e;
            -webkit-transition: width .3s ease-in-out, height .3s ease-in-out, margin .3s ease-in-out, opacity .3s ease-in-out;
            transition: width .3s ease-in-out, height .3s ease-in-out, margin .3s ease-in-out, opacity .3s ease-in-out;
        }
        `}</style>
        </div>
    );
}

export default Cursor;
