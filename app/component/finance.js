/**
 * Created by kanily on 16/11/7.
 */
import React from 'react';
import '../../css/finance.css';

export default class Banner extends React.Component {

  render() {
    return (
      <div className="wrap finance">
        <div className="titlebox">实时金融</div>
        <div className="financecon">
          <ul className="fl">
            <li className="iconlist"></li>
            <li>服务价目表</li>
          </ul>
          <ul className="fl">
            <li className="iconloan"></li>
            <li>贷款利率</li>
          </ul>
          <ul className="fl">
            <li className="icondeposit"></li>
            <li>存款利率</li>
          </ul>
        </div>
      </div>
    );
  }
}