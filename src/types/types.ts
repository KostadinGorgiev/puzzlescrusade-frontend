import { User as TGUser } from "@telegram-apps/sdk-react";

export type ActivePage =
  | "mine"
  | "boost"
  | "cards"
  | "friends"
  | "earn"
  | "daily-checkin"
  | "battle"
  | "profile";

export type LayoutBackground = "image" | "gradient-color";

export type UserTaskType = "twitter" | "youtube" | "telegram";

export type Task = {
  icon: React.ReactNode;
  title: string;
  type: UserTaskType;
  url: string;
};

export type TaskStatus = "todo" | "done" | "claim";

export type DailyCheckInStatus = "claimed" | "claim" | "disabled";

export type Game = {
  user: User;
};

export type User = {
  id: number;
  t_user_id: number;
  first_name: string;
  last_name: string;
  username: string;
  coin_balance: number;
  level_point: number;
  energy_point: number;
  energy_size_level: number;
  energy_recovery_level: number;
  tap_multipler_level: number;
  last_tap_time: string;
  createdAt: string;
  updatedAt: string;
  serverTime: string;
  photo_url?: string;
  Referrals: Referral[];
  TaskStatuses: UserTaskStatus[];
  DailyCheckIn: DailyCheckIn;
};

export type Referral = {
  id: number;
  user_id: number;
  reffered_user_id: number;
  createdAt: string;
  updatedAt: string;
  User: ReferralUser;
};

export type UserTaskStatus = {
  id: number;
  user_id: number;
  task: UserTaskType;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
};

export type ReferralUser = {
  id: number;
  t_user_id: number;
  first_name: string;
  last_name: string;
  username: string;
  coin_balance: number;
  level_point: number;
  photo_url?: string;
};

export type DailyCheckIn = {
  id: number;
  user_id: number;
  checkedin_count: number;
  createdAt: string;
  updatedAt: string;
  last_check_in: string;
};

export type UserLevel = {
  title: string;
  from: number;
  to: number;
  index?: number;
};

export interface ExpandedTGUser extends TGUser {
  startParam?: string;
}