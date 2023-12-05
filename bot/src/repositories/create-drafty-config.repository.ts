import { PrismaClient } from '@database/prisma/client';
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();

export const createDraftyConfig = async () => {
  const draftyConfig = await prisma.drafty_configurations.create({
    data: {
      id: randomUUID(),
      checkin_message: 'Prout checkin',
      scheduled_message: 'Prout scheduled msg',
      cron_date: '00 * * * * *',
      current_mtg_format: 'DND',
    },
  });

  console.log({ draftyConfig });

  return draftyConfig;
};
