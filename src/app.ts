import express from 'express'
import userRouter from './routes/user.routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set('port', process.env.PORT || 3000)

app.get('/', (request, response) => {
  response.status(200).json({
    statusCode: 200,
    message: 'Hello from test',
    data: null
  })
})

app.use('/api/v1/users/', userRouter)

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
})