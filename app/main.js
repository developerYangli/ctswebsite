/**
 * Created by kanily on 16/11/3.
 */
import React from 'react';
import Header from './common/header.js';
import Banner from './component/banner.js';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <Header/>
    <Banner/>
  </div>
  , document.getElementById('app'));
