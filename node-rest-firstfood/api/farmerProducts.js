import express from 'express'
import db from '../db/database'
import Product from '../domain/farmerProducts'

const router = express.Router()

router.use((req, res, next) => { console.log('passed router.use at farmerProduct API ');next();})

router.get('/', (req, res, next) => {
  db.query(Product.getAllFarmerProductSQL(), (err, data) => {
    if (!err) {
      res.status(200).json(data)
    }
  })
})

router.get('/:farmerProductId', (req, res, next) => {
  let pid = req.params.farmerProductId
  db.query(Product.getFarmerProductByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'farmerProduct found.',
          farmerProduct: data,
        })
      } else {
        res.status(200).json({
          message: 'farmerProduct Not found.',
        })
      }
    }
  })
})

router.post('/', (req, res, next) => {
  //read product information from request
  let product = new Product(req.body.prd_name, req.body.prd_price)

  db.query(product.addFarmerProductSQL(), (err, data) => {
    res.status(200).json({
      message: 'farmerProduct added.',
      farmerProductId: data.insertId,
    })
  })
})

router.put('/:farmerProductId', (req, res, next) => {
  let pid = req.params.farmerProductId
   let product = new Product(req.body.name, req.body.price)
   db.query(product.updateFarmerProductByIdSQL(pid), (err, data) => {
     if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'farmerProduct found.',
          farmerProduct: data,
        })
      } else {
        res.status(200).json({
          message: 'farmerProduct Not found.',
        })
      }
    }
  })
})

router.delete('/:farmerProductId', (req, res, next) => {
  let pid = req.params.farmerProductId

  db.query(Product.deleteFarmerProductByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.affectedRows > 0) {
        res.status(200).json({
          message: `farmerProduct deleted with id = ${pid}.`,
          affectedRows: data.affectedRows,
        })
      } else {
        res.status(200).json({
          message: 'farmerProduct Not found.',
        })
      }
    }
  })
})

module.exports = router
