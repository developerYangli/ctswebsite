/**
 * Created by kanily on 16/11/6.
 */
import React from 'react';
import '../../css/movie.css';

export default class Movie extends React.Component {

  render() {
    return (
      <div className="movebox wrap">
        <div className="titlebox">形象视频</div>
        <div className="move">
          <div className="movecontent"></div>
          <div className="moverchange">
            <a className="action" href="#" />
            <a href="#" />
          </div>
        </div>
      </div>
    );
  }
}