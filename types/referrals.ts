export interface MyReferralsApiResponse {
  totalReferrals: number;
  credits: number;
  referrals: Referral[];
}

export interface Referral {
  name: string;
  email: string;
  status: string;
  date: Date;
}
