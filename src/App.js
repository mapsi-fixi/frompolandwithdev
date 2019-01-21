import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostsList from './components/PostsList';
import SinglePost from './components/SinglePost';
import Navigation from './components/Navigation';
import { createGlobalStyle } from 'styled-components';
import posed, {PoseGroup} from 'react-pose';

let GlobalCss = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=UnifrakturMaguntia');
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    font-family: 'Roboto', sans-serif;
    padding: 0;
    height: 100vh;
    margin: 0;
    font-size: 12px;
  }

  img {
    display: block;
    max-width: 100%;
    margin: auto;
  }

  a {

    text-decoration: none;
    color: #000;

    &:hover  {
      color: #737373;
    }
    
  }

`;

const RouteContainer = posed.div({
  
  enter: { opacity: 1, delay: 400 },
  exit: { opacity: 0 }

});

class App extends Component {

  render() {

    return (
        <div>
          <GlobalCss/>
          <Router>
            <Route render={({ location }) => (
              <>
                <Navigation/>
                <PoseGroup>
                  <RouteContainer key={location.key + '_route'}>
                    <Switch location={location}>
                      <Route path='/' exact component={ PostsList } />
                      <Route path='/post/:id' component={ SinglePost } />
                    </Switch>
                  </RouteContainer>
                </PoseGroup>
              </>
            )}/>
            
          </Router>
        </div>
    );
  }
}

export default App;
