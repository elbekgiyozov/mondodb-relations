import { Router } from 'express'
import Category from '../models/Category.js'
import Product from '../models/Product.js'

const router = Router()

router.post('/', async (req, res) => {
  try {
    const category = new Category({ name: req.body.name })
    await category.save()
    res.status(201).json(category)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

router.get('/', async (req, res) => {
  try {
    const categories = await Category.find()
    res.json(categories)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/:id/products', async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.id }).populate('category')
    res.json(products)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router
