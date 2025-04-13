import React from 'react';
import PropTypes from 'prop-types';

const RouteWithLayout = ({  component: Component }) => {
  return (
      <Component />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.elementType.isRequired,
  path: PropTypes.string
};

export default RouteWithLayout;
