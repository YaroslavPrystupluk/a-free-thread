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

export const StyleSpinner = styled.div`
	position: relative;
	opacity: 0.7;
	height: 50px;
	width: 50px;
	border: 3px solid transparent;
	border-top-color: ${({ theme }) => theme.colors.star};
	border-radius: 50%;
	animation: spin 2s linear infinite;

	&:before {
		display: block;
		height: 60px;
		width: 60px;
		position: relative;
		content: '';
		border: 3px solid transparent;
		border-radius: 50%;
		border-top-color: ${({ theme }) => theme.colors.primary};
		top: -12px;
		left: -11px;
		animation: spin 3s linear infinite;
	}

	&:after {
		display: block;
		height: 30px;
		width: 30px;
		position: relative;
		content: '';
		border: 3px solid transparent;
		border-radius: 50%;
		border-top-color: ${({ theme }) => theme.colorText.price};
		top: -60px;
		left: 4px;
		right: 36px;
		bottom: 6px;
		animation: spin 4s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
