import { Button } from 'components/Buttons'
import Typography from 'components/Typography';
import { Icon } from 'components/Icon';
import {
  StyledContent,
  StyledIcons,
  StyledValue
} from './styled';

type TPeriod = {
  yearly: number,
  semiannual: number,
  monthly: number,
};

type TData = {
  category: string,
  content: string
  periodValue: any,
  quantityProducts: number,
};

type PlansCardProps = {
  data: TData;
  period: string;
};

const PlansCard = ({
  data, period
}: PlansCardProps) => {

  const formatCentsToCurrency = (cents:number, options = { locale: 'pt-BR', currency: 'BRL' }) =>
  new Intl.NumberFormat(options.locale, { style: 'currency', currency: options.currency }).format(cents / 100.0);
  return (
    <StyledContent>
      <Typography type="normal">{data.category}</Typography>
      <StyledIcons>
        <Icon name="tag" /><Icon name="tag" />
        {(data.category === 'intermediary' || data.category === 'plus') && (
          <><Icon name="tag" /><Icon name="tag" /></>
        )}
        {data.category === 'plus' && (
          <><Icon name="tag" /><Icon name="tag" /></>
        )}
      </StyledIcons>
      <StyledValue>
        <Typography type="normal">{formatCentsToCurrency(data.periodValue[period])}</Typography>
      </StyledValue>
      <Typography type="normal">{data.content}</Typography>
      <Button>Escolher o plano {data.category}</Button>
    </StyledContent>
  )
};

export default PlansCard;
