import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
        }
    }

    updateValue = (e) => {
        this.setState ( (state, props) => {
            return { text:  e.target.value }
        } )
    }

    render(){
        return (
            <div>
                <input type='text' value= {this.state.text} onChange={this.updateValue}/>
            </div>
        )
    }
}

export default Form;