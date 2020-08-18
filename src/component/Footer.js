import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid bg-grad foot text-light">
          <div className="container py-3">
            <div className="row py-4">
              <div className="col-md-4 pt-5 pb-3">
                <Link
                  className="foot-logo text-decoration-none text-light"
                  to="/"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Blogs."
                >
                  Blogs.
                </Link>
                <p className="mb-5 mt-0 pr-5 mr-5">
                  <i className="fa fa-play mr-2"></i>Blog Network
                </p>
              </div>

              <div className="col-md-4 pt-3 pb-3">
                <h6 className="text-light">Powered By</h6>
                <div className="mt-4 mb-2">
                  <img
                    src={require("../assets/node.png")}
                    alt="foot icons"
                    className="foot-icon mr-3"
                  />
                  <img
                    src={require("../assets/react.png")}
                    alt="foot icons"
                    className="foot-icon mr-3"
                  />
                  <img
                    src={require("../assets/git.png")}
                    alt="foot icons"
                    className="foot-icon"
                  />
                </div>
              </div>

              <div className="col-md-2 pt-3 pb-3">
                <h5 className="text-light">Navigate</h5>
                <ul className="list-group mt-3 ml-3">
                  <li>
                    <Link className="text-light nav-link" to="/user">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="text-light nav-link" to="/all-posts">
                      Posts
                    </Link>
                  </li>
                  <li>
                    <Link className="text-light nav-link" to="/new-post">
                      Create
                    </Link>
                  </li>
                  <li>
                    <Link className="text-light nav-link" to="/info">
                      About
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-2 pt-3 pb-3">
                <h5 className="text-light">Contact</h5>
                <div className="mt-4">
                  <div className="mb-3">
                    <i className="fa fa-envelope fa-fw mr-2"></i>
                    <a className="text-decoration-none text-light" href="mailto:darshanjina1111998@gmail.com">Email</a>
                  </div>
                  <div className="mb-3">
                    <i className="fa fa-github fa-fw mr-2"></i>
                    <a className="text-decoration-none text-light"  href="https://github.com/Darshanjina">Github</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-4 form-bg text-dark">
          Designed by <span className="text-success">Darshan Jina</span>
        </div>
      </React.Fragment>
    );
  }
}
