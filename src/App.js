import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainContent from './components/admin/MainContent';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <MainContent></MainContent>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
