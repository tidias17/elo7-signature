import { useState } from 'react'
import Typography from 'components/Typography';
import PlansCard from 'components/PlansCard';
import {
  StyledContent,
  StyleContainerPlans,
  StyleActionPlans,
  StyleContentPlans
} from './styled';

type PlansProps = {

};

const Plans = ({

}: PlansProps) => {
  // TODO: Obter estes dados de API e fazer lá o retorno apenas de itens não disabilitados
  // Fazer tb as devidas conversões do valor apresentado a tela.
  const plans = [
      {
        category: 'basic',
        periodValue: {
          yearly: 123,
          semiannual: 234,
          monthly: 345,
        },
        quantityProducts: 2,
        content: 'Envio de 02 (dois) produtos fora de série por mês, de uma categoria a ser definida.'
      },
      {
        category: 'intermediary',
        periodValue: {
          yearly: 456,
          semiannual: 567,
          monthly: 678,
        },
        quantityProducts: 4,
        content: 'Envio de 04 (quatro) produtos fora de série por mês, de uma categoria a ser definida.'
      },
      {
        category: 'plus',
        periodValue: {
          yearly: 789,
          semiannual: 890,
          monthly: 901,
        },
        quantityProducts: 6,
        content: 'Envio de 06 (seis) produtos fora de série por mês, de uma categoria a ser definida.'
      }
  ];

  const [period, setPeriod] = useState('yearly');
  const periodOptions = ['monthly', 'semiannual', 'yearly'];

  return (
    <StyledContent className="container-position">
      <Typography type="subtitle">Planos</Typography>
      <Typography type="normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur volutpat mi, a mollis lacus tempor a. Fusce bibendum vitae dolor blandit rutrum. Phasellus ut imperdiet arcu. Vivamus ut tellus odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet metus est. Donec ut purus mi.
      </Typography>
      <StyleContainerPlans>
        <StyleActionPlans>
          {periodOptions.map((item, index) => (
            <>
              <input
                type="radio"
                value={item}
                id={item}
                checked={period === item}
                onChange={() => setPeriod(item)}
                key={index}
              />
              <label htmlFor={item}>{item}</label>
            </>
          ))}
        </StyleActionPlans>
        <StyleContentPlans>
          {plans.map((item, index) => (
            <PlansCard
              key={index}
              data={item}
              period={period}
            />
          ))}
        </StyleContentPlans>
      </StyleContainerPlans>
    </StyledContent>
  )
};

export default Plans;
