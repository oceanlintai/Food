import express from 'express'
import db from '../db/database'
import Product from '../domain/restaurants'

const router = express.Router()

router.use((req, res, next) => { console.log('passed router.use at Restaurants API ');next();})

router.get('/', (req, res, next) => {
    db.query(Product.getAllRestaurantSQL(), (err, data) => {
        if (!err) {
            res.status(200).json(data)
        }
    })
})

router.get('/:restaurantId', (req, res, next) => {
    let pid = req.params.restaurantId
    db.query(Product.getRestaurantByIdSQL(pid), (err, data) => {
        if (!err) {
            if (data && data.length > 0) {
                res.status(200).json({
                    message: 'Restaurants found.',
                    restaurant: data,
                })
            } else {
                res.status(200).json({
                    message: 'DinnerProducts Not found.',
                })
            }
        }
    })
})

router.post('/', (req, res, next) => {
    //read product information from request
    let product = new Product(req.body.prd_name, req.body.prd_price)

    db.query(product.addRestaurantSQL(), (err, data) => {
        res.status(200).json({
            message: 'Restaurants added.',
            restaurantId: data.insertId,
        })
    })
})

router.put('/:restaurantId', (req, res, next) => {
    let pid = req.params.restaurantId
    let product = new Product(req.body.name, req.body.price)
    db.query(product.updateRestaurantByIdSQL(pid), (err, data) => {
        if (!err) {
            if (data && data.length > 0) {
                res.status(200).json({
                    message: 'Restaurants found.',
                    restaurant: data,
                })
            } else {
                res.status(200).json({
                    message: 'Restaurants Not found.',
                })
            }
        }
    })
})

router.delete('/:restaurantId', (req, res, next) => {
    let pid = req.params.restaurantId

    db.query(Product.deleteRestaurantByIdSQL(pid), (err, data) => {
        if (!err) {
            if (data && data.affectedRows > 0) {
                res.status(200).json({
                    message: `Restaurant deleted with id = ${pid}.`,
                    affectedRows: data.affectedRows,
                })
            } else {
                res.status(200).json({
                    message: 'Restaurants Not found.',
                })
            }
        }
    })
})

module.exports = router
