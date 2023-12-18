TRUNCATE supabase_migrations.schema_migrations;

-- TRUNCATE storage.buckets, storage.objects;
TRUNCATE auth.identities, auth.sessions, auth.refresh_tokens, auth.mfa_amr_claims, auth.mfa_factors, auth.mfa_challenges, auth.users CASCADE;
