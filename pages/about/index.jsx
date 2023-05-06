import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  border: 2px solid white;
  height: 200px;
  width: 500px;
  color: white;
`;

function index() {
  return (
    <>
      <h1 className="text-3xl font-bold text-red-500 underline ">
        this is about page
      </h1>
      <div className="bg-green-900 w-[100%]  h-[400px]">
        <MainDiv className="font-bold text-white ">
          this next js project with two framwork of css tailwind css and
          styled-components with font family of Inter
        </MainDiv>
      </div>
    </>
  );
}

export default index;
