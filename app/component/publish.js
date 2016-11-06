/**
 * Created by kanily on 16/11/6.
 */
import React from 'react';
import '../../css/publish.css';


export default class Publish extends React.Component {

  render() {
    return (
      <div className="announce">
        <ul className="wrap">
          <li className="fl"><em className="fl"><i></i>重要公告：</em><a className="fl" href="#">焦作中旅银行股份有限公司纪念币兑换公告</a><span className="timespan fr">[2016-04-29]</span></li>
          <a href="#" className="fr red" >更多>></a>
        </ul>
      </div>
    );
  }
}