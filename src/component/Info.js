import React, { Component } from "react";
import PageTitle from "./PageTitle";

export default class Info extends Component {
  
  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div className="container py-3">
        <PageTitle title="About the Project" />
        <div className="col-md-6 mt-5 text-secondary form-bg mx-auto p-3 rounded">
          <div className="foot-logo text-dark">Blogs.</div>
          is a discussion or informational website consisting of discrete, often
          informal diary-style text entries (posts).
          <div className="mt-2"></div>
          Posts are typically displayed in reverse chronological order, so that
          the most recent post appears first, at the top of the page.
          <div className="mt-4">
            <div className="h6 text-dark">GitHub</div>
            <div className="my-3">
              <i className="fa fa-github fa-fw mr-2"></i>
              <a
                className="text-decoration-none text-secondary"
                href="https://github.com/Darshanjina/Blogs_practice"
              >
                Client App.
              </a>
            </div>
            <div className="my-3">
              <i className="fa fa-github fa-fw mr-2"></i>
              <a
                className="text-decoration-none text-secondary"
                href="https://github.com/Darshanjina/Blogs_practice-server"
              >
                Server
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
