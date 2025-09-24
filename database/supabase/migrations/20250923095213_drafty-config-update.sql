alter table drafty_configurations 
    add column max_pod_entries int not null default 8,
    add column registration_period_in_days int not null default 11;



