/**
 * Created by kanily on 16/11/7.
 */
import React from 'react';
import '../../css/service.css';


export default class Service extends React.Component {

  render() {
    return (
      <div className="wrap service">
        <div className="titlebox">便捷服务</div>
        <ul>
          <li className="icon-internet" />
          <li>网点服务</li>
        </ul>
        <ul>
          <li className="icon-own" />
          <li>自助服务</li>
        </ul>
        <ul>
          <li className="icon-hotel" />
          <li>酒店预订</li>
        </ul>
        <ul>
          <li className="icon-airplane" />
          <li>机票预订</li>
        </ul>
      </div>
    );
  }
}