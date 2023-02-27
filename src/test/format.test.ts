import { Client, IntentsBitField } from 'discord.js';
import { formatDiscordScheduledMessage, formatDiscordTimestamp } from '../helpers/format';
import { getDayONextfWeekTimestamp } from '../helpers/dates';

describe('formatDiscordTimestamp', () => {
  it('should return a string with the correct format for the given UNIX timestamp', () => {
    const timestamp = 1645598400;
    const expected = '<t:1645598400:D>';
    const result = formatDiscordTimestamp(timestamp);
    expect(result).toBe(expected);
  });

  it('should return a shortened string with the correct format for the given UNIX timestamp if shorten option is true', () => {
    const timestamp = 1645598400;
    const expected = '<t:1645598400:d>';
    const result = formatDiscordTimestamp(timestamp, { shorten: true });
    expect(result).toBe(expected);
  });
});

jest.mock('@/cache/getEmojis', () => ({
  getEmojis: jest.fn(() => ({
    monday: 'mockMondayEmoji',
    tuesday: 'mockTuesdayEmoji',
    wednesday: 'mockWednesdayEmoji',
    thursday: 'mockThursdayEmoji',
    friday: 'mockFridayEmoji',
    saturday: 'mockSaturdayEmoji',
    sunday: 'mockSundayEmoji',
  })),
}));

jest.mock('@/cache/getGuild', () => ({
  getGuild: jest.fn(),
}));

jest.mock('@/constants/DISCORD_SERVER', () => ({
  ASYNC_EMOJI: 'mockAsyncEmoji',
}));

jest.mock('@/constants/DRAFTY', () => ({
  CURRENT_MTG_FORMAT: 'mockMtgFormat',
}));

describe('formatDiscordScheduledMessage', () => {
  let mockClient: Client;

  beforeEach(() => {
    jest.clearAllMocks();

    mockClient = new Client({
      intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMessageReactions,
      ],
    });
  });

  it('formats a Discord scheduled message', () => {
    const openingDate = formatDiscordTimestamp(getDayONextfWeekTimestamp(1), {
      shorten: true,
    });
    const closingDate = formatDiscordTimestamp(getDayONextfWeekTimestamp(7), {
      shorten: true,
    });
    const mondayDate = formatDiscordTimestamp(getDayONextfWeekTimestamp(1));
    const tuesdayDate = formatDiscordTimestamp(getDayONextfWeekTimestamp(2));
    const wednesdayDate = formatDiscordTimestamp(getDayONextfWeekTimestamp(3));
    const thursdayDate = formatDiscordTimestamp(getDayONextfWeekTimestamp(4));
    const fridayDate = formatDiscordTimestamp(getDayONextfWeekTimestamp(5));
    const saturdayDate = formatDiscordTimestamp(getDayONextfWeekTimestamp(6));
    const sundayDate = formatDiscordTimestamp(getDayONextfWeekTimestamp(7));

    const expected = `**- Ouverture des inscriptions pour la semaine du ${openingDate} au ${closingDate} -**`;
    const scheduledMessage = formatDiscordScheduledMessage(mockClient);
    expect(scheduledMessage).toContain(expected);
    expect(scheduledMessage).toContain(
      `Pour vous inscrire réagissez à ce message avec vos jours de disponibilité : \n\n`,
    );
    expect(scheduledMessage).toContain(
      `mockMondayEmoji : Lundi ${mondayDate} (20h) - Draft mockMtgFormat \n`,
    );
    expect(scheduledMessage).toContain(
      `mockTuesdayEmoji : Mardi ${tuesdayDate} (20h) - Draft mockMtgFormat \n`,
    );
    expect(scheduledMessage).toContain(
      `mockWednesdayEmoji : Mercredi ${wednesdayDate} (20h) - Draft mockMtgFormat \n`,
    );
    expect(scheduledMessage).toContain(
      `mockThursdayEmoji : Jeudi ${thursdayDate} (20h) - Draft mockMtgFormat \n`,
    );
    expect(scheduledMessage).toContain(
      `mockFridayEmoji : Vendredi ${fridayDate} (20h30) - Draft mockMtgFormat \n`,
    );
    expect(scheduledMessage).toContain(
      `mockSaturdayEmoji : Samedi ${saturdayDate} (20h30) - Draft mockMtgFormat \n`,
    );
    expect(scheduledMessage).toContain(
      `mockSundayEmoji : Dimanche ${sundayDate} (20h) - Draft mockMtgFormat \n`,
    );
    expect(scheduledMessage).toContain(
      `mockAsyncEmoji  : Dimanche ${sundayDate} : Draft Asynchrone (21h) - mockMtgFormat \n\n`,
    );
    expect(scheduledMessage).toContain(
      `Dès lors qu'une table de 8 joueurs est complète (*9 réactions sur un emoji, puisque le bot en avait mise une au préalable*), un message de check-in automatique sera posté dans le channel approprié. \n`,
    );
    expect(scheduledMessage).toContain(`Vous serez alors tagués et invités à valider votre présence. \n\n`);
    expect(scheduledMessage).toContain(
      `Les joueurs inscrits supplémentaires (mais en nombre insuffisant pour constituer une POD) sont considérés comme prioritaires sur les remplacements éventuels (absence de check-in, désistement de dernière minute etc...).`,
    );
  });
});
