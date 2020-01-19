import React from 'react';
import Trending from './Trending';
import Random from './Random';
import Regular from './Regular';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      key : "EbdzMtkrW8YXtkkpYTpBjMxyizs3c7Ok"
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event){
    var output = document.querySelector(".output");
    var val = this.state.value;

    fetch(`http://api.giphy.com/v1/gifs/search?q=${val}&api_key=${this.state.key}`)
      .then(res => res.json())
      .then(
        (result) => {
          var total = ``
          result.data.map(item => (
            total += `
            <div class = "item">
              <img src="${item.images.downsized_large.url}">
            </div>
              `
          ))
          output.innerHTML = total;
        },
        (error) => console.log(error)
      )

    event.preventDefault();
  }

  render(){
    return (
      <div className = "container">
        <form onSubmit={this.handleSubmit}>
          <label>
            <h1> Search for gifs:</h1>
            <input type="text" value={this.state.value} placeholder="Enter here." onChange={this.handleChange} className = "city"/>
          </label>
          <input type="submit" value="Submit" />
        </form>

        <div className="output">
          <Trending giphykey={this.state.key} />
        </div>
      </div>
    );
  }
}

export default App;
