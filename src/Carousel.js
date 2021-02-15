import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }
  // whenever you are doing an event listener , always use arrow function b.c it will guarnettee the "this"
  handleIndexClick = (event) => {
    this.setState({
      //+ Unary Plus  => truns string into a number
      // same thing as parseInt
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            //eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal-thumnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
