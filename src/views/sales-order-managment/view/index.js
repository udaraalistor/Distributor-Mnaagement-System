import React, { Component } from 'react';
import '../../distributor-managment/distributor-master/styles.css';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import LabelInput from "../../../components/input/txtlbl/index";
import { MDBDataTable } from 'mdbreact';
import { Button as SementicBtn, Form, Icon, Input } from 'semantic-ui-react';
import { Spin, Tooltip, Icon as AntdIcon } from "antd";
import DrpDwn from "../../../components/dropdown/index";
import Lbl from "../../../components/label/index";
import Update from '../../sales-order-managment/update/index';
import * as DropDownConst from '../../../store/Reducer/DropDownConst'
import cookie from 'react-cookies';

class App extends Component {
    state = {
        tblcolumns: [

            {
                label: 'Sales Order ID',
                field: 'salesorderid',
                sort: 'asc'
            },
            {
                label: 'Sales Order Date',
                field: 'salesorderdate',
                sort: 'asc'
            },
            {
                label: 'Delivery Date',
                field: 'deliverydate',
                sort: 'asc'
            },
            {
                label: 'Value Excluded',
                field: 'valueexcluded',
                sort: 'asc'


            },
            {
                label: 'Value Included',
                field: 'valueincluded',
                sort: 'asc'


            },
            {
                label: 'Remarks',
                field: 'remarks',
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
        tbldata: [],
        isUpdate: false,
        memberdata: null

    }

    updateMember = (obj) => {

        this.setState({
            isUpdate: true,
            memberdata: obj
        })
    };


    dropDownChange = name => (event, { value }) => {


    };

    handleChange = (name, length) => event => {

    };

    sendToBackEnd = () => {

    }



    componentDidMount() {

    }



    render() {
        const rows = [];
        if (this.state.tbldata.length !== 0) {
            this.state.tbldata.map((row, index) => {
                rows.push(
                    {
                        salesorderid: row.salesorderid,
                        salesorderdate: row.salesorderdate,
                        deliverydate: row.deliverydate,
                        valueexcluded: row.valueexcluded,
                        valueincluded: row.valueincluded,
                        remarks: row.remarks,
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
                        <Update data={this.state.memberdata}  closeModal={() => this.setState({ isUpdate: false })} /> : null
                }


                <Card>
                    <CardHeader>Sales Order Details</CardHeader>
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
