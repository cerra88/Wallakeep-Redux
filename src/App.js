import React from 'react';
import Register from "./components/Register/Register";
import List from "./components/advert/List"
import DetailAd from "./components/advert/DetailAd"
import Editnew from "./components/advert/Editnew"
import ErrorBoundary from "./components/advert/ErrorBundary"
import { UserProvider } from './context/user';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.updateUser = this.updateUser.bind(this);
    this.state = {
      user: {},
      updateUser: this.updateUser
    };
    
	}

	updateUser(user) {
    this.setState({ user })
	}
  
  render(){
    return(
      
      <ErrorBoundary>
        <Provider store={this.props.store}>
				<UserProvider value={this.state}>
        <Router>
          <Switch>
              <Route exact path="/" component={Register} />
              <Route exact path="/advert" component={List} />
              <Route exact path="/advert/:adId" component={DetailAd} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/editnew/:adId" component={Editnew} />
              <Route exact path="/editnew" component={Editnew} />
              <Route component={List}/>
          </Switch>
        </Router>
        </UserProvider>  
        </Provider>
			</ErrorBoundary>
  
    );
  }
}