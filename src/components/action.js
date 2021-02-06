import React from 'react';

const Action = (props) =>(
        <div>           
        <button disabled={!props.hasOption} onClick={props.pickOne} className="big__button">What Should I do?</button>
        </div>

);
export default Action;