// Interface adapter or gateway

interface AuthService {
  isAuthenticated(): boolean;
}

class AuthService implements AuthService {
  isAuthenticated(): boolean {
    return true;
  }
}

export default AuthService;
