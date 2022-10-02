import { useEffect, useCallback, useMemo, useState } from 'react';
import jwt_decode from 'jwt-decode';
import AuthContext from 'store/context/auth';
import { useRouter } from 'next/router';
import * as storage from './storage';

type TContentToken = {
  name?: string;
  email?: string;
  plan?: string;
};

type TToken = {
  jwt: string;
};

const AuthProvider = ({ children }:any) => {
  const router = useRouter();
  const [token, setToken] = useState('');
  const [contentToken, setContentToken] = useState<Partial<TContentToken>>({});

  const saveToken = useCallback((token: TToken) => {
    setToken(token.jwt);
    storage.setAccessToken(token.jwt);
    setContentToken(jwt_decode(token.jwt));
  }, [])

  const cleanToken = useCallback(() => {
    setToken('');
    storage.setAccessToken('');
    setContentToken({});
  }, [])

  const providerValue = useMemo(
    () => ({
      token,
      contentToken,
      saveToken,
      cleanToken,
    }),
    [token, contentToken, saveToken, cleanToken]
  )

  useEffect(() => {
    const getPath = router.asPath;
    const outsideLogged = ['/', '/signin', '/signup', 'to-sign'];
    if(!outsideLogged.find(item => item === getPath)) {
      const fetchData = async () => {
        const data = await fetch('/api/check-token', {
          headers: { Authorization: `Bearer ${token || storage.getAccessToken()}` },
        });
        return data;
      }
  
      fetchData()
      .then(async (response) => {
        console.log('qdp', response);
        if (response.ok) {
          const temp = await response.json();
          saveToken(temp);
        } else {
          cleanToken();
          router.push({
            pathname: 'signin',
          });
        };
      })
    }
  }, []);

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }