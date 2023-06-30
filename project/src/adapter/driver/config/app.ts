import express from 'express'
import clientRoutes from '../routes/ClientRoutes'
import itemRoutes from '../routes/ItemRoutes'
import { errorHandler } from '../error/ErrorHandler'

const app = express()
app.use(express.json())

app.use('/clients', clientRoutes)
app.use('/item', itemRoutes)

app.use(errorHandler)

export default app
