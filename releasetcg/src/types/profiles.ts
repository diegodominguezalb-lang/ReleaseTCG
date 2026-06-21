export type UserRole =
  | "user"
  | "admin";

export type Profile = {
  id: string;

  username: string | null;

  bio: string | null;

  wins: number;
  losses: number;

  role: UserRole;
};