import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import FarmerProduct from './pages/FarmerProduct'
import Forum from './pages/Forum'
import Class from './pages/Class'
import RestaurantMap from './pages/Map'
import Member from './pages/Member'
import Cart from './pages/Cart'
import Test from './test/test'

// import Counter from "./components/CounterApp"


const FirstFoodRoute = (props) => {
  const userStatus = "登入"
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/restaurant" component={Restaurant} />
        <Route exact path="/product" component={FarmerProduct} />
        <Route exact path="/class" component={Class} />
        <Route exact path="/forum" component={Forum} />
        <Route exact path="/map" component={RestaurantMap} />
        <Route exact path="/member" component={Member} />
        <Route exact path="/cart" render={(props) =><Cart {...props} loading/>} />
        <Route exact path="/test" component={Test} />

        {/*<Route path="/news" component={ () => <News userStatus={userStatus} /> }/>*/}
        {/*<Route path="/contact" render={(props) =><Contact {...props} userStatus={userStatus}/>}/>*/}
      </Switch>
    </Router>
  )
}

const mapStateToProps = store => ({ store: store })
export default connect(mapStateToProps)(FirstFoodRoute)