import express from 'express'
import db from '../db/database'
import Product from '../domain/carts'

const router = express.Router()

router.use((req, res, next) => { console.log('passed router.use at Carts API ');next();})

router.get('/', (req, res, next) => {
  db.query(Product.getAllCartSQL(), (err, data) => {
    if (!err) {
      res.status(200).json(data)
    }
  })
})

router.get('/:cartId', (req, res, next) => {
  let pid = req.params.cartId
  db.query(Product.getCartByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'Cart found.',
          cart: data,
        })
      } else {
        res.status(200).json({
          message: 'Cart Not found.',
        })
      }
    }
  })
})

router.post('/', (req, res, next) => {
  //read product information from request
  let product = new Product(req.body.prd_name, req.body.prd_price)

  db.query(product.addCartSQL(), (err, data) => {
    res.status(200).json({
      message: 'Cart added.',
      cartId: data.insertId,
    })
  })
})

router.put('/:cartId', (req, res, next) => {
  let pid = req.params.cartId
   let product = new Product(req.body.name, req.body.price)
   db.query(product.updateCartByIdSQL(pid), (err, data) => {
     if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'Cart found.',
          cart: data,
        })
      } else {
        res.status(200).json({
          message: 'Cart Not found.',
        })
      }
    }
  })
})

router.delete('/:cartId', (req, res, next) => {
  let pid = req.params.cartId

  db.query(Product.deleteCartByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.affectedRows > 0) {
        res.status(200).json({
          message: `Cart deleted with id = ${pid}.`,
          affectedRows: data.affectedRows,
        })
      } else {
        res.status(200).json({
          message: 'Cart Not found.',
        })
      }
    }
  })
})

module.exports = router
