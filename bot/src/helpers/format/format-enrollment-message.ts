/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { Client } from 'discord.js';
import { formatDiscordTimestamp } from './format-discord-timestamp';
import { CURRENT_MTG_FORMAT } from '@/constants/drafty';
import { ASYNC_EMOJI } from '@/constants/emojis';
import { getDayONextfWeekTimestamp } from '../dates/get-day-of-next-wee-timestamp';
import { getEmojis } from '@/core/discord/cache/get-emojis';
import { getGuild } from '@/core/discord/cache/get-guilds';

export const formatEnrollmentMessage = (client: Client) => {
  const enrollmentMessageContent =
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

  return enrollmentMessageContent;
};
