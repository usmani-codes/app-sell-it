import express from 'express'
const router = express.Router()
import categoriesStore from '../store/categories.js'

router.get('/', (req, res) => {
  const categories = categoriesStore.getCategories()
  res.send(categories)
})

export default router
