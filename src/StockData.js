import axios from 'axios';
import React from 'react'

export default class StockData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            entry: 0,
            value: null
        }
    }

    fetchAPI = async () => {
        const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`;
        const response = await axios.get(URL);
        return await response.data;
    }

    abc = async () => {
        let x = await this.fetchAPI();
        console.log(x)
    }

    componentDidMount(){
        this.abc();
    }


    render(){
        return (
            <h3 onClick={this.abc}> hello</h3>
        )
    }

}