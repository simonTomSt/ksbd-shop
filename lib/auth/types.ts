export type CurrentUser = {
  id: string;
  email: string;
  firstName: string;
};

export type AuthResponse = {
  user: CurrentUser;
  token: string;
};
