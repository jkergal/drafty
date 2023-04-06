CREATE TABLE "enrollment_messages" (
  "id" int PRIMARY KEY,
  "sent_at" date,
  "discord_id" varchar
);

CREATE TABLE "pods" (
  "id" int PRIMARY KEY,
  "starts_at" date
);

CREATE TABLE "game_tables" (
  "id" int PRIMARY KEY,
  "completed_at" date,
  "player_1_discord_id" varchar,
  "player_2_discord_id" varchar,
  "player_3_discord_id" varchar,
  "player_4_discord_id" varchar,
  "player_5_discord_id" varchar,
  "player_6_discord_id" varchar,
  "player_7_discord_id" varchar,
  "player_8_discord_id" varchar
);

CREATE TABLE "drafty_configurations" (
  "id" int PRIMARY KEY,
  "created_at" date,
  "scheduled_message" varchar,
  "checkin_message" varchar,
  "cron_date" varchar,
  "current_mtg_format" varchar
);

ALTER TABLE "pods" ADD FOREIGN KEY ("id") REFERENCES "enrollment_messages" ("id");

ALTER TABLE "game_tables" ADD FOREIGN KEY ("id") REFERENCES "pods" ("id");
