export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  thumbnail: string;
  playlist_url: string;
  duration: string;
  instructor: string;
  featured: boolean;
  is_published: boolean;
  created_at?: string;
  updated_at?: string;
}