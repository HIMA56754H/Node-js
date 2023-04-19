import React from 'react';

const Floating = ({image}) => {
  return (
    <div className="floatingdiv">
        <img src={image} alt='' />
        <span>
           {txt1}
            <br/>
            {txt2}
        </span>
    </div>
  )
}

export default Floating;