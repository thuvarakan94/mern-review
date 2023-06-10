import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

interface IRequestParams {
    id: string;
  }

export async function reviewRoutes(fastify: FastifyInstance) {

  // list review
  fastify.get('/review', async () => {
    const review = await prisma.review.findMany();

    return { review }
  })
  
  //create new review
  fastify.post('/review/new', async (request, reply) => {
    const createreviewBody = z.object({
      comment: z.string(),
      rating: z.string(),
      date: z.coerce.date({
        invalid_type_error: "The expected type is a Date",
      }),
      description: z.string(),
    })

    const { comment, rating, date, description } = createreviewBody.parse(request.body);

    const review = await prisma.review.create({
      data: {
        comment,
        rating,
        date,
        description,
      }
    })

    if (!review) {
      return reply.status(400).send({
        message: 'review not found.'
      })
    }

    return reply.status(201).send({ review });
  })

}
