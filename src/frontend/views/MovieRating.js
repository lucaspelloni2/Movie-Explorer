import React, { Component } from "react";
import StarRatings from "react-star-ratings";

class Bar extends Component {
  render() {
    // aggregateRating = 2.35;
    const maxRating = 10;
    const ratio = this.props.rating / maxRating;
    const numberOfStars = 5;
    const aggregateRating = numberOfStars * ratio;

    return (
      <StarRatings
        numberOfStars={numberOfStars}
        rating={aggregateRating}
        starDimension="15px"
        starSpacing="2px"
        starRatedColor={"#ffd100"}
      />
    );
  }
}
export default Bar;
