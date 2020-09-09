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
        typeid: "",
        typename: "",
        description: "",
        distributor_list: [],
        status: "Active",

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
        } 
    };

    handleChange = (name, length) => event => {
        let value = event.target.value;

        if (name === "typename") {
            this.setState({
                [name]: value
            })

        } else if (name === "description") {
            this.setState({
                [name]: value
            })

        }
    };

    sendToBackEnd = () => {

        const { typename, description, status } = this.state;
        const obj = {
            "typename": typename,
            "description": description,
            "status": status.toString()
        }

        console.log(obj);
    }

    clearFeilds = () => {
        this.setState({
            typename: "",
            description: "",
            status: "Active"
        })
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
               
                <Card>
                    <CardHeader>Warehouse Type Create</CardHeader>
                    <CardBody>
                        <Row>
                            <Col xs="12" lg={"12"} md={"12"} className={"padd_grap"}>
                                <Row>
                                    <Col lg={6}>
                                        <Form>
                                            {/* <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Warehouse Type ID</Lbl>
                                                <LabelInput
                                                    placeholder={"Warehouse Type ID"}
                                                //   value={this.state.typeid}
                                                //   onChange={this.handleChange('typeid')}
                                                />
                                            </Col> */}

                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Type Name</Lbl>
                                                <LabelInput
                                                    placeholder={"Type Name"}
                                                    value={this.state.typename}
                                                    onChange={this.handleChange('typename')}
                                                />
                                            </Col>

                                            <Col className={"none-padding"} lg={12}>
                                                <Lbl required>Type Description</Lbl>
                                                <textarea
                                                    placeholder={"Type Description"}
                                                    value={this.state.description}
                                                    onChange={this.handleChange('description')}
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
                                                    >Create Warehouse Type</Button>

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
