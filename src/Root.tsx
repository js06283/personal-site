import React, { Fragment } from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from './redux/store/configureStore';
import ScrollTop from './components/scrollToTop';
import MainRoutes from './routes/MainRoutes';
import GlobalStyle from './style/GlobalStyles';
import registerServiceWorker from './services/sw/registerServiceWorker';
import LogoutRoute from './components/logoutRoute';
import MainLayout from './layout/mainLayout';

// #region types
type Props = any;
type State = any;
// #endregion

// #region constants
const { store } = configureStore({});
// #endregion

class Root extends Component<Props, State> {
  componentDidMount() {
    // register service worker (no worry about multiple attempts to register, browser will ignore when already registered)
    registerServiceWorker();
  }

  componentDidCatch(error: any, info: any) {
    console.log('App error: ', error);
    console.log('App error info: ', info);
    //
  }

  render() {
    return (
      <React.StrictMode>
        <Provider store={store}>
          <ThemeProvider theme={{}}>
            <Router>
              <ScrollTop>
                <Fragment>
                  <Switch>

                    {/* Application with main layout (could have multiple applications with different layouts) */}
                    <Route path="*">
                      <MainLayout>
                        <MainRoutes />
                      </MainLayout>
                    </Route>
                  </Switch>
                </Fragment>
              </ScrollTop>
              <GlobalStyle />
            </Router>
          </ThemeProvider>
        </Provider>
      </React.StrictMode>
    );
  }
}

export default Root;
