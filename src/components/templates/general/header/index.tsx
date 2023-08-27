import MediaQuery from 'react-responsive';
import DesktopHeader from './desktop';
import MobileHeader from './mobile';

const Header = () => {
  return (
    <>
      <MediaQuery minWidth={0} maxWidth={767}>
        <MobileHeader />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <DesktopHeader />
      </MediaQuery>
    </>
  );
};

export default Header;
