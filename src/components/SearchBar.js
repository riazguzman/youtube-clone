import React from "react";

import { Paper, TextField } from "@material-ui/core";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
    console.log(this.state)
  };

  handleSubmit = (event) => {
    const { searchTerm } = this.state; 
    const { onFormSubmit } = this.props; 
    console.log(`searchTerm = ${searchTerm}`);
    onFormSubmit(searchTerm);  
    event.preventDefault();
  }


  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="Search..." onChange={this.handleChange} />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;