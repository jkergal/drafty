import { getEmojis } from '@/cache/getEmojis';
import { getDayONextfWeekTimestamp } from '@/helpers/dates';
import { formatDiscordTimestamp } from '@/helpers/format';
import dayjs from 'dayjs';
import { Guild } from 'discord.js';
import { ASYNC_EMOJI } from './DISCORD_SERVER';

export const CURRENT_MTG_FORMAT = 'ONE';

export const scheduledMessage = `**- Ouverture des inscriptions pour la semaine du ${formatDiscordTimestamp(
  getDayONextfWeekTimestamp(1),
  { shorten: true },
)} au ${formatDiscordTimestamp(getDayONextfWeekTimestamp(7), {
  shorten: true,
})} -** \n\n`;
// `Pour vous inscrire réagissez à ce message avec vos jours de disponibilité : \n\n` +
// `${getEmojis(guild).monday} : Lundi ${podTimestampDates.monday} (20h) - Draft ${CURRENT_MTG_FORMAT} \n` +
// `${getEmojis(guild).tuesday} : Mardi ${
//   podTimestampDates.tuesday
// } (20h) - Draft ${CURRENT_MTG_FORMAT} \n` +
// `${getEmojis(guild).wednesday} : Mercredi ${
//   podTimestampDates.wednesday
// } (20h) - Draft ${CURRENT_MTG_FORMAT} \n` +
// `${getEmojis(guild).thursday} : Jeudi ${
//   podTimestampDates.thursday
// } (20h) - Draft ${CURRENT_MTG_FORMAT} \n` +
// `${getEmojis(guild).friday} : Vendredi ${
//   podTimestampDates.friday
// } (20h30) - Draft ${CURRENT_MTG_FORMAT} \n` +
// `${getEmojis(guild).saturday} : Samedi ${
//   podTimestampDates.saturday
// } + " (20h30) - Draft ${CURRENT_MTG_FORMAT} \n` +
// `${getEmojis(guild).sunday} : Dimanche ${
//   podTimestampDates.sunday
// } (20h) - Draft ${CURRENT_MTG_FORMAT} \n` +
// `${ASYNC_EMOJI}  : Dimanche ${podTimestampDates.sunday} : Draft Asynchrone (21h) - ${CURRENT_MTG_FORMAT} \n\n` +
// `Dès lors qu'une table de 8 joueurs est complète (*9 réactions sur un emoji, puisque le bot en avait mise une au préalable*), un message de check-in automatique sera posté dans le channel approprié. \n` +
// `Vous serez alors tagués et invités à valider votre présence. \n\n` +
// `Les joueurs inscrits supplémentaires (mais en nombre insuffisant pour constituer une POD) sont considérés comme prioritaires sur les remplacements éventuels (absence de check-in, désistement de dernière minute etc...).`;
