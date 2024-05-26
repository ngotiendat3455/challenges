/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
/* eslint-disable import/order */
import React, {
} from 'react';
import Container from 'components/organisms/Container';
import Button from 'components/atoms/Button';
import Logo from 'components/atoms/Logo';

type HeaderProps = {

}
const Header: React.FC<HeaderProps> = ({
}) => {
  return (
    <div className="o-header">
      <Container>
        <div className="o-header_wrapperMain">
          <div className="o-header__contentLeft"
          // style={{
          //   height: '24px',
          //   width: '24px'
          // }}
          >
            <Logo />
          </div>
          <div className="o-header__contentRight">
            <Button
              modifiers={[
                'red',
                'minWidth112px'
              ]}
            >
              Top Related
            </Button>
            <Button
              modifiers={[
                'primary',
                'minWidth112px'
              ]}
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
