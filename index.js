import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'

import categoryRoutes from './routes/categories.js'
import productRoutes from './routes/products.js'

const app = express()
app.use(express.json())

app.use('/categories', categoryRoutes)
app.use('/products', productRoutes)

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('MongoDB ulandi')
    app.listen(process.env.PORT, () => {
      console.log(`Server ${process.env.PORT}-portda ishlamoqda`)
    })
  })
  .catch((err) => console.log(err))
