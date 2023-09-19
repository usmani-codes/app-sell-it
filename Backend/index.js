import express from 'express'
import helmet from 'helmet'
import dotenv from 'dotenv'

import categories from './routes/categories.js'
import listings from './routes/listings.js'
import listing from './routes/listing.js'
import users from './routes/users.js'
import user from './routes/user.js'
import auth from './routes/auth.js'
import my from './routes/my.js'
import messages from './routes/messages.js'
import expoPushTokens from './routes/expoPushTokens.js'
import config from 'config'

const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(helmet())

app.use('/api/categories', categories)
app.use('/api/listing', listing)
app.use('/api/listings', listings)
app.use('/api/user', user)
app.use('/api/users', users)
app.use('/api/auth', auth)
app.use('/api/my', my)
app.use('/api/expoPushTokens', expoPushTokens)
app.use('/api/messages', messages)

const port = process.env.PORT || config.get('port')
app.listen(port, function () {
  console.log(`Server started on port ${port}...`)
})
