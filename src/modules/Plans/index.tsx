import { useState } from 'react'
import Typography from 'components/Typography';
import PlansCard from 'components/PlansCard';
import {
  StyledContent,
  StyleContainerPlans,
  StyleActionPlans,
  StyleContentPlans
} from './styled';

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

type PlansProps = {
  plans: TPlans[];
};

const Plans = ({
  plans
}: PlansProps) => {

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
