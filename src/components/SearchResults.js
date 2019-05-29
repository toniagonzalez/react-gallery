import React, { Component } from 'react';

import Gallery from './Gallery';
import Error404 from './Error404';


class SearchResults extends Component {


  componentDidUpdate(prevProps, prevState){
    if (this.props.query !== prevProps.query){
      this.props.handleQuery(this.props.query);
    }
  }

  render(){

    return (
          <div className="container">
              {
                (this.props.error)
                ? <Error404 />
                :(this.props.loading)
                ? <h1 className="loading">Loading...</h1>
                : <Gallery photoArray={this.props.photos} query={this.props.query} />
              }
          </div>
    );
  }
}

export default SearchResults;
