import React, { Component } from 'react';
import './styles.css';
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { Button as SementicBtn, Form, Input } from "semantic-ui-react";
import Lbl from "../../../components/label";
import LabelInput from "../../../components/input/txtlbl";
import DrpDwn from "../../../components/dropdown";
import { Tooltip } from "antd";
import { MDBDataTable } from "mdbreact";
import Update from "../product/update/"
import * as DropDownConst from '../../../store/Reducer/DropDownConst'
import cookie from 'react-cookies';


const tblcolumns = [
  {
    label: 'Product Code',
    field: 'code',
    sort: 'asc'
  },
  {
    label: 'Product Name',
    field: 'name',
    sort: 'asc'
  },
  {
    label: 'Product Category',
    field: 'product_category',
    sort: 'asc'
  },
  {
    label: 'Tax',
    field: 'tax',
    sort: 'asc'
  },
  {
    label: 'Primary Price',
    field: 'primary_price',
    sort: 'asc'
  },
  {
    label: 'Retailer Price',
    field: 'retailer_price',
    sort: 'asc'
  },
  {
    label: 'Action',
    field: 'action',
    sort: 'asc'
  }
];

const tbldata = [
  {
    code: "C001",
    name: "Test",
    description: "test======1, test======1",
    product_category: 'test---1',
    tax: 'tax--1',
    status: "tttt===1",
    primary_price: '20000',
    retailer_price: '1000',
    consumerPrice: "12000"
  },
  {
    code: "C002",
    name: "Test",
    description: "test======2, test======2",
    product_category: 'test---2',
    tax: 'tax--2',
    status: "tttt===2",
    primary_price: '20000',
    retailer_price: '1000',
    consumerPrice: "12000"
  },
  {
    code: "C003",
    name: "Test",
    description: "test======3, test======3",
    product_category: 'test---3',
    tax: 'tax--3',
    status: "tttt===3",
    primary_price: '20000',
    retailer_price: '1000',
    consumerPrice: "12000"
  },
];

let table_data = [];

class Index extends Component {

  state = {
    code: "",
    name: "",
    description: "",
    tax: "",
    product: "",
    petailerPrice: "",
    status: "",
    primaryPrice: "",
    consumerPrice: "",
    isUpdate: false,
    productData: "",
    content: false
  };

  constructor(props) {
    super(props);
    this.loadProductTable();
  }


