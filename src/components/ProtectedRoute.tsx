
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const { session, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return children;
}