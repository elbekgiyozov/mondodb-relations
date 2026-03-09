require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

const categoryRoutes = require('./routes/categories')
const productRoutes = require('./routes/products')

app.use('/categories', categoryRoutes)
app.use('/products', productRoutes)

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`)
    })
  })
  .catch((err) => console.log(err))
