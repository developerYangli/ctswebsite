/**
 * Created by kanily on 16/11/4.
 */
import React from 'react';
import  ImgURL from  '../../img/banner.png';


export default class Banner extends React.Component {

  render() {
    return (
      <div className="banner">
        <img src={ImgURL}/>
      </div>
    );
  }
}