export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      drafty_configurations: {
        Row: {
          checkin_message: string
          created_at: string | null
          cron: string
          current_mtg_format: string
          id: string
          scheduled_message: string
        }
        Insert: {
          checkin_message: string
          created_at?: string | null
          cron: string
          current_mtg_format: string
          id: string
          scheduled_message: string
        }
        Update: {
          checkin_message?: string
          created_at?: string | null
          cron?: string
          current_mtg_format?: string
          id?: string
          scheduled_message?: string
        }
        Relationships: []
      }
      enrollment_messages: {
        Row: {
          discord_id: string
          id: string
          sent_at: string | null
        }
        Insert: {
          discord_id: string
          id: string
          sent_at?: string | null
        }
        Update: {
          discord_id?: string
          id?: string
          sent_at?: string | null
        }
        Relationships: []
      }
      game_tables: {
        Row: {
          completed_at: string | null
          id: string
          player_1_discord_id: string | null
          player_2_discord_id: string | null
          player_3_discord_id: string | null
          player_4_discord_id: string | null
          player_5_discord_id: string | null
          player_6_discord_id: string | null
          player_7_discord_id: string | null
          player_8_discord_id: string | null
          pod_id: string
        }
        Insert: {
          completed_at?: string | null
          id: string
          player_1_discord_id?: string | null
          player_2_discord_id?: string | null
          player_3_discord_id?: string | null
          player_4_discord_id?: string | null
          player_5_discord_id?: string | null
          player_6_discord_id?: string | null
          player_7_discord_id?: string | null
          player_8_discord_id?: string | null
          pod_id: string
        }
        Update: {
          completed_at?: string | null
          id?: string
          player_1_discord_id?: string | null
          player_2_discord_id?: string | null
          player_3_discord_id?: string | null
          player_4_discord_id?: string | null
          player_5_discord_id?: string | null
          player_6_discord_id?: string | null
          player_7_discord_id?: string | null
          player_8_discord_id?: string | null
          pod_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "game_tables_pod_id_fkey"
            columns: ["pod_id"]
            referencedRelation: "pods"
            referencedColumns: ["id"]
          }
        ]
      }
      pods: {
        Row: {
          enrollment_message_id: string
          id: string
          starts_at: string
        }
        Insert: {
          enrollment_message_id: string
          id: string
          starts_at: string
        }
        Update: {
          enrollment_message_id?: string
          id?: string
          starts_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "pods_enrollment_message_id_fkey"
            columns: ["enrollment_message_id"]
            referencedRelation: "enrollment_messages"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "buckets_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

