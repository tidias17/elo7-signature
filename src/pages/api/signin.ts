import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  jwt: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Realiza request para endpoint do backend,
  // Tratativa de dados, caso necessário (envio de ip ou criptografia de senha, por exemplo)
  // esta ação ocorre no converter específico desta view
  // envia os dados para validação do login (e-mail, senha criptografada, ip)
  // obtenção do devido retorno da solicitação efetuada
  if(req.body.user === 'thiago.almeida@elo7.com') {
    return res.status(201)
      .json({ jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoaWFnby5hbG1laWRhQGVsbzcuY29tIiwibmFtZSI6IlRoaSBBbG1laWRhIiwicGxhbiI6ImludGVybWVkaWFyeSIsImlhdCI6MTUxNjIzOTAyMn0.kyuh1a5Mg5rqsZV-gIwpHSj1s8cCzSsaKGoQlfnQ16U' });
  }
  return res.status(400)
    .json({});
}
