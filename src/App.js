import ErrorBoundary from 'components/ErrorBoundary';
import Todo from 'containers/Todo';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/index';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Todo />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
