import React from 'react';
import Container from './Container';


const Layout = props => (
  <Container>
    { props.children }
  </Container>
);

Layout.propTypes = {
  children: React.PropTypes.node,
};

export default Layout;
