import { useParams } from "react-router-dom";

export default function CourseDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold">
          Course Details
        </h1>

        <p className="mt-4 text-gray-600">
          Course ID: {id}
        </p>

        <div className="mt-10 rounded-xl bg-white shadow p-8">
          <h2 className="text-2xl font-semibold">
            Course Title
          </h2>

          <p className="mt-4 text-gray-600">
            This page will display the selected course information fetched
            from your Supabase database.
          </p>

          <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}