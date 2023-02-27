import {
  ChatInputApplicationCommandData,
  Client,
  CommandInteraction,
  Guild,
  GuildEmoji,
  TextChannel,
} from 'discord.js';

export interface DiscordApi {
  getChannel: () => Channels;
  getGuild: () => Guild | undefined;
  getEmojis: () => {
    monday: undefined;
    tuesday: GuildEmoji | undefined;
    wednesday: GuildEmoji | undefined;
    thursday: GuildEmoji | undefined;
    friday: GuildEmoji | undefined;
    saturday: GuildEmoji | undefined;
    sunday: GuildEmoji | undefined;
    async: string;
  };
}

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
