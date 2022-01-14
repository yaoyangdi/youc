import React from 'react';
import './placeCard.css'

function PlaceCard() {
    return (
        <div>
        <div className="map-container">
          <div className="placeDiv">
            <div className="placecard__container">
              <div className="placecard__left">
                <p className="placecard__business-name">YOUC PTY LTD</p>
                <p className="placecard__info">43 Nicholas Drive<br></br>Dandenong South<br></br>VIC 3175</p>
                <a className="placecard__view-large" target="_blank" href="https://www.google.com/maps/place/YOUC+PTY+LTD+_+Food+Packaging/@-38.0371788,145.2008571,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad66b380619beeb:0x505af42bd478ef06!8m2!3d-38.037183!4d145.2030458?hl=en-US" id="A_41">View larger map</a>
              </div> {/* placecard__left */}
              <div className="placecard__right">
                <a className="placecard__direction-link" target="_blank" href="https://www.google.com/maps/dir//YOUC+PTY+LTD+_+Food+Packaging,+Nicholas+Drive,+Dandenong+South+%E7%B6%AD%E5%A4%9A%E5%88%A9%E4%BA%9E%E7%9C%81%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A/@-38.037027,145.1330052,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x6ad66b380619beeb:0x505af42bd478ef06!2m2!1d145.2030458!2d-38.037183?hl=en-US" id="A_9">
                  <div className="placecard__direction-icon" />
                  Directions
                </a>
              </div> {/* placecard__right */}
            </div> {/* placecard__container */}
          </div> {/* placeDiv */}
        </div> {/* map-container */}
        <div id="map-canvas" />
      </div>
    );

}


export default PlaceCard
