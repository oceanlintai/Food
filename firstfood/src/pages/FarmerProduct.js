import React, { useEffect, useState } from 'react'
import {Card,Button} from 'react-bootstrap'

import HeaderFooter from './container/HeaderFooter'
import {connect} from "react-redux"
import FarmerProductReducer from "../reducers/FarmerProductReducer";

const FarmerProduct = props => {
  const [product, setProduct] = useState('Product')

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {}
  })
  console.log(props.product)
  return (
    <>
      <HeaderFooter location="市集">
        <h1>小農市集</h1>
        <div className="row justify-content-center">
          {props.product.map(item => (
              <Card key={item.sid} className={"m-1"} style={{ width: '14rem' }}>
                <Card.Img variant="top" src="./assets/images/product1.jpg" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.content}
                  </Card.Text>
                  <Button variant="primary">{item.price}</Button>
                </Card.Body>
              </Card>
          ))}
        </div>

      </HeaderFooter>
    </>
  )
}
// 綁定props.todos <=> store.todos
const mapStateToProps = store => ({ product: store.FarmerProductReducer })
export default connect(mapStateToProps)(FarmerProduct)
