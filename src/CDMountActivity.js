import axios from 'axios';
import React from 'react'

export default class CDMount extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
        }
    }

    fetchApi = async () => {
        const URL = `https://reqres.in/api/users/1`;
        const response = await axios.get(URL);
        this.setState( (state, props) => {
            return { email: response.data.data.email }
        } )
    }

    componentDidMount(){
        this.fetchApi();
    }

    render(){
        return (
            <div>
                <h2>{this.state.email}</h2>
            </div>
        )
    }
}