import React from "react";
import './lbl.css'

const App = (props) => (
  <label style={{width:props.lblWidth?props.lblWidth : '100%',fontSize:props.lblFontSize , marginTop: props.marginTop}} className="label-style">
    {props.children}
    {
      props.required ?
        <span className={"required-field-input"}>*</span>
        :null
    }

  </label>
);

export default App
