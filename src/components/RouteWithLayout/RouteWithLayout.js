import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../Elements/NavBar';
import Footer from '../Elements/Footer/Footer';

const RouteWithLayout = ({  component: Component }) => {
  return (
    <>
    <NavBar/>
    <Component />
    <Footer/>
    </>
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.elementType.isRequired,
  path: PropTypes.string
};

export default RouteWithLayout;
