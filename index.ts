import fastify from 'fastify'
import cors from '@fastify/cors'
import { hello } from './src/routes/hello'

const app = fastify()

app.register(cors,{
  origin: "*"
})

hello(app)

app.listen({
  port: 8080
}).then(()=>{
  console.log(`Listening on 8080`)
}).catch((error)=>{
  console.log(`Error: ${error}`)
})
