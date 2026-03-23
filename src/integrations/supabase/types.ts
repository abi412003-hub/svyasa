export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      categories: {
        Row: {
          banner_image: string | null
          campus_type: string
          created_at: string | null
          domain_theme: string
          id: string
          is_published: boolean | null
          level: string
          program_slugs: Json | null
          short_title: string
          slug: string
          subtitle: string | null
          title: string
          updated_at: string | null
          why_study: Json | null
        }
        Insert: {
          banner_image?: string | null
          campus_type?: string
          created_at?: string | null
          domain_theme?: string
          id?: string
          is_published?: boolean | null
          level?: string
          program_slugs?: Json | null
          short_title: string
          slug: string
          subtitle?: string | null
          title: string
          updated_at?: string | null
          why_study?: Json | null
        }
        Update: {
          banner_image?: string | null
          campus_type?: string
          created_at?: string | null
          domain_theme?: string
          id?: string
          is_published?: boolean | null
          level?: string
          program_slugs?: Json | null
          short_title?: string
          slug?: string
          subtitle?: string | null
          title?: string
          updated_at?: string | null
          why_study?: Json | null
        }
        Relationships: []
      }
      courses: {
        Row: {
          apply_link: string | null
          banner_image: string | null
          brochure_link: string | null
          campus: string
          campus_type: string
          careers: Json | null
          category: string
          created_at: string | null
          degree: string
          domain_theme: string
          duration: string
          eligibility: Json | null
          fee: Json | null
          highlights: Json | null
          hook_line: string | null
          id: string
          is_published: boolean | null
          learning_journey: Json | null
          overview: Json | null
          quote: Json | null
          related_programs: Json | null
          short_title: string
          slug: string
          stat_callout: Json | null
          testimonials: Json | null
          title: string
          updated_at: string | null
        }
        Insert: {
          apply_link?: string | null
          banner_image?: string | null
          brochure_link?: string | null
          campus?: string
          campus_type?: string
          careers?: Json | null
          category?: string
          created_at?: string | null
          degree?: string
          domain_theme?: string
          duration?: string
          eligibility?: Json | null
          fee?: Json | null
          highlights?: Json | null
          hook_line?: string | null
          id?: string
          is_published?: boolean | null
          learning_journey?: Json | null
          overview?: Json | null
          quote?: Json | null
          related_programs?: Json | null
          short_title: string
          slug: string
          stat_callout?: Json | null
          testimonials?: Json | null
          title: string
          updated_at?: string | null
        }
        Update: {
          apply_link?: string | null
          banner_image?: string | null
          brochure_link?: string | null
          campus?: string
          campus_type?: string
          careers?: Json | null
          category?: string
          created_at?: string | null
          degree?: string
          domain_theme?: string
          duration?: string
          eligibility?: Json | null
          fee?: Json | null
          highlights?: Json | null
          hook_line?: string | null
          id?: string
          is_published?: boolean | null
          learning_journey?: Json | null
          overview?: Json | null
          quote?: Json | null
          related_programs?: Json | null
          short_title?: string
          slug?: string
          stat_callout?: Json | null
          testimonials?: Json | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      faculty_profiles: {
        Row: {
          achievements: string | null
          area_of_expertise: Json | null
          bio: string | null
          contentful_id: string
          created_at: string | null
          department: string | null
          designation: string | null
          display_order: number | null
          email: string | null
          faculty_category: string | null
          google_scholar_url: string | null
          id: string
          is_published: boolean | null
          name: string
          orcid_id: string | null
          phone: string | null
          photo_url: string | null
          publications: string | null
          qualifications: string | null
          research: string | null
          research_interests: Json | null
          responsibility: string | null
          slug: string
          updated_at: string | null
        }
        Insert: {
          achievements?: string | null
          area_of_expertise?: Json | null
          bio?: string | null
          contentful_id: string
          created_at?: string | null
          department?: string | null
          designation?: string | null
          display_order?: number | null
          email?: string | null
          faculty_category?: string | null
          google_scholar_url?: string | null
          id?: string
          is_published?: boolean | null
          name: string
          orcid_id?: string | null
          phone?: string | null
          photo_url?: string | null
          publications?: string | null
          qualifications?: string | null
          research?: string | null
          research_interests?: Json | null
          responsibility?: string | null
          slug: string
          updated_at?: string | null
        }
        Update: {
          achievements?: string | null
          area_of_expertise?: Json | null
          bio?: string | null
          contentful_id?: string
          created_at?: string | null
          department?: string | null
          designation?: string | null
          display_order?: number | null
          email?: string | null
          faculty_category?: string | null
          google_scholar_url?: string | null
          id?: string
          is_published?: boolean | null
          name?: string
          orcid_id?: string | null
          phone?: string | null
          photo_url?: string | null
          publications?: string | null
          qualifications?: string | null
          research?: string | null
          research_interests?: Json | null
          responsibility?: string | null
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      svyasa_events: {
        Row: {
          body: string
          campus: string
          category: string
          created_at: string
          date: string
          end_date: string | null
          gallery_urls: Json
          id: string
          is_published: boolean
          slug: string
          thumbnail_url: string
          title: string
          updated_at: string
        }
        Insert: {
          body?: string
          campus?: string
          category?: string
          created_at?: string
          date?: string
          end_date?: string | null
          gallery_urls?: Json
          id?: string
          is_published?: boolean
          slug: string
          thumbnail_url?: string
          title: string
          updated_at?: string
        }
        Update: {
          body?: string
          campus?: string
          category?: string
          created_at?: string
          date?: string
          end_date?: string | null
          gallery_urls?: Json
          id?: string
          is_published?: boolean
          slug?: string
          thumbnail_url?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      svyasa_news: {
        Row: {
          body: string
          campus: string
          category: string
          created_at: string
          date: string
          gallery_urls: Json
          id: string
          is_featured: boolean
          is_published: boolean
          slug: string
          thumbnail_url: string
          title: string
          updated_at: string
        }
        Insert: {
          body?: string
          campus?: string
          category?: string
          created_at?: string
          date?: string
          gallery_urls?: Json
          id?: string
          is_featured?: boolean
          is_published?: boolean
          slug: string
          thumbnail_url?: string
          title: string
          updated_at?: string
        }
        Update: {
          body?: string
          campus?: string
          category?: string
          created_at?: string
          date?: string
          gallery_urls?: Json
          id?: string
          is_featured?: boolean
          is_published?: boolean
          slug?: string
          thumbnail_url?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "editor"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "editor"],
    },
  },
} as const
