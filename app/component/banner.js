/**
 * Created by kanily on 16/11/4.
 */
import React, {Component, PropTypes} from 'react';
import '../../css/banner.css';
import  ImgURL from  '../../img/banner.png';
import { Carousel } from 'antd'
export default class Banner extends React.Component {
  render() {
    return (
      <Carousel className="banner" effect="fade" autoplay>
        <div><img src={ImgURL}/></div>
        <div><img src={ImgURL}/></div>
        <div><img src={ImgURL}/></div>
      </Carousel>
    );
  }
}