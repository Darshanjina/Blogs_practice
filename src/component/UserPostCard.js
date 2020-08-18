import React, { Component } from "react";

export default class UserPostCard extends Component {
  render() {
    const { post } = this.props;
    let date = new Date(this.props.post.createdAt);
    let convDate = date.toDateString();
    const imgUrl = "https://robohash.org/" + post.post_title + ".png";
    return (
      <div className="my-4 p-0">
        <div className="row m-0">
          <div className="col-2 post-pic-holder text-left p-0">
            <img
              src={imgUrl}
              alt={post.username}
              className="post-img bg-grad p-1"
            />
          </div>
          <div className="col-10 py-3 form-bg text-dark rounded">
            <div className="post-body">
              <h4 className="card-title h2 mb-3">{post.post_title}</h4>
              <div className="my-3 small text-secondary">{post.post_cat}</div>
              <p className="card-text text-secondary">{post.post_body}</p>
              <hr className="bg-grad rounded-pill pt-1 border-light mt-4"></hr>
              <div className="mt-3 text-dark">Posted By : You</div>

              <div className="mt-3 text-right">
                <button
                  type="button"
                  className="btn btn-success btn-sm mr-2"
                  data-toggle="modal"
                  data-target="#editor"
                  onClick={() => {
                    this.props.funSetPost(post);
                  }}
                >
                  <i className="fa fa-pencil fa-fw"></i>
                </button>
                <button
                  className="btn btn-success btn-sm"
                  data-toggle="modal"
                  data-target="#deletor"
                  onClick={() => {
                    this.props.funSetPost(post);
                  }}
                >
                  <i className="fa fa-trash fa-fw"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="small py-1 px-2 w-100 text-right text-secondary">
            {convDate}
          </div>
        </div>
      </div>
    );
  }
}
