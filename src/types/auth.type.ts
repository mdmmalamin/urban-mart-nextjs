export type TUserRole = "CUSTOMER" | "VENDOR" | "ADMIN" | "SUPER_ADMIN";

export type TUserStatus = "ACTIVE" | "SUSPENDED" | "DELETED";

export type TAuthProps = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  role: TUserRole;
  status: TUserStatus;
  avatar: string;
  iat: number;
  exp: number;
};
