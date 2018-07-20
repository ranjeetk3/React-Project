// renders the provider with attached store as prop
// renders the router inside of the provider
// from there, see routes.js

import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import history from '../../history'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from '../../routes'
import configureStore from '../../store/config'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../../sagas'

// import global styles
import './style.css'
//import '../../../font-awesome.min.css'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = configureStore(sagaMiddleware)

// run the saga
sagaMiddleware.run(rootSaga)

const appHistory = syncHistoryWithStore(history, store)

export default class Root extends Component {
  componentWillMount() {
    // init Intercom.io
    (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l()
            {var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/b4hxmpwp';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}
			{var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://cdn.socket.io/socket.io-1.4.5.js';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}
            if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
  }
  componentDidMount() {
    // boot Intercom.io
    window.Intercom("boot", {
      app_id: "b4hxmpwp"
    });
  }
  render() {
    return (
      <Provider store={store}>
        <Router history={appHistory}>{routes}</Router>
      </Provider>
    )
  }
}
