import { ChannelType, Message, ReactionCollector } from 'discord.js';
import { PodParams } from '../../actions/send-text-message';
import { entryReactionsCollectorListener, ReactionParams } from '.';
import { PodNumber } from '@/types/types';

export const entriesCollectingEndListener = (
  collector: ReactionCollector,
  scheduledSentMessage: Message<true>,
  params: PodParams & ReactionParams & { podNumber: PodNumber },
) => {
  collector.on('end', (_, reason) => {
    const { channel1, channel2, hour, podDay, podDiscordTimestamp, podNumber } = params;

    if (reason !== 'limit' || podNumber === 0) return;

    const podChannels = {
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

// const entriesCollectingEndListener = (
//   collector: ReactionCollector,
//   scheduledSentMessage: Message<true>,
//   params: PodParams & ReactionParams
// ) => {
//   collector.on('end', (_, reason) => {
//     const { channel1, channel2, hour, podDay, podDiscordTimestamp, podNumber } = params;

//     if (
//       channel1 === undefined ||
//       channel2 === undefined ||
//       channel1?.type !== ChannelType.GuildText ||
//       channel2?.type !== ChannelType.GuildText
//     )
//       return;

//     //@TODO: get registered people
//     if (reason === 'limit')
//       if (podNumber <= 2) {
//         if (podNumber === 1) {
//           channel1
//             .send('pod1 OK')
//             // .send(
//             //   `------------ \n\nLa **TABLE ${podNumber} ** de ***${podDay} ${podDiscordTimestamp} ${hour}*** a ses 8 joueurs ! \n- <@${usersIdTable[0].toString()}> \n- <@${usersIdTable[1].toString()}> \n- <@${usersIdTable[2].toString()}> \n- <@${usersIdTable[3].toString()}> \n- <@${usersIdTable[4].toString()}> \n- <@${usersIdTable[5].toString()}> \n- <@${usersIdTable[6].toString()}> \n- <@${usersIdTable[7].toString()}> \n\nValidez votre présence en cliquant sur la réaction ✅ en bas de ce message !`,
//             // )
//             .then((sentMessage: Message<true>) => {
//               sentMessage.react('✅');
//             });
//           console.info('✔️ Pod number ' + podNumber + ' is now full');
//           //   usersIdTable = [];
//           console.info(
//             '⚪️ Entries array for the Pod number ' +
//               podNumber +
//               ' successfully cleared : ',
//             //   usersIdTable,
//           );

//           return entryReactionsCollectorListener(scheduledSentMessage, params);
//         }

//         if (podNumber === 2) {
//           channel2
//             // .send(
//             //   `------------ \n\nLa **TABLE ${podNumber} ** de ***${podDay} ${podDiscordTimestamp} ${hour}*** a ses 8 joueurs ! \n- <@${usersIdTable[0].toString()}> \n- <@${usersIdTable[1].toString()}> \n- <@${usersIdTable[2].toString()}> \n- <@${usersIdTable[3].toString()}> \n- <@${usersIdTable[4].toString()}> \n- <@${usersIdTable[5].toString()}> \n- <@${usersIdTable[6].toString()}> \n- <@${usersIdTable[7].toString()}> \n\nValidez votre présence en cliquant sur la réaction ✅ en bas de ce message !`,
//             // )
//             .send('pod2 OK')
//             .then((sentMessage: Message<true>) => {
//               sentMessage.react('✅');
//             });
//           console.info('✔️ Pod number ' + podNumber + ' is now full');
//           //   usersIdTable = [];
//           console.info(
//             '⚪️ Entries array for the Pod number ' +
//               podNumber +
//               ' successfully cleared : ',
//             //   usersIdTable,
//           );

//           return entryReactionsCollectorListener(scheduledSentMessage, params);
//         }
//       } else {
//         scheduledSentMessage.channel.send(
//           `------------ \n\n**ALERT - POD DU ${podDay} ${podDiscordTimestamp} ${hour} :**\n\n 2 tables de pods ont déjà été gérées par votre serviteur dévoué Drafty. \n\nMalheureusement, pour cette **${podNumber}ème table maintenant complète**, vous allez devoir vous débrouiller comme des grands! Créez une catégorie TABLE POD-${podNumber} ainsi que les channels associés, puis postez un message de check-in un peu comme je le fais d'habitude !`,
//         );
//         return entryReactionsCollectorListener(scheduledSentMessage, params);
//       }
//   });
// };
