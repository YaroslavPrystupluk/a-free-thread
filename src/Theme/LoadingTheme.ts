import styled from 'styled-components';

export const LoadingContainer = styled.div`
	width: 100%;
	max-width: 300px;
	text-align: center;
	color: #484543;
	position: relative;
	margin: 5% auto;
`;

export const LoadingText = styled.div`
  font-size: 4vw;
  line-height: 64px;
  letter-spacing: 5px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-evenly;
  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    font-size: 3vw;
    letter-spacing: 10px;
}
  span {
    animation: moveLetters 2.6s infinite ease-in-out;
    transform: translateX(0);
    position: relative;
    display: inline-block;
    opacity: 0;
    text-shadow: 0 2px 10px rgba(46, 74, 81, 0.3);
  }
}

@keyframes moveLetters {
  0% {
    transform: translateX(-15vw);
    opacity: 0;
  }

  33.3%, 66% {
    transform: translateX(0);
    opacity: 1;
  }

  100% {
    transform: translateX(15vw);
    opacity: 0;
  }
}`;
