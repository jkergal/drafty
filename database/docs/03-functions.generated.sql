-- pgFormatter-ignore
CREATE FUNCTION public.check_max_entries_per_pod(_pod_id uuid) RETURNS boolean
    LANGUAGE plpgsql
    AS $$
    begin
        return (select count(*) from player_pod where player_pod.pod_id = _pod_id) <= 8;
    end;
    $$;
