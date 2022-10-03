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
  const planOptions = ['basic', 'intermediary', 'plus'];
  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    password: '',
    plan: '',
  })
  const change = (value: string, fieldName: string) => {
    setDataForm({ ...dataForm, [fieldName]: value })
  }
  const handleSubmit = async (e:any) => {
		e.preventDefault();
    await fetch('/api/signup', {
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
    return dataForm.name === '' || dataForm.name.length < 4 ||
    dataForm.email === '' || dataForm.email.length < 4 ||
    dataForm.confirmEmail === '' || dataForm.confirmEmail !== dataForm.email ||
    dataForm.password === '' || dataForm.password.length < 4 ||
    dataForm.plan === ''
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
          label="Confirmação de e-mail"
          type="text"
          name="confirmEmail"
          input={change}
        />
        <InputText
          label="Senha"
          type="password"
          name="password"
          input={change}
        />
        <Typography type="normal">Plano:</Typography>
        {planOptions.map((item, index) => (
          <div key={index}>
            <input
              type="radio"
              value={item}
              id={item}
              onChange={() => setDataForm({ ...dataForm, plan: item })}
              checked={dataForm.plan === item}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
        <Button
          disabled={disabledSubmit()}
        >
          Assinar
        </Button>
      </form>
      </StyledContainer>
  )
};

export default RegistrationForm;
