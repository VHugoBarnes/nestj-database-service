export type authProviderType = "google" | "apple" | "facebook" | "email";

export class User {
  _id: string;
  full_name: string;
  username: string;
  email: string;
  auth_provider: authProviderType;
  profile_photo: string;
  phone_number: string;
  date_of_birth?: Date;
  password?: string;
  deleted: boolean;
  created_at: number;
}