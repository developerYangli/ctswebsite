/**
 * Created by kanily on 16/11/7.
 */
import React from 'react';
import '../../css/foot.css';
import ImgURL from '../../img/01_hot_fire.png';


export default class Foot extends React.Component {

  render() {
    return (
      <div className="foot">
        <div className="wrap foottop">
          <ul className="fl">
            <li>客服服务热线：0391-96999</li>
            <li>地址：河南省焦作市迎宾路一号</li>
            <li><span>友情链接：</span><a href="#">中旅总社</a><em>|</em><a href="#">深圳安信小额贷款有限责任公司</a><em>|</em><a href="#">金融板块</a></li>
            <li><span></span><a href="#">星赏会</a><em>|</em><a href="#">芒果网</a><em>|</em><a href="#">港中旅</a><em>|</em><a href="#">安信信贷有限公司</a></li>
            <li>©2016 焦作市中旅银行股份有限公司&nbsp;&nbsp;&nbsp;版权所有</li>
          </ul>
          <ul className="fr">
            <li className="fr"><a href="#"><img src={ImgURL}/></a><em>手机银行安卓版</em></li>
            <li className="fr"><a href="#"><img src={ImgURL}/></a><em>手机银行安卓版</em></li>
            <li className="fr"><a href="#"><img src={ImgURL}/></a><em>手机银行安卓版</em></li>
          </ul>
        </div>
        <div className="wrap footbtm">
          <span>豫ICP备06014366号-1 焦公网安备:4108000008号</span>
        </div>
      </div>
    );
  }
}