import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.svg'
import { NavLink, withRouter } from 'react-router-dom'

const Header = props => {
  return (
    <>
      <header id="header" className="position-relative row">
        <div id="logo" className="col-md-6 col-lg-7 p-0">
          <NavLink key={1} to={'/'}>
            <img src={logo} alt="" />
            <br />
            <span>FIRST FOOD ONLINESHOP</span>
          </NavLink>
        </div>

        <div className="middleLine"></div>
        <div className="middleLine"></div>

        <div id="memberNav" className="d-inline-block row col-md-4 col-lg-3">
          <NavLink key={2} to={'/member'}>
            / 會員{' '}
          </NavLink>
          <NavLink key={3} to={'/cart'}>
            / 購物車{' '}
          </NavLink>
          <NavLink key={4} to={'/'}>
            / Q&A{' '}
          </NavLink>
        </div>
        <div className="col-md-2 col-lg-2 p-0">
          <div id="searchIcon" className="position-relative text-center">
            <div className="searchBlock position-absolute"></div>
            <i className="fas fa-search fa-lg"></i>
            <div className="searchBlock position-absolute"></div>
          </div>
        </div>
      </header>
    </>
  )
}

export default withRouter(Header)
