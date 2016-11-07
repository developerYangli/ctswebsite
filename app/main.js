/**
 * Created by kanily on 16/11/3.
 */
import React from 'react';
import Header from './common/header.js';
import Banner from './component/banner.js';
import Publish from './component/publish';
import Movie from './component/movie';
import Service from './component/service';
import Benefit from './component/benefit';
import Introduction from './component/introduction';
import Finance from './component/finance';
import Bank from './component/bank';
import Link from './component/link';
import Foot from './component/foot';


import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <Header/>
    <Banner/>
    <Publish/>
    <Movie />
    <Service />
    <Benefit />
    <Introduction/>
    <Finance/>
    <Bank />
    <Link/>
    <Foot/>
  </div>
  , document.getElementById('app'));
