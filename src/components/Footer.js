import React from "react";
import styled from "styled-components";

export default function Footer() {
  const StyDiv = styled.div`
    background: #434b58;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const StyButton = styled.button`
    width: 10rem;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    padding: 0.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    background: #151b27;
    border: 0.05rem solid white;
    border-radius: 0.5rem;
  `;
  const StyImg = styled.img`
    width: 8rem;
  `;
  const StyP = styled.p`
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  `;
  const onClickEvent = (e) => {
    window.location.href = "mailto:info-center@hq.nasa.gov";
  };

  return (
    <StyDiv className="footer-div">
      <StyButton onClick={onClickEvent}>Contact Us!</StyButton>
      <StyImg
        src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
        alt=""
        className="picture"
      />
      <StyP>300 Hidden Figures Way SW Washington, DC, USA</StyP>
    </StyDiv>
  );
}
