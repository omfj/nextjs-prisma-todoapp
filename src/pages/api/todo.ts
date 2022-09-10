import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const todos = await prisma.todo.findMany();

    res.status(200).json(todos);
  }

  if (req.method === "POST") {
    const { title, content } = req.body;

    await prisma.todo.create({
      data: {
        title,
        content,
      },
    });

    res.status(200).end();
  }

  if (req.method === "DELETE") {
    const { id } = req.body;

    await prisma.todo.delete({
      where: {
        id,
      },
    });

    res.status(200).end();
  }

  if (req.method === "PUT") {
    const { id, title, content, completed } = req.body;

    await prisma.todo.update({
      where: {
        id,
      },
      data: {
        title,
        content,
        completed,
      },
    });

    res.status(200).end();
  }

  res.status(400).end();
};

export default handler;
