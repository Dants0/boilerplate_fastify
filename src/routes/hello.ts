import { FastifyInstance } from "fastify";

export async function hello(app: FastifyInstance){
  app.get("/", (req, reply) => {
    reply.send({
      code: 200,
      message: "Hello, World!",
      status: "active"
    })
  })
}