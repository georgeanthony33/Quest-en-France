import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

class carousel extends React.Component {
  state = {
    currentIndex: 0,
    itemsInSlide: 1,
    responsive: this.props.responsive,
    galleryItems: this.props.items,
  }

  slidePrevPage = () => {
    const currentIndex = this.state.currentIndex - this.state.itemsInSlide
    this.setState({ currentIndex })
  }

  slideNextPage = () => {
    const {
      itemsInSlide,
      galleryItems: { length },
    } = this.state
    let currentIndex = this.state.currentIndex + itemsInSlide
    if (currentIndex > length) currentIndex = length

    this.setState({ currentIndex })
  }

  handleOnSlideChange = (event) => {
    const { item } = event
    this.setState({ itemsInSlide: 1, currentIndex: item })
  }

  render() {
    const { currentIndex, galleryItems, responsive } = this.state

    return (
      <div>
        <AliceCarousel
          items={galleryItems}
          slideToIndex={currentIndex}
          responsive={responsive}
          onInitialized={this.handleOnSlideChange}
          onSlideChanged={this.handleOnSlideChange}
          onResized={this.handleOnSlideChange}
          autoPlayInterval={2000}
          autoPlayDirection="rtl"
          autoPlay={true}
          fadeOutAnimation={true}
          mouseTrackingEnabled={true}
          disableAutoPlayOnAction={true}
          dotsDisabled={true}
          buttonsDisabled={true}
        />
        <div onClick={this.slidePrevPage} className="carousel-button prev">
          <img onClick={this.slidePrevPage} src="https://res.cloudinary.com/drjzlxwhz/image/upload/v1591125826/Icons/previous_q7zsve.svg" className="carousel-button"></img>
        </div>
        <div onClick={this.slideNextPage} className="carousel-button next">
          <img onClick={this.slideNextPage} src="https://res.cloudinary.com/drjzlxwhz/image/upload/v1591125826/Icons/next_j7fydq.svg" className="carousel-button"></img>
        </div>  
      </div>
    )
  }
}

export default carousel