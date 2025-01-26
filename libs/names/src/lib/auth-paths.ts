export type AuthPaths = {
  login: string;
  loginWithSSO: string;
  logout: string;
  logoutAll: string;
  signup: string;
  forgotPassword: string;
  resetPassword: string;
};

export function authPaths(prefix = ''): AuthPaths {
  const px = prefix ? prefix + '/' : '';
  return {
    login: `${px}login`,
    loginWithSSO: `${px}login-with-sso`,
    logout: `${px}logout`,
    logoutAll: `${px}logout-all`,
    forgotPassword: `${px}forgot-password`,
    resetPassword: `${px}reset-password`,
    signup: `${px}signup`,
  };
}
