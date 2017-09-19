interface IAuthService {
  isAuthenticated(): boolean;
}

class AuthService implements IAuthService {
  isAuthenticated(): boolean {
    return true;
  }
}

export default AuthService;