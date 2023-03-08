export const formatDiscordTimestamp = (unixTimestamp: number, options?: { shorten?: boolean }) => {
  if (options?.shorten) return '<t:' + unixTimestamp + ':d>';

  return '<t:' + unixTimestamp + ':D>';
};
