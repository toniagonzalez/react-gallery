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
            <NavLink exact to="/screenprints" aria-label="screenprints">
              Screenprints
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/monoprints" aria-label="monoprints">
              Monoprints
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
