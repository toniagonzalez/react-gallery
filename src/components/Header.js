import React, { Component } from 'react';
import { Jumbotron, Container} from 'react-bootstrap';
import NavBar from './NavBar';



class Header extends Component {

  constuctor(props){
    this.addToLinkToHistory.bind(this);
  }

  addToLinkToHistory = (inputValue)=> {
    this.props.history.push(`/${inputValue}`)
  }

  render(){
    return (
      <header>
        <Jumbotron >
          <Container>
            <h1>Welcome to the world of Printmaking!</h1>
            <p>Check out the links to our favorite topics below or explore your own.</p>
            <NavBar history={this.addToLinkToHistory} />
          </Container>
        </Jumbotron>
      </header>
    );
  }
}


export default Header;
