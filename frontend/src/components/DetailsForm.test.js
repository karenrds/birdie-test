import React from 'react';
import ReactDOM from 'react-dom';
import RecipientSelector from './CareRecepientSelector/CareRecepientSelector';
import { Provider } from 'react-redux';
import store from '../store/store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <RecipientSelector/>
    </Provider>
      ,
    div);
});