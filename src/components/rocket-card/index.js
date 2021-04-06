import React from "react";
import styled from "styled-components";
import { device } from "../../helpers";
import Image from "../image";
import Lockup from "../lockup";

const RocketCardWrapper = styled.div`
  display: block;
  align-self: stretch;
  margin-bottom: 30px;
  width: 100%;

  @media ${device.laptop} {
    width: 32%;
  }  
`;

const RocketCardContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column-reverse;  
`;

const ImagContainer = styled.div`
  padding: 40px 20px;
  background-color: #b3c7cc;
  position: relative;
  margin-top: auto;

  img {
    height: 100px;
    width: auto;
    display: block;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  padding: 20px;
  background-color: #f6f7f7;
  flex: 1;
`;

function RocketCard(props) {
  return (
    <RocketCardWrapper>
      <RocketCardContainer>
        <ImagContainer>
          <Image url={props.image} />
        </ImagContainer>

        <Content>
          <Lockup text={props.description} tag="h3" title={props.title} />
          <Lockup text={`Cost per launch: ${props.cost}`} tag="h3" />
        </Content>
      </RocketCardContainer>
    </RocketCardWrapper>
  );
}

export default RocketCard;
