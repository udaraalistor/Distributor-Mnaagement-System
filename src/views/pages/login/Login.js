import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import img from '../../../assets/icons/images/shopping2.png'
import { Button, Card, CardBody, CardGroup, Col, Container, Row } from 'reactstrap';
import { Input } from "semantic-ui-react";
import './Login.css';
import axios from 'axios';
import cookie from 'react-cookies';
import * as Validator from '../../../util/Validator';



export default class Login extends Component {

  state = {
    username: "",
    password: "",
    userrole: "USER",
    logindata: [],
    usernameerror: "",
    passworderror: ""
  }

  // onClick={()=>{this.loginhandler()}

  constructor(props) {
    super(props)
  }

  loginhandler = async () => {

    cookie.save('USERROLE', this.state.userrole, { path: '/' });

    console.log("user role is: ", cookie.load('USERROLE'));


    const { username, password, userrole } = this.state;
    const obj = {
      "username": username,
      "password": password,
      "userrole": userrole
    }

    console.log(obj);

    await axios.post(
      "http://localhost:3000/login", obj
    )
      .then(async response => {
        if (response.data.success) {
          let logindata = response.data.logindata;
          this.setState({
            logindata: logindata
          })

        }
      })

      .catch(async error => {
        console.log(error)
      })

      .finally(fin => {

      });


    this.props.history.push({
      pathname: "/dashboard",
    });



  }

  handleChange = (name, length) => event => {
    let value = event.target.value;

    if (name === "username") {
      this.setState({
        [name]: value
      })

    } else if (name === "password") {
      this.setState({
        [name]: value
      })

    }
  };

  testValidator = () => {
    const validationUsername = Validator.textFieldValidator(this.state.username, this.state.username.length);
    const validationpassword = Validator.textFieldValidator(this.state.password, this.state.password.length);

    if (validationUsername === false) {
      this.setState({

        usernameerror: "Username can't be empty",

      })

      return false
    } else {
      this.setState({
        usernameerror: "",


      })

      if (validationpassword === false) {
        this.setState({
          passworderror: "Password can't be empty"

        })

        return false

      } else {

        this.setState({
          passworderror: ""

        })

      }

    }

    return true
  }


  checkValidation = () => {
    let formvalidation = this.testValidator();


    if (formvalidation) {
      this.loginhandler();
    }
  }

  render() {

    return (
      <div className="c-app c-default-layout flex-row align-items-center animated bounceInLeft login-background">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup style={{ boxShadow: '0 30px 60px 0 rgba(0,0,0,0.3)' }}>
                <Card className="p-4" style={{ border: 'none' }}>

                  {/* {
                    !this.state.isForgotPassword ? */}
                  <CardBody>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <Input
                      // ref={this.inputRef_username}
                      focus={true}
                      style={txtStyle}
                      className={"login-username"}
                      icon='user'
                      iconPosition='left'
                      label={{ tag: true, content: 'Username' }}
                      labelPosition='right'
                      placeholder='Enter Username'
                      onChange={this.handleChange("username")}
                    />

                    {
                      <h5 style={{ color: 'red' }}>{this.state.usernameerror}</h5>
                    }

                    <Input
                      // ref={this.inputRef_password

                      // }
                      className={"login-password"}
                      style={txtStyle}
                      icon='lock'
                      iconPosition='left'
                      type={"password"}
                      label={{ tag: true, content: 'Password' }}
                      labelPosition='right'
                      placeholder='Enter Password'
                      onChange={this.handleChange("password")}
                    />

                    {
                      <h5 style={{ color: 'red' }}>{this.state.passworderror}</h5>
                    }


                    <Row>
                      <Col xs="6">
                        <Button onClick={() => { this.checkValidation() }} className="ui button px-5">Login</Button>
                      </Col>
                      <Col xs="6">
                        <p className={"login-right-side-forgot-password"}
                        // onClick={()=>this.setState({isForgotPassword:true})}
                        >Forgot password?</p>
                      </Col>
                    </Row>
                  </CardBody>
                  {/* :
                      <ForgotPassword backToSigninFunc={()=>this.setState({isForgotPassword:false})}/>
                  } */}

                </Card>

                <Card className="text-white  py-5 d-md-down-none login-right-side"
                  style={{ border: 'none', width: '44%', height: '342px', border: 'none' }}>

                  <img src={img} style={{ width: '150%', height: '180%', objectFit: 'contain' }} alt={"."} />

                </Card>


              </CardGroup>
            </Col>

          </Row>
        </Container>

      </div>
    )
  }
}

let txtStyle = {
  marginBottom: '10px',
  height: '45px',
  width: '100%'
};


