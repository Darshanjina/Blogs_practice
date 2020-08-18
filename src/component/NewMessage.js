import React, { Component } from "react";
import { connect } from "react-redux";
import { funAddPost, funGetAllPosts } from "../action/post.action";
import PageTitle from "./PageTitle";

class NewMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      post_title: "",
      post_cat: "",
      post_body: "",
      valid: true,
    };
  }

  componentDidMount(){
    window.scrollTo(0,0);
    this.funSetUsername();
  }

  funSetState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  funSetUsername = () => {
    let name;
    if(localStorage.getItem("username") === ""){
      name="Anonymous";
    }
    else{
      name = localStorage.getItem("username");
    }

    this.setState({username:name});
  };

  funReset = () => {
    this.setState({
      post_title: "",
      post_cat: "",
      post_body: "",
    });
  };

  funValidator = () => {
    if (
      this.state.username === "" ||
      this.state.post_title === "" ||
      this.state.post_cat === "" ||
      this.state.post_body === ""
    ) {
      this.setState({ valid: false });
      return false;
    } else {
      this.setState({ valid: true });
      this.funSendMessage();
    }
  };

  funSendMessage = () => {
    const form = {
      username: this.state.username,
      post_title: this.state.post_title,
      post_cat: this.state.post_cat,
      post_body: this.state.post_body,
    };

    this.props.funAddPost(form);
    this.props.funGetAllPosts();
    this.routeToAllMessages();
  };

  routeToAllMessages = () => {
    this.props.history.push("/all-posts");
  };

  render() {
    return (
      <div className="container py-3">
        <PageTitle title="Create New Post" />
        <div className="form-bg rounded text-dark mt-5 col-md-6 mx-auto p-3">
          <div className="my-3 h6">Title</div>
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
              Please fill all the Details !!
            </div>
          )}
          <hr className="bg-grad rounded-pill pt-1 border-light mt-4"></hr>

          <div className="mt-3 text-right">
            <button
              className="btn btn-dark mr-2"
              onClick={this.routeToAllMessages}
            >
              <i className="fa fa-close"></i>
            </button>
            <button className="btn btn-dark mr-2" onClick={this.funReset}>
              <i className="fa fa-repeat"></i>
            </button>
            <button className="btn btn-success" onClick={this.funValidator}>
              Create
            </button>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  addPost: state.post.addPost,
});

export default connect(mapStateToProps, { funAddPost, funGetAllPosts })(
  NewMessage
);
