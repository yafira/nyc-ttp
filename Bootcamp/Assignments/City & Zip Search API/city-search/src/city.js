import React from 'react';
import './App.css';

class City extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // Handles input in search bar
  handleChange(event){
    this.setState({value: event.target.value });
  }

  handleSubmit(event){
    // Output in paragraph in html
    var output = document.querySelector(".output");
    // Handles lowercase, uppercase, mixed letters 
    var val = this.state.value.toUpperCase();


    // API call 
    fetch(`http://ctp-zip-api.herokuapp.com/city/${val}`)
    // Creates JSON file
      .then(res => res.json())
      .then(
        (search) => {
          // console.log(search);
          var total = `<h2>Area Codes in ${val}</h2>`
          search.map(item => (
            total += `<li> ${item} </li>`
          ))
          output.innerHTML = total;
        },
        (error) => console.log(error)
      );
    // Search field is empty
    event.preventDefault();
  }

  render(){
    return (
      <div className = "container">
        <form onSubmit={this.handleSubmit}>
          <label>
            <h1>Enter the name of a city:</h1>
            <input type="text" value={this.state.value} placeholder="City Name" onChange={this.handleChange} className = "city"/>
          </label>
          <input type="submit" value="Submit" />
        </form>

        <p className="output"> </p>
      </div>
    );
  }
}

export default City;
