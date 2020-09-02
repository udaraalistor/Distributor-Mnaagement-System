import React, { Component } from 'react';
import { Col, Row } from "reactstrap";
import Lbl from "../../../components/label/index";
import { MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import LabelInput from "../../../components/input/txtlbl/index";
import { Button as SementicBtn, Button, Checkbox, Icon, Input, Form } from "semantic-ui-react";
import { Spin, Tooltip, Icon as AntdIcon } from "antd";
import DrpDwn from "../../../components/dropdown/index";


class App extends Component {
    state = {
        disid: "",
        userid: "",
        username: "",
        password: "",
        confirmpassword: ""
    }

    fillData = () => {
        const { data } = this.props;
        if (data !== null) {

            this.setState({
                disid: data.disid,
                userid: data.userid,
                username: data.username,
                password: data.password
            })
        }
    };



    sendToBackEnd = () => {

        const { disid, userid, username, password } = this.state;
        const obj = {
            "disid": disid,
            "userid": userid,
            "username": username,
            "password": password,
        }

        console.log(obj);
    }

    componentDidMount() {
        this.fillData();
    }

    handleChange = (name, length) => event => {
        let value = event.target.value;

        if (name === "disid") {
            this.setState({
                [name]: value
            })

        } else if (name === "userid") {
            this.setState({
                [name]: value
            })

        } else if (name === "username") {
            this.setState({
                [name]: value
            })

        } else if (name === "password") {
            this.setState({
                [name]: value
            })

        } else if (name === "confirmpassword") {
            this.setState({
                [name]: value
            })

        }
    };
    dropDownChange = name => (event, { value }) => {
        if (name === "status") {
            this.setState({
                [name]: value
            })
        }

    };


    render() {
        const { code, name, contact, email } = this.state;


        return (
            <div>
                <MDBModal isOpen={true} toggle={this.toggle} size="xl">
                    <MDBModalHeader className={"title"} toggle={this.props.closeModal}>Modify Van</MDBModalHeader>
                    <MDBModalBody>
                        <Row style={{ padding: '10px' }}>
                            <Col xs="12" lg={"12"} md={"12"} className={"padd_grap"}>
                                <Row>
                                    <Col lg={6}>
                                        <Form>
                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Distributor ID</Lbl>
                                                <LabelInput
                                                    placeholder={"Distributor ID"}
                                                    value={this.state.disid}
                                                    onChange={this.handleChange('disid')
                                                    }
                                                />
                                            </Col>

                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>User ID</Lbl>
                                                <LabelInput
                                                    placeholder={"User ID"}
                                                    value={this.state.userid}
                                                    onChange={this.handleChange('userid')
                                                    }
                                                />
                                            </Col>

                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>User Name</Lbl>
                                                <LabelInput
                                                    placeholder={"Name"}
                                                    value={this.state.username}
                                                    onChange={this.handleChange('username')}
                                                />
                                            </Col>


                                        </Form>
                                    </Col>

                                    <Col lg={6}>
                                        <Form>
                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Password</Lbl>
                                                <LabelInput
                                                    placeholder={"Password"}
                                                    value={this.state.password}
                                                    onChange={this.handleChange('password')
                                                    }
                                                />
                                            </Col>

                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Confirm Password</Lbl>
                                                <LabelInput
                                                    placeholder={"Confirm Password"}
                                                    value={this.state.confirmpassword}
                                                    onChange={this.handleChange('confirmpassword')}
                                                />
                                            </Col>
                                        </Form>

                                        <center>
                                            <Col lg={"12"} className={"marginTop"} style={{ marginBottom: '5px' }}>
                                                <Button className="px-5" onClick={this.sendToBackEnd}>Update</Button>
                                            </Col>
                                        </center>

                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </MDBModalBody>
                </MDBModal>

            </div>
        )
    }
}

export default App;
