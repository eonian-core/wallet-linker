import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log: [
        {level: 'error', emit: 'stdout'},
        {level: 'info', emit: 'stdout'},
        {level: 'warn', emit: 'stdout'},
    ],
    datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
})