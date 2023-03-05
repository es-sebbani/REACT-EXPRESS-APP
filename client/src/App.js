import React, { Component } from "react";
import axios from "axios";

//https://jsonplaceholder.typicode.com/posts

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
class App extends Component {
  state = {
    hello: null,
  };

  componentDidMount() {
    axiosInstance
      .get("/posts")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    //this.asyncFunction();
    //pour afficher salam qui est tapez dans le backend
    axios
      .get("/hello")
      .then((res) => this.setState({ hello: res.data }))
      .catch((err) => console.log(err));
  }
  /* asyncFunction = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }; */

  render() {
    return (
      <div>
        {this.state.hello ? <div>{this.state.hello}</div> : <div>nothing</div>}
      </div>
    );
  }
}

export default App;