  // Load Product Table
  loadProductTable() {
    const rows = [];
    if (tbldata.length !== 0) {
      tbldata.map((row, index) => {
        rows.push(
          {
            code: row.code,
            name: row.name,
            product_category: row.product_category,
            tax: row.tax,
            primary_price: row.primary_price,
            retailer_price: row.retailer_price,
            action:
              <div>
                <SementicBtn circular icon='edit'
                  onClick={() => { this.updateProduct(row) }}
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

  //View Update Product
  updateProduct = (value) => {
    this.setState({
      isUpdate: true,
      productData: value
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

  // Add Product
  addProduct = () => {

    const { name, code, description, tax, product, petailerPrice, status, primaryPrice, consumerPrice } = this.state;
    const obj = {
      "code": code,
      "name": name,
      "description": description,
      "tax": tax,
      "product": product,
      "petailerPrice": petailerPrice,
      "status": status.toString(),
      "primaryPrice": primaryPrice,
      "consumerPrice": consumerPrice,
    };

    console.log(obj);

  };


  componentDidMount() {

    let userrole = cookie.load('USERROLE');

    if (userrole === "ADMIN") {
      this.setState({
        content: true
      })

    } else {
      this.setState({
        content: false
      })

    }
  }

  render() {
    return (
      <div>
        {
          this.state.isUpdate ?
            <Update data={this.state.productData} closeModal={() => this.setState({ isUpdate: false })} />
            :
            null
        }

        {
          this.state.content ?
            <Card>
              <CardHeader>Product</CardHeader>
              <CardBody>
                <Row>
                  <Col xs={12} lg={12} md={12} xl={12} className={"padd_grap"}>
                    <Row>
                      <Col xl={6} lg={6} md={6}>
                        <Form>
                          <Col className={"none-padding"} lg={12}>
                            <Lbl required>Product Code</Lbl>
                            <LabelInput
                              placeholder={"Product Code"}
                              value={this.state.code}
                              onChange={this.onChangeState('code')}
                            />
                          </Col>

                          <Col className={"none-padding"} lg={12}>
                            <Lbl required>Product Name</Lbl>
                            <LabelInput
                              placeholder={"Product Name"}
                              value={this.state.name}
                              onChange={this.onChangeState('name')}
                            />
                          </Col>

                          <Col className={"none-padding"} lg={12}>
                            <Lbl required>Description</Lbl>
                            <LabelInput
                              placeholder={"Description"}
                              value={this.state.description}
                              onChange={this.onChangeState('description')}
                            />

                          </Col>

                          <Col className={"none-padding"}>
                            <Lbl required>Tax</Lbl>
                            <Row>
                              <Col lg={12} xl={6} md={12} sm={6} xs={12}>
                                <DrpDwn
                                  multiple
                                  placeholder={"Tax"}
                                  //   options={this.state.branch_list}
                                  //   value={this.state.selected_list}
                                  onChange={this.dropDownChange('tax')}
                                />
                              </Col>
                              <Col lg={12} xl={6} md={12} sm={6} xs={12}>
                                <LabelInput
                                  className="mt-1"
                                  placeholder={""}
                                //   value={this.state.username}
                                //   onChange={this.handleChange('username')}
                                />
                              </Col>
                            </Row>
                          </Col>

                          <Col className={"none-padding"} lg={12}>
                            <Lbl required>Product Category</Lbl>
                            <Row>
                              <Col lg={12} xl={6} md={12} sm={6} xs={12}>
                                <DrpDwn
                                  multiple
                                  placeholder={"Product"}
                                  //   options={this.state.branch_list}
                                  //   value={this.state.selected_list}
                                  onChange={this.dropDownChange('product')}
                                />
                              </Col>
                              <Col lg={12} xl={6} md={12} sm={6} xs={12}>
                                <LabelInput
                                  className="mt-1"
                                  placeholder={""}
                                //   value={this.state.username}
                                //   onChange={this.handleChange('username')}
                                />
                              </Col>
                            </Row>
                          </Col>

                        </Form>
                      </Col>

                      <Col xl={6} lg={6} md={6}>
                        <Form>

                          <Col className={"none-padding"} lg={12}>
                            <Lbl required>Petailer Price</Lbl>
                            <LabelInput
                              placeholder={"Petailer Price"}
                              value={this.state.petailerPrice}
                              onChange={this.onChangeState('petailerPrice')}
                            />
                          </Col>

                          <Col className={"none-padding"} lg={12}>
                            <Lbl required>Status</Lbl>
                            <DrpDwn
                              multiple
                              placeholder={"Status"}
                              options={DropDownConst.salesmanstatus}
                              //   value={this.state.selected_list}
                              onChange={this.dropDownChange('status')}
                            />
                          </Col>

                          <Col className={"none-padding"} lg={12}>
                            <Lbl required>Primary Price</Lbl>
                            <LabelInput
                              placeholder={"Primary Price"}
                              value={this.state.primaryPrice}
                              onChange={this.onChangeState('primaryPrice')}
                            />
                          </Col>

                          <Col className={"none-padding"} lg={12}>
                            <Lbl required>Consumer Price</Lbl>
                            <LabelInput
                              placeholder={"Consumer Price"}
                              value={this.state.consumerPrice}
                              onChange={this.onChangeState('consumerPrice')}
                            />
                          </Col>

                        </Form>

                        <Row>
                          <Col className="marginTop" xs={12} sm={12} md={12} lg={12}>
                            <center>
                              <Button
                                className="addBtn mt-4"
                                color="primary"
                                onClick={e => this.addProduct()}
                              >Add Product</Button>
                            </center>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            : null
        }
        
        <Card>
          <CardHeader>All Members</CardHeader>
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
            {/* </Spin> */}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Index;
