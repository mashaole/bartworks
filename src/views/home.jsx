import React from 'react'
import Meta from "../components/meta"
import './home.css'
import classNames from 'classnames';

var description = "B Artworks Gallery Be Artworks and Aspire to Inspire. View Galleries ,Paintings, Artworks, Clothing Designs and Exhibitions."
var title = "Home - B Artworks Gallery"
var keywords = "B Artworks Gallery,B Artworks,Artworks,Art,Visual,Boitumelo Diseko,Nelson,Nelson Makamo,Visual Artist,South African,South African Artist,Galleries,Paintings,Artworks,Design,Clothing,Exhibitions,Contact"
var image = "https://res.cloudinary.com/ddjvdcads/image/upload/v1640020420/b%20artworks_2021-12-20_19_11/exhibit/j9qxwbk3cjtnh7ohcyft.jpg"

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.IMAGE_PARTS = 4;
    this.changeTO = null;
    this.AUTOCHANGE_TIME = 5000;
    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };

  }

  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }

  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }

  goToPage(page) {
    location.href = page;
  }

  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;

    { <Meta Description={description} Title={title} Keywords={keywords} Image={image} /> }
    return /*#__PURE__*/(
      React.createElement("div", { className: classNames('slider', { 's--ready': sliderReady }) }, /*#__PURE__*/
        React.createElement("div", { className: "slider__slides" },
          slides?.map((slide, index) => /*#__PURE__*/
            React.createElement("div", {
              className: classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index }),
              key: slide.text
            }, /*#__PURE__*/

              React.createElement("div", { className: "slider__slide-content" }, /*#__PURE__*/ /*#__PURE__*/
                React.createElement("h2", { className: "slider__slide-heading" },
                  slide.text.split('').map((l, i) => /*#__PURE__*/React.createElement("span", { onClick: () => this.goToPage("/" + slide.text.toLowerCase()), key: i }, l)))), /*#__PURE__*/

              React.createElement("div", { className: "slider__slide-parts" },
                [...Array(this.IMAGE_PARTS).fill()].map((x, i) => /*#__PURE__*/
                  React.createElement("div", { className: "slider__slide-part", key: i }, /*#__PURE__*/
                    React.createElement("div", { className: "slider__slide-part-inner", style: { backgroundImage: `url(${slide.img})` } }))))))), /*#__PURE__*/
        React.createElement("div", { className: "slider__control", onClick: () => this.changeSlides(-1) }), /*#__PURE__*/
        React.createElement("div", { className: "slider__control slider__control--right", onClick: () => this.changeSlides(1) })
      ));
  }
}

const slides = [
  {
    text: 'ARTWORKS',
    img: 'https://res.cloudinary.com/ddjvdcads/image/upload/v1641631083/b%20artworks_2021-12-20_19_11/art/qsoonv9qcwkeawy11ro4.jpg'
  },

  {
    text: 'CLOTHING',
    img: 'https://res.cloudinary.com/ddjvdcads/image/upload/v1641631081/b%20artworks_2021-12-20_19_11/art/epfavozgigmq87ygp2jg.jpg'
  },

  {
    text: 'ARTIST',
    img: 'https://res.cloudinary.com/ddjvdcads/image/upload/v1640020431/b%20artworks_2021-12-20_19_11/art/viavexxb8mxuoyvd2yra.jpg'
  },

  {
    text: 'EXHIBITIONS',
    img: 'https://res.cloudinary.com/ddjvdcads/image/upload/v1640020441/b%20artworks_2021-12-20_19_11/art/vmpv8yabk910qvzqweeu.jpg'
  }];

