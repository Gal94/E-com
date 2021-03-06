import styled from "styled-components";
import CustomButton from "../costum-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position:relative;
  &:hover {
    div {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display:flex;
    }
  }
`;

export const CollectionImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    transition: opacity 0.5s;
`;

export const Button = styled(CustomButton)`
    width: 80%;
    opacity: 0;
    position: absolute;
    top: 255px;
    transition: 0.5s;
`;

export const CollectionFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      width: 90%;
      margin-bottom: 15px;
    }

    .price {
      text-align: right;
      width: 10%;
    }
`;
