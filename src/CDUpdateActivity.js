import axios from 'axios'
import React from 'react'

export default class CDUpdate extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: ''
        }
    }

    fetchAPI = async () => {
        const URL = `https://reqres.in/api/users/${this.props.userId}`;
        const response = await axios.get(URL);
        this.setState( (state, props) => {
            return { email: response.data.data.email }
        } )
    }

    componentDidMount(){
        this.fetchAPI();
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.userId !== this.props.userId){
            this.fetchAPI();
        }
    }

    render () {
        return (
            <>
                <h3>{this.state.email}</h3>
            </>
        )
    }
}