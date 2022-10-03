import Link from 'next/link'
import { Button } from 'components/Buttons'
import Typography from 'components/Typography';
import { Icon } from 'components/Icon';
import {
  StyledContent,
  StyledIcons,
  StyledValue
} from './styled';

type TPeriod = {
  anual: number,
  semestral: number,
  mensal: number,
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
        <Typography type="normal">{data.periodValue[period]}</Typography>
      </StyledValue>
      <Typography type="normal">{data.content}</Typography>
      <Link href="/signup">
        <a>
          <Button>Escolher o plano {data.category}</Button>
        </a>
      </Link>
    </StyledContent>
  )
};

export default PlansCard;
