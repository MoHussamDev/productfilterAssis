import React from 'react';
import {
    Switch,
    Route,
    
  } from "react-router-dom";
import Home from './screens/Home';
import {connect} from 'react-redux';


const Routes = (props)=>{
    return(
        <Switch>
        <Route exact path={`/`} render={()=>{
   
          return <Home />
        }
        }/>
        
      </Switch>
    )


}

const mapStateToProps = ({auth: { isHaveAccount, token } }) => ({

  isHaveAccount,
  token
});

export default connect(mapStateToProps)(Routes);






