import React, {Component} from 'react';
import {MDBModal, MDBModalBody, MDBModalHeader} from "mdbreact";
import {Button, Col, Row} from "reactstrap";
import {Form} from "semantic-ui-react";
import Lbl from "../../../../components/label";
import LabelInput from "../../../../components/input/txtlbl";
import DrpDwn from "../../../../components/dropdown";
import * as DropDownConst from "../../../../store/Reducer/DropDownConst";

class Index extends Component {

  state = {
    id: "",
    description: "",
    value: "",
    status: "",
  };

  componentDidMount() {
    this.fillData();
  }


  fillData = () => {
    const { data } = this.props;
    if (data !== null) {

      this.setState({
        id: data.id,
        description: data.description,
        value: data.value,
        status: data.status
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

  // Update Tax
  updateTax = () =>{

    const {  id, description, value, status } = this.state;
    const obj = {
      "id": id,
      "description": description,
      "value": value,
      "status": status.toString(),
    };

    console.log(obj);

  };


  render() {
    return (
      <div>
        <MDBModal isOpen={true} toggle={this.toggle} size="lg">
          <MDBModalHeader className={"title"} toggle={this.props.closeModal}>Update Tax</MDBModalHeader>
          <MDBModalBody>
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
                        <Col xl={8} lg={8} md={8} sm={8} className="none-padding">
                          <LabelInput
                            placeholder={"Tax Value"}
                              value={this.state.value}
                              onChange={this.onChangeState('value')}
                          />
                        </Col>
                      </Row>

                      <Row  className="ml-3 mr-3 mt-3">
                        <Col xl={4} lg={4} md={4} sm={4} className="none-padding">
                          <Lbl required>Tax Value</Lbl>
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
                              color="success"
                              onClick={e => this.updateTax()}
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
