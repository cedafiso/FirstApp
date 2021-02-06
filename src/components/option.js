import React from 'react';

const Option = (props) =>(
        <div>           
        {props.counter > 0 && <p className="option__text">{props.counter}. {props.textObject}</p> }
        </div>

);

export default Option;