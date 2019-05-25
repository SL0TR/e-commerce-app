import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }

`;

const SpinnerStyled = styled.div`
  /* MULTI SPINNER */

  .multi-spinner-container {
    width: 150px;
    height: 150px;
    position: relative;
    margin: 30px auto;
    overflow: hidden;
  }

  .multi-spinner {
    position: absolute;
    width: calc(100% - 9.9px);
    height: calc(100% - 9.9px);
    border: 5px solid transparent;
    border-top-color: ${props => props.theme.primary};
    border-radius: 50%;
    -webkit-animation: ${spin} 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;
    animation: ${spin} 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;
  }
`;

const Spinner = () => {
  return (
    <SpinnerStyled>
      <div class="multi-spinner-container">
        <div class="multi-spinner">
          <div class="multi-spinner">
            <div class="multi-spinner">
              <div class="multi-spinner">
                <div class="multi-spinner">
                  <div class="multi-spinner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SpinnerStyled>
  );
};

export default Spinner;
