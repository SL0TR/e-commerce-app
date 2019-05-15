import styled from "styled-components";

const Item = styled.div`
  background: white;
  box-shadow: ${props => props.theme.bs};
  border-radius: 0.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
  /* overflow: hidden; */
  position: relative;

  .item-thumb {
    width: 100%;
    padding-top: 78%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .card-title {
    font-size: 2.1rem;
    line-height: 2;
    font-weight: 300;
    margin: 0.5rem 0;
    padding: 0 3rem;
    text-align: left;
  }
  .card-desc {
    font-size: 1.5rem;
    line-height: 2;
    font-weight: 300;
    margin: 0.5rem 0;
    text-align: left;
    height: 5rem;
    padding: 0 3rem;
  }
  .buttonList {
    width: 100%;

    button,
    a {
      border: none;
      background: none;
      text-decoration: none;
      cursor: pointer;
    }

    .add-cart--btn {
      margin: 1rem auto;
      margin-bottom: 1.5rem;
      background-color: ${props => props.theme.primary};
      padding: 1.5rem 1.5rem;
      padding-right: 4.5rem;
      color: #eee;
      border-radius: 0.3rem;
      font-weight: bold;
      position: relative;
      text-transform: uppercase;

      &::after {
        content: "+";
        position: absolute;
        right: 1.5rem;
        top: 50%;
        transform: translateY(-50%);
        color: inherit;
        font-weight: inherit;
      }
    }

    .edit-item--btn,
    .delete-item--btn {
      position: absolute;
      left: -2rem;
      top: -2rem;
      z-index: 10;
      border-radius: 50%;
      border: 2px solid ${props => props.theme.green};
      display: flex;
      justify-content: center;
      align-items: center;
      height: 3rem;
      width: 3rem;

      img {
        height: 1.2rem;
        width: 1.2em;
      }
    }

    .delete-item--btn {
      border: 2px solid ${props => props.theme.primary};
      left: initial;
      right: -2rem;
    }
  }

  &:hover {
    transition: all 0.3s ease-out;
    transform: scale(1.05);
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.07);
  }
`;

export default Item;
