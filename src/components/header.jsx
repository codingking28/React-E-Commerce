import React, { Component } from "react";
import FontAwesomeIcon from "../components/FontAwesomeIcon";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-5">
        <a className="navbar-brand font-Dancing" href="#">
          <FontAwesomeIcon icon="shopping-bag" className="text-primary mr-2" />
          Mcart</a>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ml-auto font-weight-bold">
            
            <li className="nav-item active">
              <a className="nav-link text-primary" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Category</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Latest</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <div className=" my-2  my-lg-0">
              <form className="form-inline">
                    <input className="form-control mr-sm-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-primary rounded-circle" type="submit">
                        <FontAwesomeIcon icon="search" className="mt-sm-1 mb-sm-1" />
              </button>

              <button className="form-control ml-2 rounded-pill" type="button">Sign In</button>
              <FontAwesomeIcon icon="shopping-cart" className="text-secondary ml-2 icon"  />
            </form>
            
            </div>
        </div>
      </nav>
    );
  }
}