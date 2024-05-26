/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
/* eslint-disable import/order */
import React, {
} from 'react';
import Container from 'components/organisms/Container';

type HeaderProps = {
  
}
const Header: React.FC<HeaderProps> = ({
}) => {
  return (
    <div className="o-header">
      <div className="o-header_wrapperMain">
        <Container>
          <div className="o-header_mobileBar">

          </div>
          some thing
        </Container>
      </div>
    </div>
  );
};

export default Header;
