import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { App } from 'components';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <RecoilRoot>
          <App/>
        </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
