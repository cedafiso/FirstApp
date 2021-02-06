import React from 'react';
import Option from './option';
const Options = (props) =>(
        <div>
            <div className="widget-header">  
                <h3 className="widget-header__h3">Your options</h3>
                <button onClick={props.removeAll} className="button button--link">Remove All</button>       
            </div>  
            {props.options.length == 0 && <p className="widget-header__addoption-msg">Please add an option to start!</p>}
        {
            props.options.map((option, index) =>
            <div key={option} className="option">
                <Option 
                key={option}
                textObject={option} 
                removeOne={props.removeOne}
                counter = {index  + 1}
                />
                <button onClick={ (e) => {
                    props.removeOne(option)}}
                    className="button button--link"
                >Remove</button>
            </div>
            )
        }
        <Option />
        </div>
);

export default Options;