import { getEmojis } from '@/cache/getEmojis';
import { getGuild } from '@/cache/getGuild';
import { CURRENT_MTG_FORMAT } from '@/constants/DRAFTY';
import { ASYNC_EMOJI } from '@/constants/EMOJIS';
import { getDayONextfWeekTimestamp } from '@/helpers/dates';
import { formatDiscordTimestamp } from '@/helpers/format';
import { Client } from 'discord.js';

export const getScheduledMessage = (client: Client) => {
  const scheduledMessage =
    `**- Ouverture des inscriptions pour la semaine du ${formatDiscordTimestamp(
      getDayONextfWeekTimestamp(1),
      {
        shorten: true,
      },
    )} au ${formatDiscordTimestamp(getDayONextfWeekTimestamp(7), {
      shorten: true,
    })} -** \n\n` +
    `Pour vous inscrire réagissez à ce message avec vos jours de disponibilité : \n\n` +
    `${getEmojis(getGuild(client)).monday} : Lundi ${formatDiscordTimestamp(
      getDayONextfWeekTimestamp(1),
    )} (20h) - Draft ${CURRENT_MTG_FORMAT} \n` +
    `${getEmojis(getGuild(client)).tuesday} : Mardi ${formatDiscordTimestamp(
      getDayONextfWeekTimestamp(2),
    )} (20h) - Draft ${CURRENT_MTG_FORMAT} \n` +
    `${getEmojis(getGuild(client)).wednesday} : Mercredi ${formatDiscordTimestamp(
      getDayONextfWeekTimestamp(3),
    )} (20h) - Draft ${CURRENT_MTG_FORMAT} \n` +
    `${getEmojis(getGuild(client)).thursday} : Jeudi ${formatDiscordTimestamp(
      getDayONextfWeekTimestamp(4),
    )} (20h) - Draft ${CURRENT_MTG_FORMAT} \n` +
    `${getEmojis(getGuild(client)).friday} : Vendredi ${formatDiscordTimestamp(
      getDayONextfWeekTimestamp(5),
    )} (20h30) - Draft ${CURRENT_MTG_FORMAT} \n` +
    `${getEmojis(getGuild(client)).saturday} : Samedi ${formatDiscordTimestamp(
      getDayONextfWeekTimestamp(6),
    )} (20h30) - Draft ${CURRENT_MTG_FORMAT} \n` +
    `${getEmojis(getGuild(client)).sunday} : Dimanche ${formatDiscordTimestamp(
      getDayONextfWeekTimestamp(7),
    )} (20h) - Draft ${CURRENT_MTG_FORMAT} \n` +
    `${ASYNC_EMOJI}  : Dimanche ${formatDiscordTimestamp(
      getDayONextfWeekTimestamp(7),
    )} : Draft Asynchrone (21h) - ${CURRENT_MTG_FORMAT} \n\n` +
    `Dès lors qu'une table de 8 joueurs est complète (*9 réactions sur un emoji, puisque le bot en avait mise une au préalable*), un message de check-in automatique sera posté dans le channel approprié. \n` +
    `Vous serez alors tagués et invités à valider votre présence. \n\n` +
    `Les joueurs inscrits supplémentaires (mais en nombre insuffisant pour constituer une POD) sont considérés comme prioritaires sur les remplacements éventuels (absence de check-in, désistement de dernière minute etc...).`;

  return scheduledMessage;
};
