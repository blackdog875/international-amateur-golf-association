

export interface Membership {
  id: string;
  name: string;
  price: number;
  description: string;
  isGift: boolean;
  type?: 'membership' | 'merch' | 'donation' | 'l2-rep' | 'franchise';
  zipCode?: string;
  stateZone?: string;
}

export interface CartItem extends Membership {
  quantity: number;
}

export interface UserInfo {
  email: string;
  firstName: string;
  lastName: string;
  ageGroup: string;
}

export enum AgeGroup {
  GROUP_1 = "49-56",
  GROUP_2 = "57-64",
  GROUP_3 = "65-72",
  GROUP_4 = "73-79",
  GROUP_5 = "80+"
}

export interface TournamentPlayer {
  id: string;
  name: string;
  handicap: number;
  score: number;
  teeTime: string;
}

export interface Charity {
  name: string;
  mission: string;
  icon: string;
}

