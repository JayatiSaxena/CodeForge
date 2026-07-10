export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  thumbnail: string;
  playlist_url: string;
  duration: string | null;
  instructor: string | null;
  featured: boolean;
  is_published: boolean;
  order_no: number;
  created_at?: string;
  updated_at?: string;
}