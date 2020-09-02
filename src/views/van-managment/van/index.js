import React, { Component } from 'react';
import '../../distributor-managment/distributor-master/styles.css';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import LabelInput from "../../../components/input/txtlbl/index";
import { MDBDataTable } from 'mdbreact';
import { Button as SementicBtn, Form, Icon, Input } from 'semantic-ui-react';
import { Spin, Tooltip, Icon as AntdIcon } from "antd";
import DrpDwn from "../../../components/dropdown/index";
import Lbl from "../../../components/label/index";
import Update from '../van/update/index';
import * as DropDownConst from '../../../store/Reducer/DropDownConst'

class App extends Component {
    state = {
        tblcolumns: [

            {
                label: 'Van Code',
                field: 'vancode',
                sort: 'asc'
            },
            {
                label: 'van Name',
                field: 'vanname',
                sort: 'asc'
            },
            {
                label: 'Distributor ID',
                field: 'disid',
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
                vancode: "V001",
                vanname: "Toyota",
                disid: "D005",
                status: "Active",
            },
            {
                vancode: "V002",
                vanname: "Toyota",
                disid: "D006",
                status: "Active",
            },
            {
                vancode: "V003",
                vanname: "Toyota",
                disid: "D002",
                status: "Active",
            },

        ],
        isUpdate: false,
        memberdata: null,
        vancode: "",
        vanname: "",
        status: "Active",
        disid: ""
    }

    updateMember = (obj) => {

        this.setState({
            isUpdate: true,
            memberdata: obj
        })
    };

    sendToBackEnd = () => {

        const { vanname, vancode, disid, status } = this.state;
        const obj = {
            "vanname": vanname,
            "vancode": vancode,
            "disid": disid,
            "status": status.toString(),
        }

        console.log(obj);
    }

    getAllMembers() {

    }

    componentDidMount() {
        this.getAllMembers();
    }

    clearFeilds = () => {
        this.setState({
            vancode: "",
            vanname: "",
            status: "Active",
            disid: ""
        })
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
        const { id, name, contact, email, vatnumber, vatstatus } = this.state;
        const rows = [];
        if (this.state.tbldata.length !== 0) {
            this.state.tbldata.map((row, index) => {
                rows.push(
                    {
                        vancode: row.vancode,
                        vanname: row.vanname,
                        disid: row.disid,
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
                    <CardHeader>Van Managment</CardHeader>
                    <CardBody>
                        <Row>
                            <Col xs="12" lg={"12"} md={"12"} className={"padd_grap"}>
                                <Row>
                                    <Col lg={6}>
                                        <Form>
                                            {/* <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Van Code</Lbl>
                                                <LabelInput
                                                    placeholder={"Van Code"}
                                                    value={id}
                                                //   onChange={this.handleChange('vancode')
                                                // }
                                                />
                                            </Col> */}

                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Van Name</Lbl>
                                                <LabelInput
                                                    placeholder={"Van Name"}
                                                    value={this.state.vanname}
                                                    onChange={this.handleChange('vanname')}
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

                                        <Row>
                                            <Col className="marginTop" xs={12} sm={12} md={12} lg={12}>
                                                <center>
                                                    <Button
                                                        className="addBtn"
                                                        color="primary"
                                                        onClick={this.sendToBackEnd}
                                                    >Add Van</Button>

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
                    <CardHeader>All Vans</CardHeader>
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
