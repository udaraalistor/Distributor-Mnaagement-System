import React, { Component } from 'react';
import { Col, Row } from "reactstrap";
import Lbl from "../../../../components/label/index";
import { MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import LabelInput from "../../../../components/input/txtlbl/index";
import { Button as SementicBtn, Button, Checkbox, Icon, Input, Form } from "semantic-ui-react";
import { Spin, Tooltip, Icon as AntdIcon } from "antd";
import DrpDwn from "../../../../components/dropdown/index";


class App extends Component {
    state = {
        code: "",
        name: "",
        contact: "",
        email: ""
    }

    fillData = () => {
        const { data } = this.props;
        if (data !== null) {

            this.setState({
                code: data.code,
                name: data.name,
                contact: data.contact,
                email: data.email,
            })
        }
    };

    sendToBackEnd = () => {

        const { code, name, contact, email } = this.state;
        const obj = {
            "code": code,
            "name": name,
            "contact": contact,
            "email": email
        }

        console.log(obj);
    }

    componentDidMount() {
        this.fillData();
    }

    handleChange = (name, length) => event => {
        let value = event.target.value;

        if (name === "name") {
            this.setState({
                [name]: value
            })

        } else if (name === "contact") {
            this.setState({
                [name]: value
            })

        } else if (name === "email") {
            this.setState({
                [name]: value
            })

        } else if (name === "vatnumber") {
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
                    <MDBModalHeader className={"title"} toggle={this.props.closeModal}>Modify Distributor</MDBModalHeader>
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
                                                    value={code}
                                                    // onChange={false}

                                                />
                                            </Col>

                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Name</Lbl>
                                                <LabelInput
                                                    placeholder={"Name"}
                                                    value={name}
                                                    onChange={this.handleChange('name')}
                                                />
                                            </Col>



                                        </Form>
                                    </Col>

                                    <Col lg={6}>
                                        <Form>
                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Contact</Lbl>
                                                <LabelInput
                                                    placeholder={"Contact"}
                                                    value={contact}
                                                    onChange={this.handleChange('contact')}
                                                />
                                            </Col>

                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>E-mail</Lbl>
                                                <LabelInput
                                                    placeholder={"E-mail"}
                                                    value={email}
                                                    onChange={this.handleChange('email')}
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
