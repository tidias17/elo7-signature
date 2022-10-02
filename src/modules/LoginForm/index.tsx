import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'store/context/auth';
import { InputText } from 'components/Input';
import { Button } from 'components/Buttons'
import Typography from 'components/Typography';

import {
  StyledContainer,
} from './styled';

type DetashProps = {

};

const Detash = ({

}: DetashProps) => {
  const router = useRouter();
  const { saveToken, cleanToken } = useAuth();
  const [dataForm, setDataForm] = useState({
    user: '',
    password: '',
  })
  const change = (value: string, fieldName: string) => {
    setDataForm({ ...dataForm, [fieldName]: value })
  }
  const handleSubmit = async (e:any) => {
		e.preventDefault();
    await fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization,true'
      },
      body: JSON.stringify(dataForm),
    })
    .then(async (response) => {
      if (response.ok) {
        saveToken(await response.json());
        router.push({
          pathname: '/system/dashboard',
        });
      } else {
        cleanToken();
      }
    });
	}
  return (
    <StyledContainer className="container-position">
      <Typography type="subtitle">Login</Typography>
      <form onSubmit={handleSubmit}>
        <InputText
          label="Usuário"
          type="text"
          name="user"
          input={change}
        />
        <InputText
          label="Senha"
          type="password"
          name="password"
          input={change}
        />
        <Button>Acessar</Button>
      </form>
      </StyledContainer>
  )
};

export default Detash;
