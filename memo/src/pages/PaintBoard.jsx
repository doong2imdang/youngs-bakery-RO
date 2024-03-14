import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

export default function PaintBoard() {
  const canvas = useRef(null);

  const [ctx, setCtx] = useState(undefined);
  const [isPainting, setIsPainting] = useState(false);

  useEffect(() => {
    const canvasCtx = canvas.current.getContext("2d");
    setCtx(canvasCtx);
  }, []);

  const onMove = (e) => {
    if (isPainting && ctx) {
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctx.stroke();
    }
  };

  const startPainting = () => {
    if (ctx) {
      ctx.beginPath();
      setIsPainting(true);
    }
  };

  const cancelPainting = () => {
    setIsPainting(false);
  };

  return (
    <PaintBoardStyle>
      <Canvas
        ref={canvas}
        width={500}
        height={500}
        onMouseMove={onMove}
        onMouseDown={startPainting}
        onMouseUp={cancelPainting}
        onMouseLeave={cancelPainting}
      ></Canvas>
      <div className="btns-colors">
        <ul className="btns">
          <li>
            <button className="draw-mode-btn">Fill</button>
          </li>
          <li>
            <button className="erase-btn" type="button">
              Erase
            </button>
          </li>
          <li>
            <button className="save-btn" type="button">
              Save
            </button>
          </li>
        </ul>
        <ul className="colors">
          <li>
            <input type="color" id="color" />
          </li>
          <li>
            <div
              className="color-option"
              style={{ backgroundColor: "#000000" }}
            ></div>
          </li>
          <li>
            <div
              className="color-option"
              style={{ backgroundColor: "#ffffff" }}
            ></div>
          </li>
          <li>
            <div
              className="color-option"
              style={{ backgroundColor: "#f40407" }}
            ></div>
          </li>
          <li>
            <div
              className="color-option"
              style={{ backgroundColor: "#fcfd07" }}
            ></div>
          </li>
          <li>
            <div
              className="color-option"
              style={{ backgroundColor: "#29fd09" }}
            ></div>
          </li>
          <li>
            <div
              className="color-option"
              style={{ backgroundColor: "#32fefd" }}
            ></div>
          </li>
          <li>
            <div
              className="color-option"
              style={{ backgroundColor: "#1d02fe" }}
            ></div>
          </li>
          <li>
            <div
              className="color-option"
              style={{ backgroundColor: "#fe00ff" }}
            ></div>
          </li>
        </ul>
        <input id="line-width" type="range" min="1" max="10" value="5" />
      </div>
    </PaintBoardStyle>
  );
}

const PaintBoardStyle = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .btns-colors {
    width: 500px;
    display: grid;
    grid-template-areas:
      "btns range"
      "colors range";
    gap: 4px;
    margin-top: 10px;
  }

  .btns {
    grid-area: btns;
    display: flex;
    gap: 7.5px;
  }

  .draw-mode-btn,
  .erase-btn,
  .save-btn {
    width: 70px;
    height: 27px;
    font-size: 18px;
  }

  .colors {
    display: flex;
    grid-area: colors;
    gap: 2px;
    justify-self: start;
    align-items: center;
    background: #e0e0e0;
    padding-right: 2px;
    height: 24px;
    margin-top: 5px;
  }

  #color {
    width: 19px;
    height: 23px;
    padding: 0;
  }

  .color-option {
    width: 20px;
    height: 20px;
    box-shadow: inset 1.5px 1.5px 1px black;
    cursor: pointer;
  }

  #line-width {
    grid-area: range;
    justify-self: end;
    width: 208px;
  }

  input[type="range"] {
    width: 100%;
    appearance: none;
    background: transparent;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #b0b7b8;
    box-shadow: inset -1px -1px 1px black, inset 1px 1px 1px white;
    margin-top: -14px;
    cursor: pointer;
    height: 25px;
    width: 15px;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    box-shadow: -1px -1px 1px #000000, inset 1px 1px 1px white;
  }
`;

const Canvas = styled.canvas`
  width: 500px;
  height: 500px;
  background: #ffffff;
`;
