import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();

async function main() {
  const draftyConfig = await prisma.drafty_configurations.create({
    data: {
      id: '11111111-0101-0101-0101-010101010101',
      created_at: new Date(),
      scheduled_message: 'This is a scheduled message',
      checkin_message: 'This is a checkin message',
      cron_date: '00 * * * * *',
      current_mtg_format: 'ONE',
    },
  });

  const enrollmentMessage = await prisma.enrollment_messages.create({
    data: {
      id: '22222222-0101-0101-0101-010101010101',
      sent_at: new Date(),
      discord_id: 'discordID',
    },
  });

  const pod = await prisma.pods.create({
    data: {
      id: '33333333-0101-0101-0101-010101010101',
      starts_at: new Date(),
      enrollment_messages_id: '22222222-0101-0101-0101-010101010101',
    },
  });

  const gameTable = await prisma.game_tables.create({
    data: {
      id: '44444444-0101-0101-0101-010101010101',
      completed_at: new Date(),
      pod_id: '33333333-0101-0101-0101-010101010101',
      player_1_discord_id: '111111',
      player_2_discord_id: '222222',
      player_3_discord_id: '333333',
      player_4_discord_id: '444444',
      player_5_discord_id: '555555',
      player_6_discord_id: '666666',
      player_7_discord_id: '777777',
      player_8_discord_id: '888888',
    },
  });

  console.log({ draftyConfig });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
