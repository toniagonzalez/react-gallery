import React from 'react';

const Image = (props) => (

  <li>
    <img
       src={props.src} key={props.id} className="photo" alt={props.title} title={props.title}
     />
  </li>
);

export default Image;
