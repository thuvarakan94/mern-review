import Fastify from "fastify";
import cors from "@fastify/cors";

import { reviewRoutes } from "./routes/review";

async function bootstrap() {
  const PORT = process.env.PORT || 3000;

  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(cors, {
    origin: true,
  })

  await fastify.register(reviewRoutes)

  await fastify.listen(PORT)
}

bootstrap();