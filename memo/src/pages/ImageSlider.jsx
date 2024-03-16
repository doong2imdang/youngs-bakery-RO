import React from "react";
import styled from "styled-components";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";
import slider3 from "../assets/images/slider3.jpg";
import slider4 from "../assets/images/slider4.jpg";
import slider5 from "../assets/images/slider5.jpg";

export default function ImageSlider() {
  return (
    <SliderStyle>
      <SliderImagesBox>
        <ul className="slider-images">
          <li>
            <img src={slider5} />
          </li>
          <li>
            <img src={slider2} />
          </li>
          <li>
            <img src={slider3} />
          </li>
          <li>
            <img src={slider4} />
          </li>
          <li>
            <img src={slider1} />
          </li>
        </ul>
      </SliderImagesBox>
      <ControlBtns>
        <button className="previous-btn" type="button">
          &lt;
        </button>
        <button className="next-btn" type="button">
          &gt;
        </button>
      </ControlBtns>
      <BulletsStyle>
        <span className="bullet active"></span>
        <span className="bullet"></span>
        <span className="bullet"></span>
        <span className="bullet"></span>
        <span className="bullet"></span>
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
    li {
      img {
        width: 500px;
        height: 100%;
        object-fit: cover;
        vertical-align: top;
        /* transform: translateX(-500px); */
        z-index: 0;
      }
    }
  }
`;

const ControlBtns = styled.div`
  .previous-btn,
  .next-btn {
    width: 24px;
    height: 24px;
    background-color: #d9d9d9;
    border-radius: 50%;
    font-size: 20px;
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
