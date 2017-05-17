import React from 'react';

export default function Box(props) {
    
  return (<span onClick={() => props.Clicked()} className="box">{props.value}
          </span>
  );
  }

