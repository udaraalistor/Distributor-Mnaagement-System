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
        vancode: "",
        vanname: "",
        status: "",
        disid: ""
    }

    fillData = () => {
        const { data } = this.props;
        if (data !== null) {

            this.setState({
                vancode: data.vancode,
                vanname: data.vanname,
                disid: data.disid
            })
        }
    };



    sendToBackEnd = () => {

        const { disid, vanname, vancode } = this.state;
        const obj = {
            "vancode": vancode,
            "vanname": vanname,
            "disid": disid,
        }

        console.log(obj);
    }

    componentDidMount() {
        this.fillData();
    }

    handleChange = (name, length) => event => {
        let value = event.target.value;

        if (name === "vanname") {
            this.setState({
                [name]: value
            })

        } else if (name === "disid") {
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
                                                <Lbl required>Van Code</Lbl>
                                                <LabelInput
                                                    placeholder={"Van Code"}
                                                    value={this.state.vancode}
                                                    // onChange={false}
                                                />
                                            </Col>

                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Van Name</Lbl>
                                                <LabelInput
                                                    placeholder={"Van Name"}
                                                    value={this.state.vanname}
                                                    onChange={this.handleChange('vanname')}
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
                                    </Col>

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
