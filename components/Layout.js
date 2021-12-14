import Footer from "./Footer";
import Header from "./Header";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
