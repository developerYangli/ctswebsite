/**
 * Created by kanily on 16/11/7.
 */
import React from 'react';
import '../../css/intruduction.css';
import  ImgURL from  '../../img/logo.png';




export default class Introduction extends React.Component {

  render() {
    return (
      <div className="wrap introduce">
        <div className="titlebox">业务介绍</div>
        <div className="introcon">
          <ul className="fl">
            <li>公司金融服务</li>
            <li><img src={ImgURL} /></li>
            <li><i></i><a href="#">经营性物业抵押贷款</a></li>
            <li><i></i><a href="#">经营性物业抵押贷款</a></li>
            <li><i></i><a href="#">经营性物业抵押贷款</a></li>
            <li><i></i><a href="#">经营性物业抵押贷款</a></li>
            <li><i></i><a href="#">经营性物业抵押贷款</a></li>
            <li><i></i><a href="#">经营性物业抵押贷款</a></li>
          </ul>
          <ul className="fl">
            <li>个人金融服务</li>
            <li><img src={ImgURL} /></li>
            <li><i></i><a href="#">经营性物业抵押贷款</a></li>
            <li><i></i><a href="#">经营性物业抵押贷款</a></li>
            <li><i></i><a href="#">经营性物业抵押贷款</a></li>
            <li><i></i><a href="#">经营性物业抵押贷款</a></li>
            <li><i></i><a href="#">经营性物业抵押贷款</a></li>
            <li><i></i><a href="#">经营性物业抵押贷款</a></li>
          </ul>
          <ul className="fl">
            <li>电子银行服务</li>
            <li><img src={ImgURL} /></li>
            <li><i></i><a href="#">经营性物业抵押贷款</a></li>
            <li><i></i><a href="#">经营性物业抵押贷款</a></li>
            <li><i></i><a href="#">经营性物业抵押贷款</a></li>
            <li><i></i><a href="#">经营性物业抵押贷款</a></li>
            <li><i></i><a href="#">经营性物业抵押贷款</a></li>
            <li><i></i><a href="#">经营性物业抵押贷款</a></li>
          </ul>
        </div>
      </div>
    );
  }
}