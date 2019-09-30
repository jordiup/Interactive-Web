import React, {Component} from "react"
import classNames from "classnames"
import WatercolorCanvas from "components//_shared/WatercolorCanvas/WatercolorCanvas"

require('./HomeHeader.scss')

class HomeHeader extends Component {
  getClassName() {
    return classNames("HomeHeader")
  }

  render() {
    return (
      <div className={this.getClassName()}>
        <WatercolorCanvas className="HomeHeader__watercolor-canvas" />
        <div className="HomeHeader__content">
          <div className="HomeHeader__content__text">
            <div className="HomeHeader__content__text__top"></div>
            <h1 className="HomeHeader__content__text__title">Watercolor splotches</h1>

            <div className="HomeHeader__content__text__description">
              forked from Amelia Wattenberger
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeHeader
