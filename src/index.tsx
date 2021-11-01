import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled';

import './assets/main.css';

const queryClient = new QueryClient();

const GreetingContainer = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const GreetingMessage = styled.div`
  text-align: center;

  h1 {
    font-size: 1.6rem;
    font-weight: normal;
  }

  code {
    color: #201e2e;
    font-size: 0.9rem;
    vertical-align: middle;
  }
`;

const Entrypoint = () => {
  const welcomeMessage = (
    <GreetingContainer>
      <GreetingMessage>
        <h1>You're ready to go!</h1>
        <p>
          Start editing in <code>src/index.tsx</code>
        </p>
      </GreetingMessage>
    </GreetingContainer>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/">{welcomeMessage}</Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
};

ReactDOM.render(<Entrypoint />, document.getElementById('app'));
