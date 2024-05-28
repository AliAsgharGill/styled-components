import React from "react";
import styled from "styled-components";
import Button from "../Button";

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  /* background-color: green; */
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: blue;
  font-size: 90px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
`;
const Section = () => {
  return (
    <>
      {/* <Wrapper> */}
      <div>
        <Title>I am Title in Section In Wrapper</Title>
        <h2>Hello i am h2</h2>
        <h3 className="one">I am class One</h3>
        <h3 id="two">I am id two</h3>
        <Button>Click Me!</Button>
      </div>
      {/* </Wrapper> */}
    </>
  );
};

export default Section;
