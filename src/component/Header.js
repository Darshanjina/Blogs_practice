import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username:"",
       loading:false
    };
  }

  componentDidMount(){
    this.funSetUsername();
  }

  funSetUsername = () => {
    let name;
    if(localStorage.getItem("username") === ""){
      name="Anonymous";
    }
    else{
      name = localStorage.getItem("username") 
    }

    this.setState({username: name});
  }

  render() {
    return (
      <div className="container-fluid px-0 bg-grad">
        <div className="container px-0">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <Link
              className="nav-logo text-decoration-none mb-0 text-light"
              to="/"
              data-toggle="tooltip"
              data-placement="top"
              title="Blogs."
            >
              Blogs.
            </Link>
            <button
              className="navbar-toggler border-light py-1"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars text-light"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <Link
                  className="nav-item nav-link text-light"
                  to="/user"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Profile"
                >
                  Profile
                </Link>
                <Link
                  className="nav-item nav-link text-light"
                  to="/all-posts"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="All Posts"
                >
                  Posts
                </Link>
                <Link
                  className="nav-item nav-link text-light"
                  to="/new-post"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Create new Post"
                >
                  Create
                </Link>
                <Link
                  className="nav-item nav-link text-light"
                  to="/info"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="About the Project"
                >
                  About
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
