import React, { Component } from 'react';
import '../../distributor-managment/distributor-master/styles.css';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import LabelInput from "../../../components/input/txtlbl/index";
import { MDBDataTable } from 'mdbreact';
import { Button as SementicBtn, Form, Icon, Input } from 'semantic-ui-react';
import { Spin, Tooltip, Icon as AntdIcon } from "antd";
import DrpDwn from "../../../components/dropdown/index";
import Lbl from "../../../components/label/index";
import Update from '../../salesman-managment/update/index';
import * as DropDownConst from '../../../store/Reducer/DropDownConst'

class App extends Component {
    state = {
        tblcolumns: [

            {
                label: 'Salesmen ID',
                field: 'salesmanid',
                sort: 'asc'
            },
            {
                label: 'Salesman Name',
                field: 'salesmanname',
                sort: 'asc'
            },
            {
                label: 'Distributor ID',
                field: 'distributorid',
                sort: 'asc'
            },
            {
                label: 'Contact',
                field: 'contact',
                sort: 'asc'


            },
            {
                label: 'Email',
                field: 'email',
                sort: 'asc'


            },
            {
                label: 'Status',
                field: 'status',
                sort: 'asc'


            },
            {
                label: 'Action',
                field: 'action',
                sort: 'asc'
            }
        ],
        tbldata: [
            {
                salesmanid: "S001",
                salesmanname: "Alistor",
                distributorid: "D001",
                contact: "0771234567",
                email: "test@gmail.com",
                status: "Active"
            },
            {
                salesmanid: "S002",
                salesmanname: "Test",
                distributorid: "D002",
                contact: "0771234567",
                email: "test@gmail.com",
                status: "Active"
            },
            {
                salesmanid: "S001",
                salesmanname: "Test02",
                distributorid: "D001",
                contact: "0771234567",
                email: "test@gmail.com",
                status: "Active"
            },

        ],
        isUpdate: false,
        memberdata: null,
        salesmanid: "",
        salesmanname: "",
        contact: "",
        email: "",
        distributor_list: [],
        disid: "",
        disname: "",
        status: "Active"
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

    clearFeilds = () => {
        this.setState({
            salesmanid: "",
            salesmanname: "",
            contact: "",
            email: "",
            disid: "",
            disname: "",
            status: "Active"
        })
    }



    render() {
        const rows = [];
        if (this.state.tbldata.length !== 0) {
            this.state.tbldata.map((row, index) => {
                rows.push(
                    {
                        salesmanid: row.salesmanid,
                        salesmanname: row.salesmanname,
                        distributorid: row.distributorid,
                        contact: row.contact,
                        email: row.email,
                        status: row.status,
                        action:
                            <div>
                                <SementicBtn circular icon='edit'
                                    onClick={() => this.updateMember(row)}
                                />
                                <SementicBtn className="cus-btn" circular icon='trash alternate'
                                //  onClick={() => this.deleteReception(row.userId,row.userName)}
                                />
                            </div>
                    }
                )
            });
        }
        let columns = this.state.tblcolumns;
        let table_data = { columns, rows };

        return (
            <div>
                {
                    this.state.isUpdate ?
                        <Update data={this.state.memberdata} refreshData={this.clearFeilds} closeModal={() => this.setState({ isUpdate: false })} /> : null
                }

                <Card>
                    <CardHeader>Salesman Managment</CardHeader>
                    <CardBody>
                        <Row>
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
                                                    options={this.state.distributor_list}
                                                    value={this.state.disid}
                                                    onChange={this.dropDownChange('disid')}
                                                />

                                                <DrpDwn
                                                    multiple
                                                    placeholder={"Distributor Name"}
                                                    options={DropDownConst.status}
                                                    value={this.state.disname}
                                                    onChange={this.dropDownChange('disname')}
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
                                                    >Add Salesman</Button>

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

                <Card>
                    <CardHeader>All Salesman Details</CardHeader>
                    <CardBody>
                        {/* <Spin
                            // spinning={this.state.isLoadReception}
                            delay={10}
                        // indicator={<AntdIcon type="loading" style={{ fontSize: 24 }} spin={"true"} />}
                        > */}
                        <MDBDataTable
                            searching={true}
                            displayEntries={false}
                            entries={5}
                            responsive
                            responsiveSm
                            responsiveMd
                            responsiveLg
                            responsiveXl
                            bordered
                            hover
                            data={table_data}
                        />
                        {/* </Spin> */}
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default App;
