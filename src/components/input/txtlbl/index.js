import React from 'react'
import {Input} from 'semantic-ui-react'
import '../txtlbl/txtlbl.css'
import {Form} from "semantic-ui-react";

const App = (props) => (
  <Form.Field
    className={props.className}
    required={props.required}
    id={props.id}
    control={Input}
    label={props.tagText}
    placeholder={props.placeholder}
    onChange={props.onChange}
    value={props.value}
    disabled={props.disable}
    type={props.type}
  />
);

export default App
