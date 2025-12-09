-- CreateTable
CREATE TABLE "drafty_configurations" (
    "id" uuid default extensions.uuid_generate_v4(), 
    "created_at" DATE,
    "enrollment_message_content" VARCHAR NOT NULL,
    "checkin_message_content" VARCHAR NOT NULL,
    "cron" VARCHAR NOT NULL,
    "current_mtg_format" VARCHAR NOT NULL,

    CONSTRAINT "drafty_configurations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enrollment_messages" (
    "id" uuid default extensions.uuid_generate_v4(), 
    "sent_at" DATE,
    "discord_id" VARCHAR NOT NULL,

    CONSTRAINT "enrollment_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_tables" (
    "id" uuid default extensions.uuid_generate_v4(), 
    "pod_id" UUID NOT NULL,
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
    "id" uuid default extensions.uuid_generate_v4(), 
    "enrollment_message_id" UUID NOT NULL,
    "starts_at" DATE NOT NULL,
    "ends_at" date not null,

    CONSTRAINT "pods_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "game_tables" ADD CONSTRAINT "game_tables_pod_id_fkey" FOREIGN KEY ("pod_id") REFERENCES "pods"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pods" ADD CONSTRAINT "pods_enrollment_message_id_fkey" FOREIGN KEY ("enrollment_message_id") REFERENCES "enrollment_messages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

