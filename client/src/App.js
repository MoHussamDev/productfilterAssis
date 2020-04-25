import React from 'react';
import Header from './partials/header';
import './scss/Main.scss';
import Routes from './routes';
import {connect} from 'react-redux'; 
import PreLoader from './partials/loader';

function App() {

  return (

    <PreLoader>
    <Header/>
    <Routes />
    </PreLoader>

  );
}

const mapStateToProps = ({auth: { isHaveAccount, token } }) => ({

  isHaveAccount,
  token
});

export default connect(mapStateToProps)(App);
