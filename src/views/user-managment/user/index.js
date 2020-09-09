import React, { Component } from 'react';
import '../../distributor-managment/distributor-master/styles.css';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import LabelInput from "../../../components/input/txtlbl/index";
import { MDBDataTable } from 'mdbreact';
import { Button as SementicBtn, Form, Icon, Input } from 'semantic-ui-react';
import { Spin, Tooltip, Icon as AntdIcon } from "antd";
import DrpDwn from "../../../components/dropdown/index";
import Lbl from "../../../components/label/index";
import Update from '../update/index';
import cookie from 'react-cookies';

class App extends Component {

    constructor(props) {
        super(props)


    }

    state = {
        tblcolumns: [

            {
                label: 'User ID',
                field: 'userid',
                sort: 'asc'
            },
            {
                label: 'Distributor ID',
                field: 'disid',
                sort: 'asc'
            },
            {
                label: 'User Name',
                field: 'username',
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
                userid: "U001",
                disid: "D002",
                username: "Alistor",
            },
            {
                userid: "U002",
                disid: "D005",
                username: "Alistor",
            },
            {
                userid: "U003",
                disid: "D009",
                username: "Alistor",
            },

        ],
        isUpdate: false,
        memberdata: null,
        disid: "",
        userid: "",
        username: "",
        password: "",
        confirmpassword: "",
        

    }

    updateMember = (obj) => {

        this.setState({
            isUpdate: true,
            memberdata: obj
        })
    };

    handleChange = (name, length) => event => {
        let value = event.target.value;

        if (name === "disid") {
            this.setState({
                [name]: value
            })

        }
        // else if (name === "userid") {
        //     this.setState({
        //         [name]: value
        //     })

        // }
        else if (name === "username") {
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

    sendToBackEnd = () => {

        const { disid, username, password } = this.state;
        const obj = {
            "disid": disid,
            // "userid": userid,
            "username": username,
            "password": password,
        }

        console.log(obj);
    }

    clearFeilds = () => {
        this.setState({
            disid: "",
            userid: "",
            username: "",
            password: "",
            confirmpassword: ""
        })
    }

    



    render() {
        const rows = [];
        if (this.state.tbldata.length !== 0) {
            this.state.tbldata.map((row, index) => {
                rows.push(
                    {
                        userid: row.userid,
                        disid: row.disid,
                        username: row.username,
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
                            <CardHeader>User Managment</CardHeader>
                            <CardBody>
                                <Row>
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
                                                    {/* 
                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>User ID</Lbl>
                                                <LabelInput
                                                    placeholder={"User ID"}
                                                    value={this.state.userid}
                                                    onChange={this.handleChange('userid')
                                                    }
                                                />
                                            </Col> */}

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

                                                <Row>
                                                    <Col className="marginTop" xs={12} sm={12} md={12} lg={12}>
                                                        <center>
                                                            <Button
                                                                className="addBtn"
                                                                color="primary"
                                                                onClick={this.sendToBackEnd}
                                                            >Add User</Button>

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
                    <CardHeader>All Users</CardHeader>
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
