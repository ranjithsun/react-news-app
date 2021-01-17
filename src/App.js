import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import NewsHeadlines from './components/NewsHeadlinesComponents/NewsHeadlines';
import Header from './components/HeaderComponents/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import {ContentSection} from './app.style';

import Container from 'react-bootstrap/Container';

//Setup Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Container>
            <Header/>
            <section>
              <ContentSection>
                <div className="main">
                  <Switch>
                    <Route path="/news_headlines">
                      <NewsHeadlines/>
                    </Route>
                    <Route path="/">
                      <NewsHeadlines/>
                    </Route>
                  </Switch>
                </div>
              </ContentSection>
            </section>
          </Container>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
