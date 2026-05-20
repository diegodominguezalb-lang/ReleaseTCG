"use client";

import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { AuthPage } from "./authpage";
import { useRouter } from "next/navigation";


type EmailPasswordProps = {
  user: User | null;
};

type Mode = "login" | "signup"

export default function EmailPassword({ user }: EmailPasswordProps) {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const supabase = createClient();
  const [currentUser, setCurrentUser] = useState<User | null>(user);
  const router = useRouter();


  async function handleSignOut() {
    await supabase.auth.signOut();
    setCurrentUser(null);
    setStatus("Signed out successfully");
  }

  // updates user state (logged-in/out) so that the page refreshes accordingly
  // change this so that it routes the user to the home page after loging in/out instead of just 
  //    refreshing the page
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setCurrentUser(session?.user ?? null);
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [supabase])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // this prevents the site from refreshing on submission
    event.preventDefault();

    if (mode == "signup") {
      const { error, data } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/welcome`,
        }
      });
      if (error) {
        setStatus(error.message);
      } else {
        setStatus("Check your inbox to confirm the new account.");
      }
    } else {
      const { error, data } = await supabase.auth.signInWithPassword({
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
  }

  /*
    Take the section at the bottom of the return and reuse it for the signout button in the dashboard
  */
  return (
    <AuthPage
      title="Continue with Email"
    >
      {!currentUser && (
        <>
          <form
            className="relative overflow-hidden rounded-[32px] border border-white-500/30 bg-[#1e1e24] p-8 text-slate-100 shadow-[0_35px_90px_rgba(2,6,23,0.65)]"
            onSubmit={handleSubmit}
          >
            <div
              className="pointer-events-none absolute -left-4 -top-4 -z-10 h-20 w-28 rounded-full bg-[radial-gradient(circle,_rgba(16,185,129,0.25),_transparent)] blur-lg"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-10 right-2 -z-10 h-28 w-40 rounded-full bg-[linear-gradient(140deg,_rgba(45,212,191,0.32),_rgba(59,130,246,0.12))] blur-xl"
              aria-hidden="true"
            />
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {mode === "signup" ? "Create an account" : "Welcome back"}
                </h3>
              </div>
              <div className="flex rounded-full border border-white/10 bg-black/[0.3] p-1 text-xs font-semibold text-slate-300">
                {(["login", "signup"] as Mode[]).map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={mode === option}
                    onClick={() => setMode(option)}
                    className={`rounded-full px-4 py-1 transition ${mode === option
                      ? "bg-gray-500/30 text-white shadow shadow-white-500/20"
                      : "text-slate-400"
                      }`}
                  >
                    {option === "login" ? "Login" : "Sign up"}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <label className="block text-sm font-medium text-slate-200">
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="mt-2 w-full rounded-2xl border border-white/70 bg-[#1c1b1c] px-3 py-2.5 text-base text-white placeholder-slate-500 shadow-inner shadow-black/30 focus:border-white-400 focus:outline-none focus:ring-2 focus:ring-white-400/30"
                  placeholder="you@email.com"
                />
              </label>
              <label className="block text-sm font-medium text-slate-200">
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  minLength={6}
                  className="mt-2 w-full rounded-2xl border border-white/70 bg-[#1c1b1c] px-3 py-2.5 text-base text-white placeholder-slate-500 shadow-inner shadow-black/30 focus:border-white-400 focus:outline-none focus:ring-2 focus:ring-white-400/30"
                  placeholder="At least 6 characters"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#1c1b1c] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-gray-900/30 transition hover:bg-[#dcdcdc] hover:text-black/80 disabled:cursor-not-allowed disabled:bg-white/5"
            >
              {mode === "login" ? "Login" : "Create account"}
            </button>
            {status && (
              <p className="mt-4 text-sm text-slate-300" role="status" aria-live="polite">
                {status}
              </p>
            )}
          </form>
        </>
    )}

    


      <section className="rounded-[28px] border border-white/10 bg-white/5 p-7 text-slate-200 shadow-[0_25px_70px_rgba(2,6,23,0.65)] backdrop-blur">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">Session</h3>
            <p className="mt-1 text-sm text-slate-400">
              {currentUser
                ? "Hydrated by getSession + onAuthStateChange."
                : "Sign in to hydrate this panel instantly."}
            </p>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${currentUser
              ? "bg-white-500/20 text-white-200"
              : "bg-white/10 text-slate-400"
              }`}
          >
            {currentUser ? "Active" : "Idle"}
          </span>
        </div>
        {currentUser ? (
          <>
            <dl className="mt-5 space-y-3 text-sm text-slate-200">
              <div className="flex items-center justify-between gap-6">
                <dt className="text-slate-400">User ID</dt>
                <dd className="font-mono text-xs">{currentUser.id}</dd>
              </div>
              <div className="flex items-center justify-between gap-6">
                <dt className="text-slate-400">Email</dt>
                <dd>{currentUser.email}</dd>
              </div>
              <div className="flex items-center justify-between gap-6">
                <dt className="text-slate-400">Last sign in</dt>
                <dd>
                  {currentUser.last_sign_in_at
                    ? new Date(currentUser.last_sign_in_at).toLocaleString()
                    : "—"}
                </dd>
              </div>
            </dl>
            <button
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-white/10 bg-slate-900/50 p-5 text-sm text-slate-400">
            Session metadata will show up here after a successful sign in.
          </div>
        )}
      </section>
    </AuthPage>
  );
}