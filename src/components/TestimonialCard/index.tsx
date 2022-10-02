/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Typography from 'components/Typography';
import {
  StyledContent,
} from './styled';

type TData = {
  name: string,
  image: string,
  description: string
};

type TestimonialCardProps = {
  data: TData;
};

const TestimonialCard = ({
  data
}: TestimonialCardProps) => {

  return (
    <StyledContent>
      <Typography type="normal">{data.name}</Typography>
      <Image
        src={`/images/${data.image}`}
        alt={`Icone do ${data.name}`}
        width="40"
        height="40"
      />
      <Typography type="normal">"{data.description}"</Typography>
    </StyledContent>
  )
};

export default TestimonialCard;
