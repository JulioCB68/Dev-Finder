export const routes = {
  home: "/",
  auth: (code: string) => `/auth?code=${code}`,
};
