/**
 * Created by kanily on 16/11/4.
 */
import React from 'react';
import '../../css/header.css';

var Head = React.createClass({
  render() {
    return (
      <div className="topmenu">
        <ul className="wrap">
          <li className="fl">欢迎访问焦作中旅银行网站</li>
          <li className="fr">
            <a href="#">焦作中旅银行自助设备一览表</a>
            <em>|</em>
            <a href="#">人才招聘</a>
            <em>|</em>
            <a href="#">加入收藏</a>
          </li>
        </ul>
      </div>
    );
  }
});

var Logo = React.createClass({
  render() {
    return (
      <div className="wrap logobox">
        <div className="searchbox fr">
            <span>
                <input type="text" name="search"/>
                <a href="#" className="search-button" />
            </span>
          <a href="#">高级搜索</a>
        </div>
      </div>
    );
  }
});



export default class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <Head/>
        <Logo/>
      </div>
    );
  }
}