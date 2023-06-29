import express from 'express'
import clientRoutes from '../routes/ClientRoutes'
import itemRoutes from '../routes/ItemRoutes'

const app = express()

app.use(express.json())

app.use('/clients', clientRoutes)
app.use('/item', itemRoutes)

export default app
