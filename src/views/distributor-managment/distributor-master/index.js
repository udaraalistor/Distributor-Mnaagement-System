import React, { Component } from 'react';
import './styles.css';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import LabelInput from "../../../components/input/txtlbl/index";
import { MDBDataTable } from 'mdbreact';
import { Button as SementicBtn, Form, Icon, Input } from 'semantic-ui-react';
import { Spin, Tooltip, Icon as AntdIcon } from "antd";
import DrpDwn from "../../../components/dropdown/index";
import Lbl from "../../../components/label/index";
import Update from '../distributor-master/update/index';
import * as DropDownConst from '../../../store/Reducer/DropDownConst'
import * as Validator from '../../../util/Validator';
import axios from 'axios';

class App extends Component {
    state = {
        tblcolumns: [

            {
                label: 'Distributor Code',
                field: 'code',
                sort: 'asc'
            },
            {
                label: 'Distributor Name',
                field: 'name',
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
                label: 'Action',
                field: 'action',
                sort: 'asc'
            }
        ],
        // tbldata: [
        //     {
        //         code: "C001",
        //         name: "Test",
        //         contact: "0771234567",
        //         email: "test@gmail.com",
        //     },
        //     {
        //         code: "C002",
        //         name: "Test",
        //         contact: "0771234567",
        //         email: "test@gmail.com",
        //     },
        //     {
        //         code: "C002",
        //         name: "Test",
        //         contact: "0771234567",
        //         email: "test@gmail.com",
        //     },

        // ],
        isUpdate: false,
        memberdata: null,
        id: "",
        name: "",
        contact: "",
        email: "",
        vatnumber: "",
        vatstatus: "Yes",
        nameerror: "",
        contacterror: "",
        emailerror: "",
        vatnumbererror: "",
        vatstatuserror: "",
        data: [],
        tbldata: []
    }

    updateMember = (obj) => {

        this.setState({
            isUpdate: true,
            memberdata: obj
        })
    };

    sendToBackEnd = async () => {

        const { name, contact, email, vatnumber, vatstatus } = this.state;
        const obj = {
            "name": name,
            "contact": contact,
            "email": email,
            "vatnumber": vatnumber,
            "vatstatus": vatstatus.toString()
        }

        console.log(obj);

        await axios.post(
            "http://localhost:8099/api/v1/distributor", obj
        )
            .then(async response => {
                this.getAllMembers();
                if (response.data) {
                    this.getAllMembers();
                    let data = response.data;
                    this.setState({
                        data: data
                    })

                }
            })

            .catch(async error => {
                console.log(error)
            })

            .finally(fin => {

            });
    }

    getAllMembers = async () => {


        await axios.get(
            "http://localhost:8099/api/v1/distributor"
        )
            .then(async response => {
                
                if (response.data) {
                    
                    let data = response.data;
                    this.setState({
                        tbldata: data
                    })

                }
            })

            .catch(async error => {
                console.log(error)
            })

            .finally(fin => {

            });

    }

    componentDidMount() {
        this.getAllMembers();
    }

