import { Icon } from 'components/Icon';
import Typography from 'components/Typography';
import {
  StyledHeader,
  StyledContent,
} from './styled';

type HeaderProps = {

};

const Header = ({

}: HeaderProps) => {
  return (
    <StyledHeader>
      <StyledContent>
        <Icon name="logo-manga" />
        <Typography type="title">Clube de produtos fora de série</Typography>
      </StyledContent>
    </StyledHeader>
  )
};

export default Header;
