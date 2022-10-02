import { ReactNode } from 'react';
import { AuthProvider } from './auth/index';

type Props = { children?: ReactNode }

function AppProviders({ children }: Props) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default AppProviders