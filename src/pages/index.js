import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import screenshot from "../images/iPhone7.png"
import logo from "../images/cocktail.png"
import "../components/layout.css"
const Landing = styled.div`
  min-width: 100%;
  min-height: 100vh;
  margin: 0px;
  color: #f2f2f2;
  background: linear-gradient(
    196.16deg,
    #d49185 14.32%,
    #b07d7f 37.01%,
    #9f747c 47.67%,
    #765d75 77.09%,
    #594d70 111.57%
  );
  display: grid;

  img {
    max-width: 100%;
    width: 100%;
  }

  h1 {
    font-family: "Josefin Sans" !important;
    font-size: 42px;
  }
  .image-section {
    display: flex;
    justify-self: center;
    align-items: center;
    margin-bottom: 0px;
  }
  .text {
    text-align: center;
    margin-top: 24px;
    margin-bottom: 0px;
    .text-div {
    }
  }

  @media (min-width: 1025px) {
    grid-template-columns: 50% 50%;
    font-family: "Josefin Sans" !important;
    h1 {
      font-size: 86px;
    }
    img {
      height: 800px;
      width: unset;
    }
    .text {
      display: flex;
      justify-self: right;
      align-items: center;
      .text-div {
        width: 600px;
        text-align: left;
        padding-left: 50px;
      }
    }
  }
`
const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>NightLite</title>
      <link rel="icon" type="image/png" href={logo} sizes="16x16" />
    </Helmet>
    <Landing>
      <div className="text">
        <div className="text-div">
          <h1>The night is still young. Own it. </h1>
        </div>
      </div>
      <div className="image-section">
        <img src={screenshot} />
      </div>
    </Landing>
  </>
)

export default IndexPage
