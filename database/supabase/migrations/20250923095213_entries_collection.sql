alter table drafty_configurations 
    add column max_pod_entries int not null default 8,
    add column registration_period_in_days int not null default 11;

drop table game_tables;

create table players (
    id uuid default extensions.uuid_generate_v4() primary key,
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now(),
    deleted_at timestamp with time zone,
    name text not null,
    discord_id text not null
);

create or replace function check_max_entries_per_pod(pod_id uuid) returns boolean as $$
begin
    return (select count(*) from player_pod where player_pod.pod_id = pod_id) <= 8;
end;
$$ language plpgsql;

create table player_pod (
    id uuid default extensions.uuid_generate_v4() primary key,
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now(),
    deleted_at timestamp with time zone,
    player_id uuid not null references players(id),
    pod_id uuid not null references pods(id),
    constraint unique_player_per_pod unique (player_id, pod_id),
    constraint max_pod_per_player check (check_max_entries_per_pod(pod_id))
);

alter table pods
    add column created_at timestamp with time zone not null default now(),
    add column updated_at timestamp with time zone not null default now(),
    add column deleted_at timestamp with time zone,
    add column pod_date timestamp with time zone not null,
    drop column starts_at,
    drop column ends_at;

alter table enrollment_messages
    drop column sent_at,
    add column created_at timestamp with time zone not null default now(),
    add column updated_at timestamp with time zone not null default now(),
    add column deleted_at timestamp with time zone;