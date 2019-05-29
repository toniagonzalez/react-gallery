import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchForm from './SearchForm';


const NavBar = (props)=> {


    return (
      <nav className="navbar">

        <ul aria-label="favorite topics">
          <li>
            <NavLink exact to="/blockprints" aria-label="blockprints">
              Blockprints
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/sketches" aria-label="sketches">
              Sketches
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/paintings" aria-label="paintings">
              Paintings
            </NavLink>
          </li>
        </ul>

        <SearchForm
          history={props.history}
        />
      </nav>
    );

}


export default NavBar;
