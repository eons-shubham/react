import axios from 'axios';
import React from 'react'

export default class CDMount extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: ""
        }
    }

    fetchAPI = async () => {
        const URL = `https://reqres.in/api/users/1`;
        const response = await axios(URL);
        this.setState ( (state, props) => {
            return { email: response.data.data.email }
        } )
    }

    componentDidMount(){
        this.fetchAPI();
    }

    render(){
        return(
            <>
                <h3>{this.state.email}</h3>
            </>
        )
    }
}