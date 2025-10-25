export interface LeaderboardApiResponse {
  message: string;
  leaderboard: Leaderboard[];
}

export interface Leaderboard {
  _id: string;
  email: string;
  name: string;
  referralCode: string;
  credits: number;
}
