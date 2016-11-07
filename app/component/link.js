/**
 * Created by kanily on 16/11/7.
 */
import React from 'react';
import '../../css/link.css';
import ImgURL from '../../img/personnel_recruitment.png';


export default class Link extends React.Component {

  render() {
    return (
      <div className="wrap link">
        <a href="#" className="fl"><img src={ImgURL}/></a>
        <a href="#" className="fl"><img src={ImgURL}/></a>
        <a href="#" className="fl"><img src={ImgURL}/></a>
      </div>
    );
  }
}