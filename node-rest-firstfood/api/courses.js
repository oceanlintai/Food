import express from 'express'
import db from '../db/database'
import Product from '../domain/courses'

const router = express.Router()

router.use((req, res, next) => { console.log('passed router.use at Courses API ');next();})

router.get('/', (req, res, next) => {
  db.query(Product.getAllCourseSQL(), (err, data) => {
    if (!err) {
      res.status(200).json(data)
    }
  })
})

router.get('/:courseId', (req, res, next) => {
  let pid = req.params.courseId
  db.query(Product.getCourseByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'Course found.',
          product: data,
        })
      } else {
        res.status(200).json({
          message: 'Course Not found.',
        })
      }
    }
  })
})

router.post('/', (req, res, next) => {
  //read product information from request
  let product = new Product(req.body.prd_name, req.body.prd_price)

  db.query(product.addCourseSQL(), (err, data) => {
    res.status(200).json({
      message: 'Course added.',
      courseId: data.insertId,
    })
  })
})

router.put('/:courseId', (req, res, next) => {
  let pid = req.params.courseId
   let product = new Product(req.body.name, req.body.price)
   db.query(product.updateCourseByIdSQL(pid), (err, data) => {
     if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: 'Course found.',
          product: data,
        })
      } else {
        res.status(200).json({
          message: 'Course Not found.',
        })
      }
    }
  })
})

router.delete('/:courseId', (req, res, next) => {
  let pid = req.params.courseId

  db.query(Product.deleteCourseByIdSQL(pid), (err, data) => {
    if (!err) {
      if (data && data.affectedRows > 0) {
        res.status(200).json({
          message: `Course deleted with id = ${pid}.`,
          affectedRows: data.affectedRows,
        })
      } else {
        res.status(200).json({
          message: 'Course Not found.',
        })
      }
    }
  })
})

module.exports = router
