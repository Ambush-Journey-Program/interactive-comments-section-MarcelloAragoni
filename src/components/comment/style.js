import styled, { css } from 'styled-components';

const replyStyle = css`
  width: 40.125rem;
  align-self: flex-end;
  border-left: 1px solid #afafaf;
  padding-top: 0;
`;
export const GeneralWrap = styled.div`
  width: 47.6875rem;
  display: flex;
  flex-direction: column;
`;

export const Wrap = styled.div`
  display: flex;
  padding: 24px 24px 24px 0;

  div {
    padding: 24px;
  }

  ${({ isReply }) => isReply && replyStyle}
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
  line-height: 24px;
`;
