"use client";

import { useState } from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export default function AuthForm({
  supabase,
  onAuth,
}: {
  supabase: SupabaseClient;
  onAuth: () => void;
}) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: {
            username,
          }
        },
      });

      setStatus(error ? error.message : "Check your inbox to confirm.");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setStatus(error.message);
    } else {
      setStatus("Signed in successfully");
      router.push("/");
    }
  }

  return (
    <form
      className="relative overflow-hidden rounded-[32px] border border-white-500/30 bg-[#1e1e24] p-8 text-slate-100 shadow-[0_35px_90px_rgba(2,6,23,0.65)]"
      onSubmit={handleSubmit}
    >
      {/* mode switch */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <h3 className="text-xl font-semibold text-white">
          {mode === "signup" ? "Create an account" : "Welcome back"}
        </h3>

        <div className="flex rounded-full border border-white/10 bg-black/[0.3] p-1 text-xs font-semibold text-slate-300">
          {["login", "signup"].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setMode(option as any)}
              className={`rounded-full px-4 py-1 transition ${
                mode === option
                  ? "bg-gray-500/30 text-white shadow shadow-white-500/20"
                  : "text-slate-400"
              }`}
            >
              {option === "login" ? "Login" : "Sign up"}
            </button>
          ))}
        </div>
      </div>

      {/* fields */}
      <div className="mt-6 space-y-4">
        <label className="block text-sm font-medium text-slate-200">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-2 w-full rounded-2xl border border-white/70 bg-[#1c1b1c] px-3 py-2.5"
          />
        </label>

        {mode === "signup" && (
          <label className="block text-sm font-medium text-slate-200">
            Username
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-2 w-full rounded-2xl border border-white/70 bg-[#1c1b1c] px-3 py-2.5"
            />
          </label>
        )}

        <label className="block text-sm font-medium text-slate-200">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="mt-2 w-full rounded-2xl border border-white/70 bg-[#1c1b1c] px-3 py-2.5"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#1c1b1c] px-4 py-2.5 text-sm font-semibold text-white"
      >
        {mode === "login" ? "Login" : "Create account"}
      </button>

      {status && (
        <p className="mt-4 text-sm text-slate-300" aria-live="polite">
          {status}
        </p>
      )}
    </form>
  );
}
