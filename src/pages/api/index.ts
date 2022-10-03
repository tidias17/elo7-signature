import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  testimonial: TTestimonial[];
  plans: TPlans[];
}

type TTestimonial = {
  name: string;
  image: string;
  description: string;
  disabled?: boolean;
};

type TPlans = {
  category: string;
  periodValue: TPeriodValue;
  quantityProducts: number;
  content: string;
};

type TPeriodValue = {
  anual: number;
  semestral: number;
  mensal: number;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Realiza uma ou mais request's para endpoint genérico do backend,
  // Recebe o retorno dos dados (opnião de clientes, planos ativos, etc)

  // Retorno da primeira request realizada
  const testimonial = [
    {
      name: 'Joaozinho',
      image: 'joaozinho.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit pretium mauris, ut pellentesque tellus laoreet sed. Nulla nisi purus, facilisis ac ipsum non, iaculis.'
    },
    {
      name: 'Pedrinho',
      image: 'pedrinho.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget sagittis tortor. Quisque lectus dolor, suscipit sit amet.'
    },
    {
      name: 'Luizinho',
      image: 'luizinho.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat risus lacus, eu cursus neque vulputate vitae. Fusce sollicitudin ac nunc et.'
    },
    {
      name: 'Jorginho',
      image: 'pedrinho.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat risus lacus, eu cursus neque vulputate vitae. Fusce sollicitudin ac nunc et.',
      disabled: true,
    },
    {
      name: 'Mariazinha',
      image: 'joaozinho.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat risus lacus, eu cursus neque vulputate vitae. Fusce sollicitudin ac nunc et.',
      disabled: true,
    },
  ];

  // Retorno da segunda request realizada
  const plans = [
    {
      category: 'basic',
      periodValue: {
        anual: 123,
        semestral: 234,
        mensal: 345,
      },
      quantityProducts: 2,
      content: 'Envio de 02 (dois) produtos fora de série por mês, de uma categoria a ser definida.'
    },
    {
      category: 'intermediary',
      periodValue: {
        anual: 456,
        semestral: 567,
        mensal: 678,
      },
      quantityProducts: 4,
      content: 'Envio de 04 (quatro) produtos fora de série por mês, de uma categoria a ser definida.'
    },
    {
      category: 'plus',
      periodValue: {
        anual: 789,
        semestral: 890,
        mensal: 901,
      },
      quantityProducts: 6,
      content: 'Envio de 06 (seis) produtos fora de série por mês, de uma categoria a ser definida.'
    }
  ];

  return res.status(201)
    .json({
      testimonial,
      plans,
    });
}
