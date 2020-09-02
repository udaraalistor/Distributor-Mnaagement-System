import React, {Component} from 'react';
import './styles.css';
import {Button, Card, CardBody, CardHeader, Col, Row} from "reactstrap";
import {Button as SementicBtn, Form, Input} from "semantic-ui-react";
import Lbl from "../../../components/label";
import LabelInput from "../../../components/input/txtlbl";
import DrpDwn from "../../../components/dropdown";
import {Tooltip} from "antd";
import {MDBDataTable} from "mdbreact";
import Update from "../product-category/update/index";


const tblcolumns= [
  {
    label: 'Category Code',
    field: 'code',
    sort: 'asc'
  },
  {
    label: 'Category Name',
    field: 'name',
    sort: 'asc'
  },
  {
    label: 'Description',
    field: 'description',
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
    code: "C001",
    name: "Test",
    description: "test======1, test======1",
  },
  {
    code: "C002",
    name: "Test",
    description: "test======2, test======2",
  },
  {
    code: "C003",
    name: "Test",
    description: "test======3, test======3",
  },
];

let table_data = [];


class Index extends Component {

    state = {
      code: "",
      name: "",
      description: "",
      isUpdate: false,
      categoryData: "",
    };

    constructor(props){
      super(props);
      this.loadCategoryTable();
    }

    // Load Category Table
    loadCategoryTable(){
      const rows = [];
      if (tbldata.length !== 0) {
        tbldata.map((row, index) => {
          rows.push(
            {
              code: row.code,
              name: row.name,
              description: row.description,
              action:
                <div>
                  <SementicBtn circular icon='edit'
                               onClick={() => {this.updateCategory(row)}}
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


    //View Update Category
    updateCategory = (value) => {
      this.setState({
        isUpdate: true,
        categoryData: value
      });
    };

  // On Change
  onChangeState = (name, length) => event => {
    this.setState({
      [name]: event.target.value
    });

  };

  // Add Product Category
  addProductCategory = () =>{

    const {  name, code, description} = this.state;
    const obj = {
      "code": code,
      "name": name,
      "description": description,
    };

    console.log(obj);
    this.clearInput();
  };

  // Clear Input
  clearInput = () =>{
    this.setState({
      code: "",
      name: "",
      description: "",
    })
  };


  render() {
    return (
      <div>

        {
          this.state.isUpdate ?
            <Update data={this.state.categoryData} closeModal={() => this.setState({ isUpdate: false })}/>
            :
            null
        }

        <Card>
          <CardHeader>Product Category</CardHeader>
          <CardBody>
            <Row>
              <Col xl={12}>
                <Row>
                  <Col xl={12}>
                    <Form>
                      <Row  className="ml-3 mr-3">
                        <Col xl={6} lg={6} md={6} sm={6} className="none-padding">
                          <Lbl required>Product Category Code</Lbl>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={6} className="none-padding">
                          <LabelInput
                            placeholder={"Product Category Code"}
                              value={this.state.code}
                              onChange={this.onChangeState('code')}
                          />
                        </Col>
                      </Row>

                      <Row  className="ml-3 mr-3 mt-3">
                        <Col xl={6} lg={6} md={6} sm={6} className="none-padding">
                          <Lbl required>Product Category Name</Lbl>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={6} className="none-padding">
                          <LabelInput
                            placeholder={"Product Category Name"}
                              value={this.state.name}
                              onChange={this.onChangeState('name')}
                          />
                        </Col>
                      </Row>

                      <Row  className="ml-3 mr-3 mt-3">
                        <Col xl={6} lg={6} md={6} sm={6} className="none-padding">
                          <Lbl required>Description</Lbl>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={6} className="none-padding">
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

                      <Row>
                        <Col className="marginTop" xs={12} sm={12} md={12} lg={12} xl={12}>
                          <center>
                            <Button
                              className="addBtn mt-4"
                              color="primary"
                              onClick={e => this.addProductCategory()}
                            >Add Category</Button>
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
          <CardHeader>All Category</CardHeader>
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