    clearFeilds = () => {
        this.setState({
            id: "",
            name: "",
            contact: "",
            email: "",
            vatnumber: "",
            vatstatus: "Yes"
        })
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

    dropDownChange = name => (event, { value }) => {
        this.setState({
            [name]: value
        })
    };

    testValidator = () => {
        const { name, contact, email, vatnumber, vatstatus } = this.state;
        const validationUsername = Validator.textFieldValidator(name, name.length);
        const validationcontact = Validator.textFieldValidator(contact, contact.length);
        const validationemail = Validator.textFieldValidator(email, email.length);
        const validationvatnumber = Validator.textFieldValidator(vatnumber, vatnumber.length);
        // const validationvatstatus = Validator.textFieldValidator(vatstatus, vatstatus.length);


        if (validationUsername === false) {
            this.setState({

                nameerror: "Name can't be empty",

            })

            return false
        } else {
            this.setState({
                nameerror: "",


            })

            if (validationcontact === false) {
                this.setState({
                    contacterror: "Contact can't be empty"

                })

                return false

            } else {

                this.setState({
                    contacterror: ""

                })

                if (validationemail === false) {
                    this.setState({
                        emailerror: "Email can't be empty"

                    })

                    return false

                } else {
                    this.setState({
                        emailerror: ""

                    })

                    if (validationvatnumber === false) {
                        this.setState({
                            vatnumbererror: "Vat Number can't be empty"

                        })

                        return false

                    } else {
                        this.setState({
                            vatnumbererror: ""

                        })

                        // if (validationvatstatus === false) {
                        //     this.setState({
                        //         vatstatuserror: "Vat Status can't be empty"

                        //     })

                        //     return false

                        // } else {
                        //     this.setState({
                        //         vatstatuserror: ""

                        //     })

                        // }

                    }

                }

            }

        }

        return true
    }


    checkValidation = () => {
        let formvalidation = this.testValidator();


        if (formvalidation) {
            this.sendToBackEnd();
        }
    }


    render() {
        const { id, name, contact, email, vatnumber, vatstatus, nameerror, contacterror, emailerror, vatnumbererror, vatstatuserror } = this.state;
        const rows = [];
        if (this.state.tbldata.length !== 0) {
            this.state.tbldata.map((row, index) => {
                rows.push(
                    {
                        code: row.id,
                        name: row.name,
                        contact: row.contact,
                        email: row.email,
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
                    <CardHeader>Distributor Managment</CardHeader>
                    <CardBody>
                        <Row>
                            <Col xs="12" lg={"12"} md={"12"} className={"padd_grap"}>
                                <Row>
                                    <Col lg={6}>
                                        <Form>
                                            {/* <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Distributor ID</Lbl>
                                                <LabelInput
                                                    placeholder={"Distributor ID"}
                                                    value={id}
                                                //   onChange={this.handleChange('name')
                                                // }
                                                />
                                            </Col> */}

                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Name</Lbl>
                                                <LabelInput
                                                    placeholder={"Name"}
                                                    value={name}
                                                    onChange={this.handleChange('name')}
                                                />
                                            </Col>

                                            {
                                                <h4 style={{ color: 'red' }}>{nameerror}</h4>
                                            }


                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Contact</Lbl>
                                                <LabelInput
                                                    placeholder={"Contact"}
                                                    value={contact}
                                                    onChange={this.handleChange('contact')}
                                                />
                                            </Col>
                                            {
                                                <h4 style={{ color: 'red' }}>{contacterror}</h4>
                                            }

                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>E-mail</Lbl>
                                                <LabelInput
                                                    placeholder={"E-mail"}
                                                    value={email}
                                                    onChange={this.handleChange('email')}
                                                />
                                            </Col>
                                            {
                                                <h4 style={{ color: 'red' }}>{emailerror}</h4>
                                            }

                                        </Form>
                                    </Col>

                                    <Col lg={6}>
                                        <Form>
                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Vat Number</Lbl>
                                                <Input id={"password-field"} type={"Vat Number"}
                                                    onChange={this.handleChange('vatnumber')}
                                                    value={vatnumber}
                                                    style={{ width: '100%' }}
                                                    placeholder='Vat Number' />
                                            </Col>

                                            {
                                                <h4 style={{ color: 'red' }}>{vatnumbererror}</h4>
                                            }

                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Vat Status</Lbl>
                                                <DrpDwn
                                                    multiple
                                                    placeholder={"Vat Status"}
                                                    options={DropDownConst.status}
                                                    value={this.state.vatstatus}
                                                    onChange={this.dropDownChange('vatstatus')}
                                                />
                                            </Col>

                                            {
                                                <h4 style={{ color: 'red' }}>{vatstatuserror}</h4>
                                            }
                                        </Form>

                                        <Row>
                                            <Col className="marginTop" xs={12} sm={12} md={12} lg={12}>
                                                <center>
                                                    <Button
                                                        className="addBtn"
                                                        color="primary"
                                                        onClick={this.checkValidation}
                                                    >Add Member</Button>

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
                    <CardHeader>All Members</CardHeader>
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
