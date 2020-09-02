import React, { Component } from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

 class TheHeaderDropdown extends Component {
  constructor(props) {
    super(props)
  }

  logOutHandler = () => {
    alert("work")

    this.props.history.push({
      pathname: "/login",
    });

  }

  render() {
    return (
      <CDropdown
        inNav
        className="c-header-nav-items mx-2"
        direction="down"
      >
        <CDropdownToggle className="c-header-nav-link" caret={false}>
          <div className="c-avatar">
            <CImg
              src={"data:image/png;base64,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"}
              className="c-avatar-img"
            // alt="admin@bootstrapmaster.com"
            />
          </div>
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          {/* <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-bell" className="mfe-2" /> 
          Updates
          <CBadge color="info" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-envelope-open" className="mfe-2" /> 
          Messages
          <CBadge color="success" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-task" className="mfe-2" /> 
          Tasks
          <CBadge color="danger" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-comment-square" className="mfe-2" /> 
          Comments
          <CBadge color="warning" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Settings</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" /> 
          Settings
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-credit-card" className="mfe-2" /> 
          Payments
          <CBadge color="secondary" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-file" className="mfe-2" /> 
          Projects
          <CBadge color="primary" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem divider /> */}
          <CDropdownItem divider />
          <CDropdownItem onClick={e=> {this.props.logOutHandler(e)}}>
            <CIcon name="cil-lock-locked" className="mfe-2" />
            Log Out
          </CDropdownItem >
        </CDropdownMenu>
      </CDropdown>
    )
  }
}

export default TheHeaderDropdown;


