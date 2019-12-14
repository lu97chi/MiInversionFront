import styled, { keyframes } from 'styled-components';

type ContainerBase = {
    delay: any
}

const bounceIn = keyframes`
from,
    20%,
    40%,
    60%,
    80%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
  
    20% {
      transform: scale3d(1.1, 1.1, 1.1);
    }
  
    40% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
  
    60% {
      opacity: 1;
      transform: scale3d(1.03, 1.03, 1.03);
    }
  
    80% {
      transform: scale3d(0.97, 0.97, 0.97);
    }
  
    to {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
`
    
  
export const CardContainer = styled.div<ContainerBase>`    
    opacity: 0;
    animation: .6s ${bounceIn} forwards;
    animation-delay: ${({delay}) => delay};
`;