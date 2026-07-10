import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import type { Course } from "../types/Courses";

export default function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .eq("is_published", true)
      .order("order_no", { ascending: true });

    if (error) {
      console.error("Error fetching courses:", error.message);
      setError(error.message);
      setCourses([]);
    } else {
      setCourses(data ?? []);
      setError(null);
    }

    setLoading(false);
  };

  return {
    courses,
    loading,
    error,
    refetch: fetchCourses,
  };
}