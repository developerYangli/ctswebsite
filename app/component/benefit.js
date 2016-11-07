/**
 * Created by kanily on 16/11/7.
 */
import React from 'react';
import '../../css/benefit.css';

export default class Benefit extends React.Component {

  render() {
    return (
      <div className="benefit">
        <div className="wrap">
          <div className="titlebox">优惠快讯<a className="red fr" href="#">更多>></a></div>
          <ul className="fl">
            <li><i className="fl iconfire"/><a className="fl" href="#">中旅云支付，优惠享不停</a><em className="fr">[06-30]</em></li>
            <li><i className="fl iconnum">02</i><a className="fl" href="#">中旅云支付，优惠享不停</a><em className="fr">[06-30]</em></li>
            <li><i className="fl iconnum">03</i><a className="fl" href="#">中旅云支付，优惠享不停</a><em className="fr">[06-30]</em></li>
          </ul>
          <div className="titlebox" style={{left:500}}>本行新闻<a className="red fr" href="#">更多>></a></div>
          <ul className="fr">
            <li><i className="fl" /><a className="fl" href="#">焦作中旅银行股份有限公司</a><em className="fr">[2016-04-29]</em></li>
            <li><i className="fl" /><a className="fl" href="#">焦作中旅银行股份有限公司</a><em className="fr">[2016-04-29]</em></li>
            <li><i className="fl" /><a className="fl" href="#">焦作中旅银行股份有限公司</a><em className="fr">[2016-04-29]</em></li>
          </ul>
        </div>
      </div>
    );
  }
}