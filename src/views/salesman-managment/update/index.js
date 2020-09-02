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
        salesmanid: "",
        salesmanname: "",
        contact: "",
        email: "",
        disid: "",
        disname: "",
        status: "Active"
    }

    fillData = () => {
        const { data } = this.props;
        if (data !== null) {

            this.setState({
                salesmanid: data.salesmanid,
                salesmanname: data.salesmanname,
                distributorid: data.distributorid,
                contact: data.contact,
                email: data.email,
                status: data.status,
            })
        }
    };

    dropDownChange = name => (event, { value }) => {
        if (name === "status") {
            this.setState({
                [name]: value
            })
        } else if (name === "disid") {
            this.setState({
                [name]: value
            })
        } else if (name === "disname") {
            this.setState({
                [name]: value
            })
        }

    };

    handleChange = (name, length) => event => {
        let value = event.target.value;

        if (name === "salesmanname") {
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

        }
    };

    sendToBackEnd = () => {

        const { salesmanname, contact, email, disid, disname, status } = this.state;
        const obj = {
            "salesmanname": salesmanname,
            "contact": contact,
            "email": email,
            "disid": disid,
            "disname": disname.toString(),
            "status": status.toString()
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
                    <MDBModalHeader className={"title"} toggle={this.props.closeModal}>Modify Salesman</MDBModalHeader>
                    <MDBModalBody>
                        <Row style={{ padding: '10px' }}>
                            <Col xs="12" lg={"12"} md={"12"} className={"padd_grap"}>
                                <Row>
                                    <Col lg={6}>
                                        <Form>
                                            {/* <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Salesman ID</Lbl>
                                                <LabelInput
                                                    placeholder={"Salesman ID"}
                                                //   value={this.state.name}
                                                //   onChange={this.handleChange('name')}
                                                />
                                            </Col> */}

                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Salesman Name</Lbl>
                                                <LabelInput
                                                    placeholder={"Salesman Name"}
                                                    value={this.state.salesmanname}
                                                    onChange={this.handleChange('salesmanname')}
                                                />
                                            </Col>

                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Contact</Lbl>
                                                <LabelInput
                                                    placeholder={"Contact"}
                                                    value={this.state.contact}
                                                    onChange={this.handleChange('contact')}
                                                />
                                            </Col>

                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>E-mail</Lbl>
                                                <LabelInput
                                                    placeholder={"E-mail"}
                                                    value={this.state.email}
                                                    onChange={this.handleChange('email')}
                                                />
                                            </Col>

                                        </Form>
                                    </Col>

                                    <Col lg={6}>
                                        <Form>
                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Distributor ID</Lbl>
                                                <DrpDwn
                                                    multiple
                                                    placeholder={"Distributor ID"}
                                                    // options={this.state.distributor_list}
                                                    value={this.state.disid}
                                                    // onChange={false}
                                                />

                                                <DrpDwn
                                                    multiple
                                                    placeholder={"Distributor Name"}
                                                    // options={DropDownConst.status}
                                                    value={this.state.disname}
                                                    // onChange={false}
                                                />
                                            </Col>

                                            {/* <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Status</Lbl>
                                                <DrpDwn
                                                    multiple
                                                    placeholder={"Status"}
                                                    options={DropDownConst.salesmanstatus}
                                                    value={this.state.status}
                                                    onChange={this.dropDownChange('status')}
                                                />
                                            </Col> */}
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
