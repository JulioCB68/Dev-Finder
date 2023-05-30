export const routes = {
  home: "/",
  auth: (code: string) => `/auth?code=${code}`,
  profile: (name: string) => `/profile/${name}`,
};
