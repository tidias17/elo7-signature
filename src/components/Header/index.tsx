import Link from 'next/link';
import { useRouter } from 'next/router';
import { OutlineButton } from 'components/Buttons';
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
  const router = useRouter();
  const currentPath = router.asPath;
  return (
    <StyledHeader>
      <StyledContent>
        <Link href="/">
          <a>
            <Icon name="logo-manga" />
          </a>
        </Link>
        <Typography type="title">{text}</Typography>
        {currentPath !== '/signin' && (
          <Link href="/signin">
            <a>
              <OutlineButton small>Login</OutlineButton>
            </a>
          </Link>
        )}
      </StyledContent>
    </StyledHeader>
  )
};

export default Header;
