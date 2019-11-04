import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const HomeProduct = () => {
  return (
    <>
      <div id="product">
        <div className="title row position-relative align-content-center">
          <div className="rhombus"></div>
          <h4 className="position-absolute row">
            小農市集<i className="fas fa-fish align-self-center"></i>
          </h4>
          <div className="dashLine align-self-center"></div>
          <div className="rhombus"></div>
        </div>
        <div className="products row">
          <div className="pickup position-relative col-md-3 p-0">
            <div className="middleLine position-absolute"></div>
            <div className="middleLine position-absolute"></div>
            <h4 className="text-center">PICK UP</h4>
            <div className="bottomLine"></div>
            <p className="m-0 text-center">FIRST FOOD ONLINESHOP</p>
          </div>
          <div className="product col-md-3">
            <NavLink key={6} to={'/product'}>
              <img src="./assets/images/product1.jpg" alt="" />
              <p className="m-0 text-center">
                有機三星米
                <br />
                250元
              </p>
            </NavLink>
          </div>
          <div className="product col-md-3">
            <NavLink key={7} to={'/product'}>
              <img src="./assets/images/product2.jpg" alt="" />
              <p className="m-0 text-center">
                野生李梅醬
                <br />
                200元
              </p>
            </NavLink>
          </div>
          <div className="product col-md-3">
            <NavLink key={8} to={'/product'}>
              <img src="./assets/images/product3.jpg" alt="" />
              <p className="m-0 text-center">
                本土黑麻油
                <br />
                500元
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeProduct
