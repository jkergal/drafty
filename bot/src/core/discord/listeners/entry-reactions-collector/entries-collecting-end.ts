import { Channel, ChannelType, Message, ReactionCollector } from 'discord.js';
import { PodParams } from '../../actions/send-text-message';
import { entryReactionsCollectorListener, ReactionParams } from '.';

export const entriesCollectingEndListener = (
  collector: ReactionCollector,
  scheduledSentMessage: Message<true>,
  params: PodParams & ReactionParams & { podNumber: number },
) => {
  collector.on('end', (_, reason) => {
    const { channel1, channel2, hour, podDay, podDiscordTimestamp, podNumber } = params;

    if (reason !== 'limit' || podNumber === 0) return;

    const podChannels: { [key in number]: Channel | undefined } = {
      1: channel1,
      2: channel2,
    };

    const targetChannel = podChannels[podNumber];
    const hasReachedMaxPods =
      targetChannel === undefined || targetChannel.type !== ChannelType.GuildText;

    //@TODO: get entries from db
    if (!hasReachedMaxPods) {
      targetChannel
        .send(`pod${podNumber} OK`)
        .then((sentMessage: Message<true>) => sentMessage.react('✅'));

      console.info(`✔️ Pod number ${podNumber} is now full`);
      console.info(
        `⚪️ Entries array for the Pod number ${podNumber} successfully cleared`,
      );

      return entryReactionsCollectorListener(scheduledSentMessage, params);
    }

    // Pod > 2
    scheduledSentMessage.channel.send(
      `------------ \n\n**ALERT - POD DU ${podDay} ${podDiscordTimestamp} ${hour} :**\n\n` +
        `2 tables de pods ont déjà été gérées par votre serviteur dévoué Drafty.\n\n` +
        `Malheureusement, pour cette **${podNumber}ème table maintenant complète**, ` +
        `vous allez devoir vous débrouiller comme des grands! Créez une catégorie TABLE POD-${podNumber} ` +
        `ainsi que les channels associés, puis postez un message de check-in un peu comme je le fais d'habitude !`,
    );

    entryReactionsCollectorListener(scheduledSentMessage, params);
  });
};
