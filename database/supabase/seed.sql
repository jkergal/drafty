-- pgFormatter-ignore

-- uuid prefix :
-- drafty_configurations : 00000000

insert into drafty_configurations
  (id,                                     created_at,     scheduled_message,     checkin_message,     cron,      current_mtg_format) values
  ('00000000-0101-0101-0101-010101010101', now(),          'Scheduled message',   'Checkin message',   '00 * * * * *', 'DND')
;