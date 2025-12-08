-- pgFormatter-ignore
CREATE FUNCTION public.check_max_entries_per_pod(pod_id uuid) RETURNS boolean
    LANGUAGE plpgsql
    AS $$
BEGIN
    RETURN (SELECT COUNT(*) FROM player_pod WHERE player_pod.pod_id = pod_id) <= 8;
END;
$$;
