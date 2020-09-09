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
        salesorderid: "",
        valueexcluded: "",
        valueincluded: "",
        remarks: "",
        status: "Active"
    }

    fillData = () => {
        const { data } = this.props;
        if (data !== null) {

            this.setState({
                salesorderid: data.salesorderid,
                valueexcluded: data.valueexcluded,
                valueincluded: data.valueincluded,
                remarks: data.remarks,
                status: data.status,
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


    sendToBackEnd = () => {


    }

    componentDidMount() {
        this.fillData();
    }

    handleChange = (name, length) => event => {
        let value = event.target.value;

        if (name === "salesorderid") {
            this.setState({
                [name]: value
            })

        } else if (name === "valueexcluded") {
            this.setState({
                [name]: value
            })

        } else if (name === "valueincluded") {
            this.setState({
                [name]: value
            })

        }
    };


    render() {
        const { salesorderid, valueexcluded, valueincluded, status } = this.state;


        return (
            <div>
                <MDBModal isOpen={true} toggle={this.toggle} size="xl">
                    <MDBModalHeader className={"title"} toggle={this.props.closeModal}>Modify Sales Order</MDBModalHeader>
                    <MDBModalBody>
                        <Row style={{ padding: '10px' }}>
                            <Col xs="12" lg={"12"} md={"12"} className={"padd_grap"}>
                                <Row>
                                    <Col lg={6}>
                                        <Form>
                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Sales Order ID</Lbl>
                                                <LabelInput
                                                    placeholder={"Sales Order ID"}
                                                    value={salesorderid}
                                                  onChange={this.handleChange('salesorderid')}
                                                />
                                            </Col>



                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Value Excluded</Lbl>
                                                <LabelInput
                                                    placeholder={"Value Excluded"}
                                                    value={valueexcluded}
                                                    onChange={this.handleChange('valueexcluded')}
                                                />
                                            </Col>

                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Value Included</Lbl>
                                                <LabelInput
                                                    placeholder={"Value Included"}
                                                    value={valueincluded}
                                                    onChange={this.handleChange('valueincluded')}
                                                />
                                            </Col>

                                        </Form>
                                    </Col>

                                    <Col lg={6}>
                                        <Form>
                                          

                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Status</Lbl>
                                                <DrpDwn
                                                    multiple
                                                    placeholder={"Status"}
                                                    // options={DropDownConst.salesmanstatus}
                                                    value={status}
                                                    onChange={this.dropDownChange('status')}
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
