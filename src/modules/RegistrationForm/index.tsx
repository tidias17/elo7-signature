import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'store/context/auth';
import { InputText } from 'components/Input';
import { Button } from 'components/Buttons'
import Typography from 'components/Typography';

import {
  StyledContainer,
} from './styled';

type RegistrationProps = {

};

const RegistrationForm = ({

}: RegistrationProps) => {
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
  const disabledSubmit = () => {
    return dataForm.user === '' || dataForm.password === '' ||
      dataForm.user.length < 4 || dataForm.password.length < 4;
  }

  return (
    <StyledContainer className="container-position">
      <Typography type="subtitle">Cadastro</Typography>
      <form onSubmit={handleSubmit}>
        <InputText
          label="Nome"
          type="text"
          name="name"
          input={change}
        />
        <InputText
          label="E-mail"
          type="text"
          name="email"
          input={change}
        />

        <InputText
          label="Senha"
          type="password"
          name="password"
          input={change}
        />
        <Button
          disabled={disabledSubmit()}
        >Assinar</Button>
      </form>
      </StyledContainer>
  )
};

export default RegistrationForm;
