-- pgFormatter-ignore
CREATE TABLE public.drafty_configurations (
    id uuid NOT NULL,
    created_at date,
    enrollment_message_content character varying NOT NULL,
    checkin_message_content character varying NOT NULL,
    cron character varying NOT NULL,
    current_mtg_format character varying NOT NULL,
    max_pod_entries integer DEFAULT 8 NOT NULL,
    registration_period_in_days integer DEFAULT 11 NOT NULL
);
ALTER TABLE public.drafty_configurations OWNER TO postgres;
CREATE TABLE public.player_pod (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone,
    player_id uuid NOT NULL,
    pod_id uuid NOT NULL,
    CONSTRAINT max_pod_per_player CHECK (public.check_max_entries_per_pod(pod_id))
);
ALTER TABLE public.player_pod OWNER TO postgres;
CREATE TABLE public.players (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone,
    name text NOT NULL,
    discord_id text NOT NULL
);
ALTER TABLE public.players OWNER TO postgres;
CREATE TABLE public.pods (
    id uuid NOT NULL,
    starts_at date NOT NULL,
    enrollment_message text NOT NULL,
    enrollment_message_discord_id text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone
);
ALTER TABLE public.pods OWNER TO postgres;
ALTER TABLE ONLY public.drafty_configurations
    ADD CONSTRAINT drafty_configurations_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.player_pod
    ADD CONSTRAINT player_pod_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.players
    ADD CONSTRAINT players_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.pods
    ADD CONSTRAINT pods_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.player_pod
    ADD CONSTRAINT unique_player_per_pod UNIQUE (player_id, pod_id);
ALTER TABLE ONLY public.player_pod
    ADD CONSTRAINT player_pod_player_id_fkey FOREIGN KEY (player_id) REFERENCES public.players(id);
ALTER TABLE ONLY public.player_pod
    ADD CONSTRAINT player_pod_pod_id_fkey FOREIGN KEY (pod_id) REFERENCES public.pods(id);
