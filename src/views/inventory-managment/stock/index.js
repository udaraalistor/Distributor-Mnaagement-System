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
import cookie from 'react-cookies';

class App extends Component {
    state = {
        tblcolumns: [

            {
                label: 'Warehouse ID',
                field: 'warehouseid',
                sort: 'asc'
            },
            {
                label: 'Warehouse Name',
                field: 'warehousename',
                sort: 'asc'
            },
            {
                label: 'Product ID',
                field: 'productid',
                sort: 'asc'
            },
            {
                label: 'Product Name',
                field: 'productname',
                sort: 'asc'


            },
            {
                label: 'Tax Value',
                field: 'taxvalue',
                sort: 'asc'


            },
            {
                label: 'Available QTY',
                field: 'availableqty',
                sort: 'asc'


            },
            {
                label: 'Primary Price',
                field: 'primaryprice',
                sort: 'asc'


            }
        ],
        tbldata: [],

    }

    updateMember = (obj) => {
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
                        warehouseid: row.warehouseid,
                        warehousename: row.warehousename,
                        productid: row.productid,
                        productname: row.productname,
                        taxvalue: row.taxvalue,
                        availableqty: row.availableqty,
                        primaryprice: row.primaryprice
                    }
                )
            });
        }
        let columns = this.state.tblcolumns;
        let table_data = { columns, rows };

        return (
            <div>

                <Card>
                    <CardHeader>Stock Details</CardHeader>
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
