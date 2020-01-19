import React from 'react';
import './App.css';

class Zip extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   // Handles input in search bar
  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
     // Output in paragraph in html
    var output = document.querySelector(".output");
    var val = this.state.value;

    // API call 
    fetch(`http://ctp-zip-api.herokuapp.com/zip/${val}`)
    // Creates JSON file
      .then(res => res.json())
      .then(
        (result) => {
          var total = `<h2>Cities with ${val} as a Zip Code</h2>`;
          // console.log(result);
          result.map(item => (
            total += `
            <div class = "city">
              ${item.City}
              <li><b>State:</b> ${item.State} </li>
              <li><b>Population:</b> ${item.EstimatedPopulation} </li>
              <li><b>Total Wages:</b> ${item.TotalWages} </li>
            </div>

            `
          ))
          output.innerHTML = total;
        },
        (error) => console.log(error)
      )
      // Search field is empty
    event.preventDefault();
  }

  render(){
    return (
      <div className = "container">
        <form onSubmit={this.handleSubmit}>
          <label>
            <h1>Enter a Zip Code:</h1>
            <input type="text" value={this.state.value} placeholder="Zip Code" onChange={this.handleChange} className = "zip"/>
          </label>
          <input type="submit" value="Submit" />
        </form>

        <p className="output"> </p>
      </div>
    );
  }
}

export default Zip;
