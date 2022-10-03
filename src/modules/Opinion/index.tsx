import Typography from 'components/Typography';
import TestimonialCard from 'components/TestimonialCard';
import {
  StyledContent,
  StyledTestimonials,
} from './styled';

type TDAta = {
  name: string;
  image: string;
  description: string;
  disabled?: boolean;
};

type OpinionProps = {
  testimonial: TDAta[];
};

const Opinion = ({
  testimonial
}: OpinionProps) => {
  
  return (
    <StyledContent className="container-position">
      <Typography type="subtitle">Opinião de quem conhece</Typography>
      <Typography type="normal">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
      </Typography>
      <StyledTestimonials>
        {testimonial.map((item, index) => (
          !item.disabled && (
            <TestimonialCard data={item} key={index} />
          )
        ))}
      </StyledTestimonials>
    </StyledContent>
  )
};

export default Opinion;
