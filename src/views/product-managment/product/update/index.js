import React, {Component} from 'react';
import {MDBModal, MDBModalBody, MDBModalHeader} from "mdbreact";
import {Col, Row, Button} from "reactstrap";
import { Form} from "semantic-ui-react";
import Lbl from "../../../../components/label";
import LabelInput from "../../../../components/input/txtlbl";
import DrpDwn from "../../../../components/dropdown";
import * as DropDownConst from '../../../../store/Reducer/DropDownConst';

class Index extends Component {

  state = {
    code: "",
    description: "",
    category: "",
    petailerPrice: "",
    status: "",
    name: "",
    tax: "",
    primaryPrice: "",
    consumerPrice: "",
  };


  componentDidMount() {
    this.fillData();
  }


  fillData = () => {
    const { data } = this.props;
    if (data !== null) {

      this.setState({
        code: data.code,
        description: data.description,
        category: data.product_category,
        petailerPrice: data.retailer_price,
        status: data.status,
        name: data.name,
        tax: data.tax,
        primaryPrice: data.primary_price,
        consumerPrice: data.consumerPrice,
      })
    }
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

  // Update Product
  updateProduct = () =>{

    const {  name, code, description, tax, category, petailerPrice, status, primaryPrice, consumerPrice } = this.state;
    const obj = {
      "code": code,
      "name": name,
      "description": description,
      "tax": tax,
      "category": category,
      "petailerPrice": petailerPrice,
      "status": status.toString(),
      "primaryPrice": primaryPrice,
      "consumerPrice": consumerPrice,
    };

    console.log(obj);
  };


  render() {


    return (
      <div>
        <MDBModal isOpen={true} toggle={this.toggle} size="xl">
          <MDBModalHeader className={"title"} toggle={this.props.closeModal}>Update Product</MDBModalHeader>
          <MDBModalBody>
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

                      <Col className={"none-padding"} lg={12}>
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
                                value={this.state.tax}
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
                                onChange={this.dropDownChange('category')}
                            />
                          </Col>
                          <Col lg={12} xl={6} md={12} sm={6} xs={12}>
                            <LabelInput
                              className="mt-1"
                              placeholder={""}
                                value={this.state.category}
                              //   onChange={this.handleChange('category')}
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
                            value={this.state.status}
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
                            color="success"
                            onClick={e => this.updateProduct()}
                          >Update</Button>
                        </center>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </MDBModalBody>
        </MDBModal>
      </div>
    );
  }
}

export default Index;
