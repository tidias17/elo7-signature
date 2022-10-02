import { createContext, useContext } from 'react'

type TContentToken = {
  name?: string;
  email?: string;
  plan?: string;
};

type TToken = {
  jwt: string;
};

type authContextType = {
  token: string;
  contentToken: TContentToken;
  saveToken: (token: TToken) => void;
  cleanToken: () => void;
};

const authContextDefaultValues: authContextType = {
  token: '',
  contentToken: {} as TContentToken,
  saveToken: () => {},
  cleanToken: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext)
}

export default AuthContext