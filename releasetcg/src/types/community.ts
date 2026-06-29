export type CommunityDeckSummary = {
  id: string;

  title: string;
  description: string;

  author: string;

  leaderId: string | null;
  leaderName: string | null;
  leaderImage: string | null;

  likes: number;
  comments: number;

  createdAt: string;
};