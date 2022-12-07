import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="max-w-screen-md px-4 w-full mx-auto flex-grow font-body">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
