import styled from 'styled-components';

const Item = styled.div`
  background: white;
  /* border: 1px solid ${props => props.theme.offWhite}; */
  box-shadow: ${props => props.theme.bs};
  border-radius: .5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
  overflow: hidden;
  /* width: 33rem; */
  /* margin: 2rem 1rem; */

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
    /* flex-grow: 1; */
    margin: .5rem 0;
    padding: 0 3rem;
    text-align: left;
  }
  .card-desc {
    font-size: 1.5rem;
    line-height: 2;
    font-weight: 300;
    /* flex-grow: 1; */
    margin: .5rem 0;
    text-align: left;
    padding: 0 3rem;
  }
  .buttonList {
    width: 100%;

    .add-cart--btn {
      border: none;
      background: none;
      cursor: pointer;
      margin: 1rem auto;
      margin-bottom: 1.5rem;
      background-color: ${props => props.theme.primary};
      padding: 1.5rem 1.5rem;
      padding-right: 4.5rem;
      color: #eee;
      border-radius: .3rem;
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
  }

  &:hover {
    transition: all .3s ease-out;
    transform: scale(1.05);
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.07);
  }
`;

export default Item;
