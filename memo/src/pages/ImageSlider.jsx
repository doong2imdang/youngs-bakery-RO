import React, { useState } from "react";
import styled from "styled-components";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";
import slider3 from "../assets/images/slider3.jpg";
import slider4 from "../assets/images/slider4.jpg";
import slider5 from "../assets/images/slider5.jpg";

export default function ImageSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const sliderImages = [slider1, slider2, slider3, slider4, slider5];
  const totalSlides = sliderImages.length;

  const goToSlide = (index) => {
    setCurrentIdx(index);
  };

  const goToNextSlide = () => {
    setCurrentIdx((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIdx((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  return (
    <SliderStyle>
      <SliderImagesBox>
        <ul style={{ transform: `translateX(-${currentIdx * 500}px)` }}>
          {sliderImages.map((image, index) => (
            <li key={index}>
              <img src={image} alt={`slide ${index + 1}`} />
            </li>
          ))}
        </ul>
      </SliderImagesBox>
      <ControlBtns>
        <button
          className="previous-btn"
          type="button"
          onClick={goToPreviousSlide}
        >
          &lt;
        </button>
        <button className="next-btn" type="button" onClick={goToNextSlide}>
          &gt;
        </button>
      </ControlBtns>
      <BulletsStyle>
        {sliderImages.map((_, index) => (
          <span
            key={index}
            className={`bullet ${index === currentIdx ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </BulletsStyle>
    </SliderStyle>
  );
}

const SliderStyle = styled.div`
  width: 500px;
  height: 100%;
  background-color: white;
  margin: 10px auto 0 auto;
  position: relative;
`;

const SliderImagesBox = styled.div`
  height: 100%;
  width: 90%;
  overflow: hidden;
  margin: 0 auto;

  ul {
    display: flex;
    transition: 0.5s;
    li {
      img {
        width: 500px;
        height: 105%;
        object-fit: cover;
        vertical-align: top;
        z-index: 0;
      }
    }
  }
`;

const ControlBtns = styled.div`
  .previous-btn,
  .next-btn {
    width: 35px;
    height: 35px;
    background-color: #d9d9d9;
    border-radius: 50%;
    font-size: 30px;
    line-height: 13px;
  }

  .previous-btn {
    position: absolute;
    top: 50%;
    left: 4%;
    transform: translate(50%, -50%);
  }

  .next-btn {
    position: absolute;
    top: 50%;
    right: 4%;
    transform: translate(-50%, -50%);
  }
`;

const BulletsStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -20px;

  .bullet {
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    z-index: 10;
  }

  .bullet.active {
    background-color: #b0b0b0;
  }
`;
