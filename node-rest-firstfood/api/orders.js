import express from 'express'
import db from '../db/database'
import Product from '../domain/orders'

const router = express.Router()

router.use((req, res, next) => { console.log('passed router.use at Orders API ');next();})

router.get('/', (req, res, next) => {
  db.query(Product.getAllOrderSQL(), (err, data) => {
    if (!err) {
      res.status(200).json(data)
    }
  })
})

router.get('/:orderId', (req, res, next) => {
  let pid = req.params.orderId
  db.query(Product.getOrderByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'Order found.',
          order: data,
        })
      } else {
        res.status(200).json({
          message: 'Order Not found.',
        })
      }
    }
  })
})

router.post('/', (req, res, next) => {
  //read product information from request
  let product = new Product(req.body.prd_name, req.body.prd_price)

  db.query(product.addOrderSQL(), (err, data) => {
    res.status(200).json({
      message: 'Order added.',
      orderId: data.insertId,
    })
  })
})

router.put('/:orderId', (req, res, next) => {
  let pid = req.params.orderId
  let product = new Product(req.body.name, req.body.price)
  db.query(product.updateOrderByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'Order found.',
          order: data,
        })
      } else {
        res.status(200).json({
          message: 'Order Not found.',
        })
      }
    }
  })
})

router.delete('/:orderId', (req, res, next) => {
  let pid = req.params.orderId

  db.query(Product.deleteOrderByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.affectedRows > 0) {
        res.status(200).json({
          message: `Order deleted with id = ${pid}.`,
          affectedRows: data.affectedRows,
        })
      } else {
        res.status(200).json({
          message: 'Order Not found.',
        })
      }
    }
  })
})

module.exports = router
