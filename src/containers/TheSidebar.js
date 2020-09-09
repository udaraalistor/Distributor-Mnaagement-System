import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'

//sidebar nav user config
import usernavigation from './_navUser'

import cookie from 'react-cookies';


class TheSidebar extends Component {
  // console.log("user role is in side bar: ",cookie.load('USERROLE'))

  state = {
    USERROLE: "",
    isusercontent: false,
    isadmincontect: false
  }

  // componentDidMount() {

  //   const userrole = cookie.load('USERROLE')

  // }

  constructor(props) {
    super(props)


  }

  componentDidMount() {
    const userrole = cookie.load('USERROLE')

    if (userrole === "ADMIN") {
      this.setState({
        isadmincontect: true,
        isusercontent: false,
        USERROLE: userrole
      })
    } else if (userrole === "USER") {
      this.setState({
        isadmincontect: false,
        isusercontent: true,
        USERROLE: userrole
      })

    }

  }


  details = () => {
    const dispatch = useDispatch()
    const show = useSelector(state => state.sidebarShow)
  }

  render() {
    return (
      <CSidebar
        show={this.details.show}
        onShowChange={(val) => this.details.dispatch({ type: 'set', sidebarShow: val })}
      >
        <CSidebarBrand className="d-md-down-none" to="/">
          {/* <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        /> */}
        </CSidebarBrand>


        <CSidebarNav>

          {
            this.state.isadmincontect ?

              <CCreateElement
                items={navigation}
                components={{
                  CSidebarNavDivider,
                  CSidebarNavDropdown,
                  CSidebarNavItem,
                  CSidebarNavTitle
                }}
              />
              : null

          }

          {
            this.state.isusercontent ?

              <CCreateElement
                items={usernavigation}
                components={{
                  CSidebarNavDivider,
                  CSidebarNavDropdown,
                  CSidebarNavItem,
                  CSidebarNavTitle
                }}
              />
              : null

          }


        </CSidebarNav>
        <CSidebarMinimizer className="c-d-md-down-none" />
      </CSidebar>
    )
  }
}




export default React.memo(TheSidebar)
