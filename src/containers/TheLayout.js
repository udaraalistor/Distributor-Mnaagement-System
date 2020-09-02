import React, { Component } from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'



 class TheLayout extends Component {

   constructor(props) {
     super(props)
   }

   logOutHandler=(e)=>{
     e.preventDefault();
     this.props.history.push('/login');
   };

  render() {
    return (
      <div className="c-app c-default-layout">
        <TheSidebar />
        <div className="c-wrapper">
          <TheHeader logOutHandler={e=>{this.logOutHandler(e)}}/>
          <div className="c-body">
            <TheContent />
          </div>
          <TheFooter />
        </div>
      </div>
    )
  }
}

export default TheLayout;


