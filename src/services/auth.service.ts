import { supabase } from "../lib/supabase";
import type { LoginData, RegisterData } from "../types/auth";

class AuthService {
  register(data: RegisterData) {
    return supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });
  }

  login(data: LoginData) {
    return supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
  }

  logout() {
  return supabase.auth.signOut();
}
   async getCurrentUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return { user, error };
}

async resetPassword(email: string) {
    return await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5173/update-password",
    });
  }
  async updatePassword(password: string) {
  return await supabase.auth.updateUser({
    password,
  });
}
  async signInWithGoogle() {
  return await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/`,
    },
  });
}
  getUser() {
    return supabase.auth.getUser();
  }
  

  getSession() {
    return supabase.auth.getSession();
  }
}

export default new AuthService();