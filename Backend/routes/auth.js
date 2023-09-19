import express from 'express'
const router = express.Router()
import Joi from 'joi'
import jwt from 'jsonwebtoken'

import usersStore from '../store/users.js'
import validateWith from '../middleware/validation.js'

const schema = {
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5),
}

router.post('/', validateWith(schema), (req, res) => {
  const { email, password } = req.body
  const user = usersStore.getUserByEmail(email)
  if (!user || user.password !== password)
    return res.status(400).send({ error: 'Invalid email or password.' })

  const token = jwt.sign(
    { userId: user.id, name: user.name, email },
    'jwtPrivateKey'
  )
  res.send(token)
})

export default router
