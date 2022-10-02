import Typography from 'components/Typography';
import TestimonialCard from 'components/TestimonialCard';
import {
  StyledContent,
  StyledTestimonials,
} from './styled';

type OpinionProps = {

};

const Opinion = ({

}: OpinionProps) => {
  // TODO: Obter estes dados de API e fazer lá o retorno apenas de itens não disabilitados
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
      name: 'Luizinho',
      image: 'luizinho.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat risus lacus, eu cursus neque vulputate vitae. Fusce sollicitudin ac nunc et.',
      disabled: true,
    },
  ];
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
