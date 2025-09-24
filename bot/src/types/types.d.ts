import { Tables } from '@database/types/__generated__/database.types';
import {
  ChatInputApplicationCommandData,
  Client,
  CommandInteraction,
  TextChannel,
} from 'discord.js';

export interface Command extends ChatInputApplicationCommandData {
  run: (client: Client, interaction: CommandInteraction) => void;
}

export interface Channels {
  enrollmentsChannel: TextChannel | undefined;
  checkinChannel1: TextChannel | undefined;
  checkinChannel2: TextChannel | undefined;
  checkinAsyncChannel: TextChannel | undefined;
  tutorialChannel: TextChannel | undefined;
}

export type DraftyConfig = {
  max_pod_entries: Tables<'drafty_configurations'>['max_pod_entries'];
  registration_period_in_days: Tables<'drafty_configurations'>['registration_period_in_days'];
  cron: Tables<'drafty_configurations'>['cron'];
  enrollment_message_content: Tables<'drafty_configurations'>['enrollment_message_content'];
  current_mtg_format: Tables<'drafty_configurations'>['current_mtg_format'];
};

export type PodDay = (typeof POD_DAYS)[keyof typeof POD_DAYS];
export type PodDayNumber = PodDay['number'];
export type PodDayName = PodDay['name'];
export type PodDayEmojiName = PodDay['emojiName'];
export type PodNumber = 1 | 2;
