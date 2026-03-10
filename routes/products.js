import { Router } from 'express'
import Product from '../models/Product.js'

const router = Router()

router.post('/', async (req, res) => {
  try {
    const product = new Product({
      title: req.body.title,
      price: req.body.price,
      category: req.body.categoryId,
    })
    await product.save()
    res.status(201).json(product)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

router.get('/', async (req, res) => {
  try {
    const products = await Product.find().populate('category')
    res.json(products)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router
