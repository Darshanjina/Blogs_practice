import React, { Component } from "react";
import PageTitle from "./PageTitle";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import UserPostCard from "./UserPostCard";
import {
  funGetSortedPosts,
  funUpdatePost,
  funDeletePost,
} from "../action/post.action";
import Loading from "./Loading";
import BacktoTop from "./BacktoTop";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      username: "",
      post_title: "",
      post_cat: "",
      post_body: "",
      valid: true,
    };
  }

  componentDidMount() {
    this.getMyPosts();
  }

  funLogOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
  };

  funSetPost = (post) => {
    this.setState({
      _id: post._id,
      username: post.username,
      post_title: post.post_title,
      post_cat: post.post_cat,
      post_body: post.post_body,
    });
  };

  funSetState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  funClearState = () => {
    this.setState({
      _id: "",
      username: "",
      post_title: "",
      post_cat: "",
      post_body: "",
    });
  };

  funValidator = () => {
    if (
      this.state._id === "" ||
      this.state.username === "" ||
      this.state.post_title === "" ||
      this.state.post_cat === "" ||
      this.state.post_body === ""
    ) {
      this.setState({ valid: false });
      return false;
    } else {
      this.setState({ valid: true });
      this.funUpdate();
    }
  };

  funUpdate = () => {
    const form = {
      _id: this.state._id,
      username: this.state.username,
      post_title: this.state.post_title,
      post_cat: this.state.post_cat,
      post_body: this.state.post_body,
    };
    this.props.funUpdatePost(form);
    this.getMyPosts();
  };

  funDelete = () => {
    this.props.funDeletePost({ _id: this.state._id });
    this.getMyPosts();
  };

  getMyPosts = () => {
    window.scrollTo(0,0);
    const name = localStorage.getItem("username");
    this.props.funGetSortedPosts({ username: name });
  };

  render() {
    const name = localStorage.getItem("username");
    const imgUrl = "https://robohash.org/" + name + ".png";

    return (
      <div className="container py-3">
        <PageTitle title="User Profile" />

        <div className="mt-5 text-center">
          <img
            src={imgUrl}
            alt="userprofile"
            className="bg-grad userprofile rounded-pill"
          />
        </div>

        <div className="mb-5 mt-3 h1 text-center">
          {name} <i className="fa fa-check-circle text-primary"></i>
        </div>

        <div className="my-3 text-right">
          <Link
            className="btn btn-danger btn-sm"
            to="/"
            onClick={this.funLogOut}
            data-toggle="tooltip"
            data-placement="top"
            title="LogOut"
          >
            <i className="fa fa-power-off"></i> Logout
          </Link>
        </div>

        <div className="text-secondary text-center my-3">Posts</div>

        <div className="pb-2 px-0 my-4">
          {this.props.sortedPost.length === 0 ? <Loading/> : null}
          {this.props.sortedPost.map((post) => (
            <UserPostCard
              key={post._id}
              post={post}
              funSetPost={this.funSetPost}
            />
            ))}
        </div>

        <BacktoTop/>

        <div className="modal fade" id="editor" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body p-0 text-left">
                <div className="form-group form-bg rounded text-dark m-0 pt-3 pb-4 px-3">
                  <PageTitle title="Edit Post" />
                  <div className="mb-3 mt-4 h6">Title</div>
                  <input
                    type="text"
                    name="post_title"
                    value={this.state.post_title}
                    className="rounded my-3 form-control"
                    onChange={this.funSetState}
                  />
                  <div className="my-3 h6">Category</div>
                  <select
                    name="post_cat"
                    value={this.state.post_cat}
                    className="rounded my-3 form-control"
                    onChange={this.funSetState}
                  >
                    <option value="">Select a Category</option>
                    <option value="General">General</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Technology">Technology</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Travelling">Travelling</option>
                    <option value="Sports">Sports</option>
                    <option value="Fitness & Diet">Fitness & Diet</option>
                    <option value="Business">Business</option>
                    <option value="Foods">Foods</option>
                  </select>

                  <div className="my-3 h6">Body</div>
                  <textarea
                    type="text"
                    rows="3"
                    name="post_body"
                    value={this.state.post_body}
                    className="rounded my-3 form-control"
                    onChange={this.funSetState}
                  ></textarea>

                  {this.state.valid ? null : (
                    <div className="alert alert-danger my-3">
                      Please fill all the details !!
                    </div>
                  )}

                  <hr className="bg-grad rounded-pill pt-1 border-light mt-4"></hr>

                  <div className="mt-3 text-right">
                    <button
                      type="button"
                      className="btn btn-dark mr-2"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <i className="fa fa-close"></i>
                    </button>
                    <button
                      className="btn btn-dark mr-2"
                      onClick={this.funClearState}
                    >
                      <i className="fa fa-repeat"></i>
                    </button>
                    <button
                      className="btn btn-success"
                      data-dismiss="modal"
                      onClick={this.funValidator}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="deletor" tabIndex="-1" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-sm"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-body p-0 text-left">
                <div className="form-group form-bg rounded text-dark m-0 p-3">
                  <PageTitle title="Delete Post" />

                  <div className="my-4 h6 text-center">Are you sure ?</div>

                  <div className="my-3 text-center">
                    <button className="btn btn-dark mr-5" data-dismiss="modal">
                      No
                    </button>
                    <button
                      className="btn btn-success"
                      data-dismiss="modal"
                      onClick={this.funDelete}
                    >
                      Yes
                    </button>
                  </div>

                  <hr className="bg-grad rounded-pill pt-1 border-light mt-4"></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sortedPost: state.post.sortedPost,
});

export default connect(mapStateToProps, {
  funGetSortedPosts,
  funUpdatePost,
  funDeletePost,
})(User);
