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

  const [period, setPeriod] = useState('anual');
  const periodOptions = ['mensal', 'semestral', 'anual'];

  return (
    <StyledContent className="container-position">
      <Typography type="subtitle">Planos</Typography>
      <Typography type="normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur volutpat mi, a mollis lacus tempor a. Fusce bibendum vitae dolor blandit rutrum. Phasellus ut imperdiet arcu. Vivamus ut tellus odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet metus est. Donec ut purus mi.
      </Typography>
      <StyleContainerPlans>
        <StyleActionPlans>
          {periodOptions.map((item, index) => (
            <div key={index}>
              <input
                type="radio"
                value={item}
                id={item}
                checked={period === item}
                onChange={() => setPeriod(item)}
              />
              <label htmlFor={item}>{item}</label>
            </div>
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
