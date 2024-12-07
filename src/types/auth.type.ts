export type TAuthProps = {
  _id: string;
  name: string;
  email: string;
  mobileNumber: string;
  role: "USER" | "ADMIN" | "SUPER_ADMIN";
  status: "ACTIVE" | "BLOCKED";
  profilePhoto: string;
  iat: number;
  exp: number;
};
