// https://fullstackmark.com/post/11/better-software-design-with-clean-architecture
// Working on understanding core clean architecture concepts

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
