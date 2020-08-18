import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle';
import axios from 'axios';
import {APIURL} from '../action/type';

export default class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:"",
             valid:true,
             loading: false
        }
    }

    funSetState = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    funValidator = () =>{
        this.setState({loading: true});
        if(this.state.username === "" || this.state.password === ""){
            this.setState({valid: false});
            this.setState({loading: false});
            return false;
        }
        else{
            this.setState({valid: true});
            this.funSignIn();
        }
    }

    funSignIn = () => {
        const method = "/insert-user";
        const form = {
            username : this.state.username,
            password : this.state.password
        }
        axios.post(APIURL+method,form)
        .then((res)=>{
            this.setState({loading: true});
            if(res.data.status === "OK"){
                this.setState({loading: false});
                this.props.history.push('/')
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
    render() {
        return (
            <div className="container py-3">
            <PageTitle title="Create Account"/>
            <div className="form-group form-bg rounded mt-5 col-md-5 mx-auto p-3">
                <div className="text-dark h5 mb-3">Username</div>
                <input className="form-control my-3" type="text" name="username" value={this.state.username} onChange={this.funSetState}/>
                <div className="text-dark h5 mb-3">Password</div>
                <input className="form-control my-3" type="password" name="password" value={this.state.password} onChange={this.funSetState}/>

                {this.state.valid ? null : (
                <div className="alert alert-danger my-3">
                Please fill all the details !!!
                </div>
                )}

                <button className="btn btn-primary mt-2 mb-3" onClick={this.funValidator}>
                    Create
                    {
                        this.state.loading ? (<i className="fa fa-spin ml-1 fa-spinner"></i>) : null
                    }
                </button>
                <hr className="w-100 bg-grad rounded-pill border-light pt-1"/>

                <div className="text-center">
                    <Link to="/" className="text-decoration-none small text-dark">
                        Already have an account? Login here.
                    </Link>
                </div>
            </div>
        </div>
        )
    }
}
