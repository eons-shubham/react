import React from "react";
import axios from "axios";
import { Alert } from "react-alert";

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      email: "",
      avatar:
        "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"
    };
  }

  fetchAPI = async () => {
    try {
      const URL = `https://reqres.in/api/users/${this.props.id}`;
      const response = await axios.get(URL);
      this.setState((state, props) => {
        return {
          name: response.data.data.first_name + " " + response.data.data.last_name,
          email: response.data.data.email,
          avatar: response.data.data.avatar
        };
      });
    } catch (error) {
      this.setState({
        name: "",
        email: "",
        avatar:
          "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"
      });
      alert("error");
    }
  };

  componentDidUpdate(prevProp, prevState) {
    if (prevProp.id !== this.props.id) {
      this.fetchAPI();
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li>Name: {this.state.name}</li>
          <li>Email: {this.state.email}</li>
        </ul>
        <img src={this.state.avatar} />
      </div>
    );
  }
}
