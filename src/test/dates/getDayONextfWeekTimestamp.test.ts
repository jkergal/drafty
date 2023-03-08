import dayjs from 'dayjs';
import { getDayONextfWeekTimestamp } from '../../helpers/dates/getDayONextfWeekTimestamp';

describe('getDayONextfWeekTimestamp', () => {
  describe('When 1 is passed as argument', () => {
    it('should return the timestamp of the next Monday in the following week', () => {
      const expected = dayjs().add(1, 'week').day(1).startOf('day').unix();
      const result = getDayONextfWeekTimestamp(1);
      expect(result).toBe(expected);
    });
  });

  describe('When 2 is passed as argument()', () => {
    it('should return the timestamp of the next Tuesday in the following week', () => {
      const expected = dayjs().add(1, 'week').day(2).startOf('day').unix();
      const result = getDayONextfWeekTimestamp(2);
      expect(result).toBe(expected);
    });
  });

  describe('When 3 is passed as argument()', () => {
    it('should return the timestamp of the next Thursday in the following week', () => {
      const expected = dayjs().add(1, 'week').day(4).startOf('day').unix();
      const result = getDayONextfWeekTimestamp(4);
      expect(result).toBe(expected);
    });
  });

  describe('When 4 is passed as argument()', () => {
    it('should return the timestamp of the next Thursday in the following week', () => {
      const expected = dayjs().add(1, 'week').day(4).startOf('day').unix();
      const result = getDayONextfWeekTimestamp(4);
      expect(result).toBe(expected);
    });
  });

  describe('When 5 is passed as argument()', () => {
    it('should return the timestamp of the next Friday in the following week', () => {
      const expected = dayjs().add(1, 'week').day(5).startOf('day').unix();
      const result = getDayONextfWeekTimestamp(5);
      expect(result).toBe(expected);
    });
  });

  describe('When 6 is passed as argument()', () => {
    it('should return the timestamp of the next Saturday in the following week', () => {
      const expected = dayjs().add(1, 'week').day(6).startOf('day').unix();
      const result = getDayONextfWeekTimestamp(6);
      expect(result).toBe(expected);
    });
  });

  describe('When 7 is passed as argument()', () => {
    it('should return the timestamp of the next Sunday in the following week', () => {
      const expected = dayjs().add(1, 'week').day(0).startOf('day').unix();
      const result = getDayONextfWeekTimestamp(0);
      expect(result).toBe(expected);
    });
  });
});
