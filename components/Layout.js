import Navbar from './Navbar';
import Footer from './Footer';
import GoBackButton from './GoBackButton';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <GoBackButton />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
