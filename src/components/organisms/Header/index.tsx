/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
/* eslint-disable import/order */
import React, {
} from 'react';
import Container from 'components/organisms/Container';
import Button from 'components/atoms/Button';
import Logo from 'components/atoms/Logo';
import { useLocation, useNavigate } from 'react-router-dom';

type HeaderProps = {

}
const Header: React.FC<HeaderProps> = ({
}) => {
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;

  return (
    <div className="o-header">
      <Container>
        <div className="o-header_wrapperMain">
          <div className="o-header__contentLeft"
          >
            <Logo />
          </div>
          <div className="o-header__contentRight">
            <Button
              modifiers={[
                !currentPath.includes('/movie/now-playing') ? 'red' : 'primary',
                'minWidth112px'
              ]}
              onClick={() => {
                navigate('/movie/top-movie')
              }}
            >
              Top Related
            </Button>
            <Button
              modifiers={[
                currentPath.includes('/movie/now-playing')  ? 'red' : 'primary',
                'minWidth112px'
              ]}
              onClick={() => {
                navigate('/movie/now-playing')
              }}
            >
              Now Playing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
