import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 80em;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  justify-content: center;
  min-height: 100vh;
  padding: 1em;
  width: 100%;
`;

export const h1 = styled.h1`
  animation: text-shadow 1.5s ease-in-out infinite;
  font-size: 5em;
  font-weight: 900;
  line-height: 1;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes text-shadow {
    0% {
      transform: translateY(0);
      text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
    }

    20% {
      transform: translateY(-1em);
      text-shadow: 0 0.125em 0 #0c2ffb, 0 0.25em 0 #2cfcfd, 0 -0.125em 0 #fb203b,
        0 -0.25em 0 #fefc4b;
    }

    40% {
      transform: translateY(0.5em);
      text-shadow: 0 -0.0625em 0 #0c2ffb, 0 -0.125em 0 #2cfcfd,
        0 0.0625em 0 #fb203b, 0 0.125em 0 #fefc4b;
    }

    60% {
      transform: translateY(-0.25em);
      text-shadow: 0 0.03125em 0 #0c2ffb, 0 0.0625em 0 #2cfcfd,
        0 -0.03125em 0 #fb203b, 0 -0.0625em 0 #fefc4b;
    }

    80% {
      transform: translateY(0);
      text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
`;

export const h3 = styled.h3`
  align-self: center;
`;
