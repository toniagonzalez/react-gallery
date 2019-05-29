import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import apiKey from  '../config.js';

// App components
import Header from './Header';
import SearchResults from './SearchResults';
import NotFound from './NotFound';



class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        photos: [],
        loading: true,
        error: false,
        query: '',
    };
  }

  handleQuery = ( queryString) => {
    this.setState({
      query: queryString
    }, ()=> this.performSearch())
  }

  performSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.query}&per_page=24&format=json&nojsoncallback=1`)
      .then(data => {
        this.setState({
            photos: data.data.photos.photo,
            loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
        this.setState({
            error: true
        })
      });
  }

  componentDidMount(){
    this.handleQuery(window.location.pathname.substr(1));
  }

    render(){

      return (
        <BrowserRouter>
          <div className="container">
            <Route path="*" component={Header}/>
            <Switch>
              <Route
                exact path="/"
                render={() => <Redirect to="/blockprints" />}
              />
              <Route
              path="/:inputValue"
              render={(props) => (<SearchResults  loading={this.state.loading}
              error={this.state.error}
              photos={this.state.photos}
              query={props.match.params.inputValue}
              handleQuery={this.handleQuery}
               />)}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
}
export default App;
