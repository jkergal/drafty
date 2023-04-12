-- CreateTable
CREATE TABLE "drafty_configurations" (
    "id" INTEGER NOT NULL,
    "created_at" DATE,
    "scheduled_message" VARCHAR,
    "checkin_message" VARCHAR,
    "cron_date" VARCHAR,
    "current_mtg_format" VARCHAR,

    CONSTRAINT "drafty_configurations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enrollment_messages" (
    "id" INTEGER NOT NULL,
    "sent_at" DATE,
    "discord_id" VARCHAR,

    CONSTRAINT "enrollment_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_tables" (
    "id" INTEGER NOT NULL,
    "completed_at" DATE,
    "player_1_discord_id" VARCHAR,
    "player_2_discord_id" VARCHAR,
    "player_3_discord_id" VARCHAR,
    "player_4_discord_id" VARCHAR,
    "player_5_discord_id" VARCHAR,
    "player_6_discord_id" VARCHAR,
    "player_7_discord_id" VARCHAR,
    "player_8_discord_id" VARCHAR,

    CONSTRAINT "game_tables_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pods" (
    "id" INTEGER NOT NULL,
    "starts_at" DATE,

    CONSTRAINT "pods_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "game_tables" ADD CONSTRAINT "game_tables_id_fkey" FOREIGN KEY ("id") REFERENCES "pods"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pods" ADD CONSTRAINT "pods_id_fkey" FOREIGN KEY ("id") REFERENCES "enrollment_messages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

