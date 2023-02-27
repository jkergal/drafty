import { ChatInputApplicationCommandData, Client, CommandInteraction, TextChannel } from 'discord.js';

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
