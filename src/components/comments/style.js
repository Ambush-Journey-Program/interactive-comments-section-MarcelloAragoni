import styled from 'styled-components';

export const Wrap = styled.div`
  width: 47.6875rem;
  display: flex;

  div {
    padding: 24px;
  }
`;

export const SectionWrap = styled.div`
  width: 38.625rem;
  display: flex;
  flex-direction: column;
  padding: 24px 24px 24px 0 !important;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;

  * + * {
    margin-left: 1rem;
  }

  button {
    height: 2rem;
  }
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
`;

export const User = styled.p`
  flex: 1;
  font-weight: bold;
`;

export const Date = styled.p`
  flex: 5;
`;

export const Comment = styled.p`
  margin-top: 1rem;
`;
