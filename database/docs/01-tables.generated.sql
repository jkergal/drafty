-- pgFormatter-ignore
CREATE TABLE public.drafty_configurations (
    id uuid NOT NULL,
    created_at date,
    scheduled_message character varying NOT NULL,
    checkin_message character varying NOT NULL,
    cron character varying NOT NULL,
    current_mtg_format character varying NOT NULL
);
ALTER TABLE public.drafty_configurations OWNER TO postgres;
CREATE TABLE public.enrollment_messages (
    id uuid NOT NULL,
    sent_at date,
    discord_id character varying NOT NULL
);
ALTER TABLE public.enrollment_messages OWNER TO postgres;
CREATE TABLE public.game_tables (
    id uuid NOT NULL,
    pod_id uuid NOT NULL,
    completed_at date,
    player_1_discord_id character varying,
    player_2_discord_id character varying,
    player_3_discord_id character varying,
    player_4_discord_id character varying,
    player_5_discord_id character varying,
    player_6_discord_id character varying,
    player_7_discord_id character varying,
    player_8_discord_id character varying
);
ALTER TABLE public.game_tables OWNER TO postgres;
CREATE TABLE public.pods (
    id uuid NOT NULL,
    enrollment_message_id uuid NOT NULL,
    starts_at date NOT NULL
);
ALTER TABLE public.pods OWNER TO postgres;
ALTER TABLE ONLY public.drafty_configurations
    ADD CONSTRAINT drafty_configurations_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.enrollment_messages
    ADD CONSTRAINT enrollment_messages_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.game_tables
    ADD CONSTRAINT game_tables_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.pods
    ADD CONSTRAINT pods_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.game_tables
    ADD CONSTRAINT game_tables_pod_id_fkey FOREIGN KEY (pod_id) REFERENCES public.pods(id);
ALTER TABLE ONLY public.pods
    ADD CONSTRAINT pods_enrollment_message_id_fkey FOREIGN KEY (enrollment_message_id) REFERENCES public.enrollment_messages(id);
