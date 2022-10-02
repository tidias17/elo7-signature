import { Icon } from 'components/Icon';
import Typography from 'components/Typography';
import {
  StyledHeader,
  StyledContent,
} from './styled';

type HeaderProps = {
  text?: string;
};

const Header = ({
  text = 'Clube de produtos fora de série',
}: HeaderProps) => {
  return (
    <StyledHeader>
      <StyledContent>
        <Icon name="logo-manga" />
        <Typography type="title">{text}</Typography>
      </StyledContent>
    </StyledHeader>
  )
};

export default Header;
