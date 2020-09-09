import React, { Component } from 'react';
import '../../distributor-managment/distributor-master/styles.css';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import LabelInput from "../../../components/input/txtlbl/index";
import { MDBDataTable } from 'mdbreact';
import { Button as SementicBtn, Form, Icon, Input } from 'semantic-ui-react';
import { Spin, Tooltip, Icon as AntdIcon } from "antd";
import DrpDwn from "../../../components/dropdown/index";
import Lbl from "../../../components/label/index";
import * as DropDownConst from '../../../store/Reducer/DropDownConst'
import cookie from 'react-cookies';

class App extends Component {
    state = {
        
        memberdata: null,
        warehouseid: "",
        warehousename: "",
        description: "",
        address: "",
        distributor_list: [],
        status: "Active",
        type: "Active",

    }

    updateMember = (obj) => {

        this.setState({
            isUpdate: true,
            memberdata: obj
        })
    };


    dropDownChange = name => (event, { value }) => {
        if (name === "status") {
            this.setState({
                [name]: value
            })
        } else if (name === "type") {
            this.setState({
                [name]: value
            })
        }
    };

    handleChange = (name, length) => event => {
        let value = event.target.value;

        if (name === "warehousename") {
            this.setState({
                [name]: value
            })

        } else if (name === "description") {
            this.setState({
                [name]: value
            })

        } else if (name === "address") {
            this.setState({
                [name]: value
            })

        }
    };

    sendToBackEnd = () => {

        const { warehouseid, warehousename, address, description, type, status } = this.state;
        const obj = {
            "warehousename": warehousename,
            "address": address,
            "description": description,
            "type": type.toString(),
            "status": status.toString()
        }

        console.log(obj);
    }

    clearFeilds = () => {
        this.setState({
            warehouseid: "",
            warehousename: "",
            address: "",
            description: "",
            type: "Active",
            status: "Active"
        })
    }

    componentDidMount() {


    }



    render() {
        return (
            <div>
               
                <Card>
                    <CardHeader>Warehouse Create</CardHeader>
                    <CardBody>
                        <Row>
                            <Col xs="12" lg={"12"} md={"12"} className={"padd_grap"}>
                                <Row>
                                    <Col lg={6}>
                                        <Form>
                                            {/* <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Warehouse ID</Lbl>
                                                <LabelInput
                                                    placeholder={"Warehouse ID"}
                                                //   value={this.state.warehouseid}
                                                //   onChange={this.handleChange('warehouseid')}
                                                />
                                            </Col> */}

                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Warehouse Name</Lbl>
                                                <LabelInput
                                                    placeholder={"Warehouse Name"}
                                                    value={this.state.warehousename}
                                                    onChange={this.handleChange('warehousename')}
                                                />
                                            </Col>

                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Description</Lbl>
                                                <textarea
                                                    placeholder={"Description"}
                                                    value={this.state.description}
                                                    onChange={this.handleChange('description')}
                                                />
                                            </Col>

                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Address</Lbl>
                                                <textarea
                                                    placeholder={"Address"}
                                                    value={this.state.address}
                                                    onChange={this.handleChange('address')}
                                                />
                                            </Col>

                                        </Form>
                                    </Col>

                                    <Col lg={6}>
                                        <Form>
                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Warehouse Type</Lbl>
                                                <DrpDwn
                                                    multiple
                                                    placeholder={"Warehouse Type"}
                                                    options={DropDownConst.salesmanstatus}
                                                    value={this.state.type}
                                                    onChange={this.dropDownChange('type')}
                                                />
                                            </Col>

                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Status</Lbl>
                                                <DrpDwn
                                                    multiple
                                                    placeholder={"Status"}
                                                    options={DropDownConst.salesmanstatus}
                                                    value={this.state.status}
                                                    onChange={this.dropDownChange('status')}
                                                />
                                            </Col>
                                        </Form>

                                        <Row>
                                            <Col className="marginTop" xs={12} sm={12} md={12} lg={12}>
                                                <center>
                                                    <Button
                                                        className="addBtn"
                                                        color="primary"
                                                        onClick={this.sendToBackEnd}
                                                    >Create Warehouse</Button>

                                                    <Tooltip placement="topLeft" title="Clear input fields">
                                                        <SementicBtn circular icon='refresh'
                                                            onClick={this.clearFeilds}
                                                        />
                                                    </Tooltip>

                                                </center>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default App;
