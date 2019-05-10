import styled from 'styled-components';

const Item = styled.div`
  background: white;
  /* border: 1px solid ${props => props.theme.offWhite}; */
  box-shadow: ${props => props.theme.bs};
  border-radius: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  p {
    font-size: 12px;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid ${props => props.theme.lightgrey};
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: ${props => props.theme.lightgrey};
    position: relative;

    & > * {
      background: white;
      cursor: pointer;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }

  &:hover {
    transition: all .3s ease-out;
    transform: scale(1.05);
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.07);
  }
`;

export default Item;
