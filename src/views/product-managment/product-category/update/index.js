import React, {Component} from 'react';
import {MDBModal, MDBModalBody, MDBModalHeader} from "mdbreact";
import {Button, Col, Row} from "reactstrap";
import {Form} from "semantic-ui-react";
import Lbl from "../../../../components/label";
import LabelInput from "../../../../components/input/txtlbl";
import DrpDwn from "../../../../components/dropdown";

class Index extends Component {

  state = {
    code: "",
    description: "",
    name: "",
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
        name: data.name,
      })
    }
  };

  // On Change
  onChangeState = (name, length) => event => {
    this.setState({
      [name]: event.target.value
    });

  };

  // Update Product Category
  updateProductCategory = () =>{

    const {  name, code, description} = this.state;
    const obj = {
      "code": code,
      "name": name,
      "description": description,
    };

    console.log(obj);

  };


  render() {
    return (
      <div>
        <MDBModal isOpen={true} toggle={this.toggle} size="xl">
          <MDBModalHeader className={"title"} toggle={this.props.closeModal}>Update Category</MDBModalHeader>
          <MDBModalBody>
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
                              color="success"
                              onClick={e => this.updateProductCategory()}
                            >Update</Button>
                          </center>
                        </Col>
                      </Row>
                    </Form>
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
