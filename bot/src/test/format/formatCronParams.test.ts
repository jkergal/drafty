import { formatCronParams } from '../../helpers/format/formatCronParams';

describe('forCronParams', () => {
  it('should return a string with the correct formatted cron params', () => {
    const cronParams = {
      SECOND: '00',
      MINUTE: '*',
      HOUR: '*',
      DAY_OF_MONTH: '*',
      MONTH: '*',
      DAY_OF_WEEK: '*',
    };

    const expected = '00 * * * * *';
    const result = formatCronParams(cronParams);
    expect(result).toBe(expected);
  });
});