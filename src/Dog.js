import React from "react";
import axios from "axios";
import './style.css'

export default class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "random",
      avatar: ""
    };
  }

  fetchAPI = async () => {
    const URL = `https://dog.ceo/api/breeds/image/random`;
    const response = await axios.get(URL);
    this.setState({ avatar: `${response.data.message}` , id: 'random'});
  };

  fetchBreedAPI = async () => {
    if(this.props.id == 'random'){
        this.fetchAPI();
    }
    else{
        const URL = `https://dog.ceo/api/breed/${this.props.id}/images/random`;
        const response = await axios.get(URL);
        this.setState({ avatar: `${response.data.message}`, id: this.props.id });
    }
  };

  componentDidMount() {
    this.fetchAPI();
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevProp.id != this.props.id) {
      this.fetchBreedAPI();
    }
  }

  render() {
    return (
      <div>
        <br/>
        <img src={this.state.avatar} className='dogImg'/>
        <div>
            <br/>
            <button onClick={this.fetchBreedAPI}>Next</button>
        </div>
      </div>
    );
  }
}
