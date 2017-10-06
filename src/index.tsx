// https://fullstackmark.com/post/11/better-software-design-with-clean-architecture
// Working on understanding core clean architecture concepts
// An element must not depend on any element belonging to a layer outside its own.
// create-react-app cleanarchitecturereact --scripts-version=react-scripts-ts

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './AppWithRedux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
