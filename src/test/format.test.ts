import { formatDiscordTimestamp } from '../helpers/format';

describe('formatDiscordTimestamp', () => {
  it('should return a string with the correct format for the given UNIX timestamp', () => {
    const timestamp = 1645598400; // February 23, 2022 at 00:00:00 UTC
    const expected = '<t:1645598400:D>';
    const result = formatDiscordTimestamp(timestamp);
    expect(result).toBe(expected);
  });

  it('should return a shortened string with the correct format for the given UNIX timestamp if shorten option is true', () => {
    const timestamp = 1645598400; // February 23, 2022 at 00:00:00 UTC
    const expected = '<t:1645598400:d>';
    const result = formatDiscordTimestamp(timestamp, { shorten: true });
    expect(result).toBe(expected);
  });
});
