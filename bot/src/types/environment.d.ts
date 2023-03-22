/* eslint-disable @typescript-eslint/prefer-namespace-keyword */
declare module NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string;
    GUILD_ID: string;
    ENROLLMENTS_CHANNEL: string;
    CHECKIN_1_CHANNEL: string;
    CHECKIN_2_CHANNEL: string;
    CHECKIN_ASYNC_CHANNEL: string;
    TUTORIAL_CHANNEL: string;
    MONDAY_EMOJI: string;
    TUESDAY_EMOJI: string;
    WEDNESDAY_EMOJI: string;
    THURSDAY_EMOJI: string;
    FRIDAY_EMOJI: string;
    SATURDAY_EMOJI: string;
    SUNDAY_EMOJI: string;
  }
}
