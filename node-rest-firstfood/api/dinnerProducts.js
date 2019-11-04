import express from 'express'
import db from '../db/database'
import Product from '../domain/dinnerProducts'

const router = express.Router()

router.use((req, res, next) => { console.log('passed router.use at DinnerProducts API ');next();})

router.get('/', (req, res, next) => {
  db.query(Product.getAllDinnerProductSQL(), (err, data) => {
    if (!err) {
      res.status(200).json(data)
    }
  })
})

router.get('/:dinnerProductId', (req, res, next) => {
  let pid = req.params.dinnerProductId
  db.query(Product.getDinnerProductByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'DinnerProduct found.',
          dinnerProduct: data,
        })
      } else {
        res.status(200).json({
          message: 'DinnerProduct Not found.',
        })
      }
    }
  })
})

router.post('/', (req, res, next) => {
  //read product information from request
  let product = new Product(req.body.prd_name, req.body.prd_price)

  db.query(product.addDinnerProductSQL(), (err, data) => {
    res.status(200).json({
      message: 'DinnerProduct added.',
      dinnerProductId: data.insertId,
    })
  })
})

router.put('/:dinnerProductId', (req, res, next) => {
  let pid = req.params.dinnerProductId
   let product = new Product(req.body.name, req.body.price)
   db.query(product.updateDinnerProductByIdSQL(pid), (err, data) => {
     if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'DinnerProduct found.',
          product: data,
        })
      } else {
        res.status(200).json({
          message: 'DinnerProduct Not found.',
        })
      }
    }
  })
})

router.delete('/:dinnerProductId', (req, res, next) => {
  let pid = req.params.dinnerProductId

  db.query(Product.deleteDinnerProductByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.affectedRows > 0) {
        res.status(200).json({
          message: `DinnerProduct deleted with id = ${pid}.`,
          affectedRows: data.affectedRows,
        })
      } else {
        res.status(200).json({
          message: 'DinnerProduct Not found.',
        })
      }
    }
  })
})

module.exports = router
