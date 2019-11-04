import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'


import test from './api/test'
import carts from './api/carts'
import orders from './api/orders'
import courses from './api/courses'
import farmers from './api/farmers'
import members from './api/members'
import comments from './api/comments'
import classrooms from './api/classrooms'
import restaurants from './api/restaurants'
import dinnerProducts from './api/dinnerProducts'
import farmerProducts from './api/farmerProducts'


const app = express()

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

app.use('/api/test', test)
// app.use('/api/carts', carts)
// app.use('/api/orders', orders)
app.use('/api/courses', courses)
app.use('/api/farmers', farmers)
app.use('/api/members', members)
// app.use('/api/comments', comments)
app.use('/api/classrooms', classrooms)
app.use('/api/restaurants', restaurants)
app.use('/api/farmerProducts', farmerProducts)
app.use('/api/dinnerProducts', dinnerProducts)


app.use('/',(req, res, next) => {
  res.send("Hello Express")
})
//if we are here then the specified request is not found
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

//all other requests are not implemented.
app.use((err, req, res, next) => {
  res.status(err.status || 501)
  res.json({
    error: {
      code: err.status || 501,
      message: err.message,
    },
  })
})

module.exports = app
