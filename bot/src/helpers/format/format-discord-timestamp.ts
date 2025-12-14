export const formatDiscordTimestamp = (
  unixTimestamp: number,
  options?: { shorten?: boolean },
) => {
  return `<t:${unixTimestamp}:${options?.shorten ? 'd' : 'D'}>`;
};
