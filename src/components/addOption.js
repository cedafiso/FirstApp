import React from 'react';

export default class AddOption extends React.Component {
    state = {error : undefined,
        value: ''
    };
    handleChange = (e) => {
        e.preventDefault();
        this.setState(() => ({value: e.target.value}));
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);
        this.setState(() =>({error}))
        this.setState(() => ({value:  ''}));
    }
    render(){
        return (
            <div>
            {this.state.error && <p className="addOption-error">{this.state.error}</p>}         
            <form className="addOption" onSubmit={this.onFormSubmit}>
            <input 
            className="addOption__input" 
            type='text' 
            name='option' 
            value={this.state.value} 
            onChange={this.handleChange}
            ></input>
            <button className="button">Add option</button>
            </form>
            </div>
        );
    }
}