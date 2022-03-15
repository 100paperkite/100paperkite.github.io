import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="max-w-3xl w-full px-4 py-8 mx-auto flex-grow font-body">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
