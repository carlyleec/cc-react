import React from 'react';
// import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
// import { ApolloProvider } from 'react-apollo';

// GraphQL Client
// import { client } from './modules/gql/gqlClient';


// Routed components
import App from './components/App';
import Home from './components/Home';
import Layout from './components/layout/layout';
import Education from './components/Education';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Design from './components/Design';
import Data from './components/Data';
import Development from './components/Development';

const Routes = props => (
  <Provider store={props.store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route component={Layout}>
          <Route path="education" component={Education}></Route>
          <Route path="experience" component={Experience}></Route>
          <Route path="expertise">
            <IndexRoute component={Expertise} />
            <Route path="design" component={Design}></Route>
            <Route path="development" component={Development}></Route>
            <Route path="data" component={Data}></Route>
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>
);

Routes.propTypes = {
  /* eslint-disable */
  store: React.PropTypes.object.isRequired, 
};

export default Routes;
