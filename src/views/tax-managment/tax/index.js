import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Row} from "reactstrap";
import {Button as SementicBtn, Form} from "semantic-ui-react";
import Lbl from "../../../components/label";
import LabelInput from "../../../components/input/txtlbl";
import DrpDwn from "../../../components/dropdown";
import * as DropDownConst from "../../../store/Reducer/DropDownConst";
import {MDBDataTable} from "mdbreact";
import "../tax/styles.css";
import Update from "../tax/update/index";


const tblcolumns= [
  {
    label: 'Tax Id',
    field: 'id',
    sort: 'asc'
  },
  {
    label: 'Tax Description',
    field: 'description',
    sort: 'asc'
  },
  {
    label: 'Tax Value',
    field: 'value',
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
];

const tbldata= [
  {
    id: "T001",
    description: "test======1, test======1",
    value: '10000',
    status: 'Áctive'
  },
  {
    id: "T002",
    description: "test======1, test======1",
    value: '10000',
    status: 'Áctive'
  },
  {
    id: "T003",
    description: "test======1, test======1",
    value: '10000',
    status: 'Áctive'
  },

];

let table_data = [];


class Index extends Component {

  state = {
    id: "",
    description: "",
    value: "",
    status: "",
    isUpdate: false,
    taxData: "",
  };

  constructor(props){
    super(props);
    this.loadTaxTable();
  }

  // Load Tax Table
  loadTaxTable(){
    const rows = [];
    if (tbldata.length !== 0) {
      tbldata.map((row, index) => {
        rows.push(
          {
            id: row.id,
            description: row.description,
            value: row.value,
            status: row.status,
            action:
              <div>
                <SementicBtn circular icon='edit'
                             onClick={() => {this.updateTax(row)}}
                />
                <SementicBtn className="cus-btn" circular icon='trash alternate'
                  //  onClick={() => this.deleteReception(row.userId,row.userName)}
                />
              </div>
          }
        )
      });
    }
    let columns = tblcolumns;
    table_data = { columns, rows };
  }


  //View Update Tax
  updateTax = (value) => {
    this.setState({
      isUpdate: true,
      taxData: value
    });
  };

  // On Change
  onChangeState = (name, length) => event => {
    this.setState({
      [name]: event.target.value
    });

  };

  // On Dropdown
  dropDownChange = name => (event, { value }) => {
    this.setState({
      [name]: value
    });
  };

  // Add Tax
  addTax = () =>{

    const {  id, description, value, status } = this.state;
    const obj = {
      "id": id,
      "description": description,
      "value": value,
      "status": status.toString(),
    };

    console.log(obj);

    this.clearInput();
  };

  // Clear Input
  clearInput = () =>{
    this.setState({
      id: "",
      description: "",
      value: "",
      status: "",
    })
  };
  render() {
    return (
      <div>

        {
          this.state.isUpdate ?
            <Update data={this.state.taxData} closeModal={() => this.setState({ isUpdate: false })} />
            :
            null
        }

        <Card>
          <CardHeader>Tax Managment</CardHeader>
          <CardBody>
            <Row>
              <Col xl={12}>
                <Row>
                  <Col xl={12}>
                    <Form>
                      <Row  className="ml-3 mr-3">
                        <Col xl={4} lg={4} md={4} sm={4} className="none-padding">
                          <Lbl required>Tax Id</Lbl>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={8} className="none-padding">
                          <LabelInput
                            placeholder={"Tax Id"}
                              value={this.state.id}
                              onChange={this.onChangeState('id')}
                          />
                        </Col>
                      </Row>

                      <Row  className="ml-3 mr-3 mt-3">
                        <Col xl={4} lg={4} md={4} sm={4} className="none-padding">
                          <Lbl required>Tax Description</Lbl>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={8} className="none-padding">
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="4"
                            name="description"
                            onChange={this.onChangeState('description')}
                            value={this.state.description}
                          />
                        </Col>
                      </Row>

                      <Row  className="ml-3 mr-3 mt-3">
                        <Col xl={4} lg={4} md={4} sm={4} className="none-padding">
                          <Lbl required>Tax Value</Lbl>
                        </Col>
                        <Col xxl={8} lg={8} md={8} sm={8} className="none-padding">
                          <LabelInput
                            placeholder={"Tax Value"}
                              value={this.state.value}
                              onChange={this.onChangeState('value')}
                          />
                        </Col>
                      </Row>

                      <Row  className="ml-3 mr-3 mt-3">
                        <Col xl={4} lg={4} md={4} sm={4} className="none-padding">
                          <Lbl required>Status</Lbl>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={8} className="none-padding">
                          <DrpDwn
                            multiple
                            placeholder={"Status"}
                            options={DropDownConst.salesmanstatus}
                            value={this.state.status}
                            onChange={this.dropDownChange('status')}
                          />
                        </Col>
                      </Row>

                      <Row>
                        <Col className="marginTop" xs={12} sm={12} md={12} lg={12} xl={12}>
                          <center>
                            <Button
                              className="addBtn mt-4"
                              color="primary"
                              onClick={e => this.addTax()}
                            >Add Tax</Button>
                          </center>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>All Tax</CardHeader>
          <CardBody>
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
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Index;
