import { Icon } from 'components/Icon';
import Typography from 'components/Typography';
import {
  StyledFooter,
  StyledContent,
} from './styled';

type FooterProps = {

};

const Footer = ({

}: FooterProps) => {
  return (
    <StyledFooter>
      <StyledContent>
        <Icon name="logo-white" />
        <br />
        <Typography type="normal">
          © {new Date().getFullYear()} Elo7 - Todos os direitos reservados.
        </Typography>
      </StyledContent>
    </StyledFooter>
  )
};

export default Footer;
