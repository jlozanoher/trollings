import styled from "styled-components";

export const info = styled.div`
  gap: 8;
  font-size: 12px;
  margin: 8px 0;
`;

export const article = styled.article`
  &.uncompleted {
    background: #ffd968;
  }

  &.completed {
    background: #34ff42;
  }

  &.failed {
    background: #9a1414;
  }

  padding: 8px;
  border-radius: 8px;
  width: fit-content;
  filter: drop-shadow(4px 4px 4px #aaaaaa99);
`;
