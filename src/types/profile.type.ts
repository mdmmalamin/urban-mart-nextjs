import { TUserRole, TUserStatus } from "./auth.type";

export type TGender = "MALE" | "FEMALE";

export type TUser = {
  id: string;
  email: string;
  phone: string;
  role: TUserRole;
  status: TUserStatus;
  passwordChangedAt?: Date;
  userId: string;
  fullName?: string;
  gender?: TGender;
  dateOfBirth?: string;
  avatar?: string;
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
