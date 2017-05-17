import React from 'react';

export default function Box(props) {
    
  return (<div onClick={() => props.Clicked()} className="box">
            <span className="box_text">{props.value}</span>
          </div>
  );
  }

