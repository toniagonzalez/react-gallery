import React, { Component } from 'react';


class SearchForm extends Component {


  handleSubmit = (e) => {
    e.preventDefault();
    let inputValue = this.inputValue.value.toLowerCase();    this.props.history(inputValue);
  }


  render(){
    return (
      <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Explore"
          aria-label="Search"
          ref={ (input)=> this.inputValue = input}
        />
        <button className="btn  my-2 my-sm-0">
          Search
        </button>
      </form>
    );
  }

}

export default SearchForm;
