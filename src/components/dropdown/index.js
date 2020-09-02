import {Input, Select,Form} from "semantic-ui-react";
import React from "react";

const App = (props) => (
  <Form.Field
    selectOnBlur={false}
    autoFocus={false}
    openOnFocus={false}
    className={props.className}
    value={props.value}
    required={props.required}
    control={Select}
    options={props.options}
    label={{children: props.tagText}}
    placeholder={props.placeholder}
    search
    multiple={props.multiple}
    selection={props.selection}
    onChange={props.onChange}
    searchInput={{ id: 'form-select-control-gender' }}
    disabled={props.disabled}
  />
);

export default App
