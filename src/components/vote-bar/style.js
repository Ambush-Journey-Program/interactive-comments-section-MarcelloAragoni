import styled from 'styled-components';

import { ReactComponent as MinusIcon } from '../../assets/images/icon-minus.svg';
import { ReactComponent as PlusIcon } from '../../assets/images/icon-plus.svg';

export const VoteBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 2rem;
`;

export const MinusButton = styled.button`
  height: 2rem;
  border-style: unset;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #f5f6fa;
  cursor: pointer;
`;

export const PlusButton = styled.button`
  height: 2rem;
  border-style: unset;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #f5f6fa;
  cursor: pointer;
`;

export const VoteInput = styled.input`
  color: #5357b6;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  background-color: #f5f6fa;
  border-style: unset;
`;

export const StyledMinusIcon = styled(MinusIcon)`
  padding-top: 0.8rem;
  border: none;
  stroke: #c5c6ef;
`;

export const StyledPlusIcon = styled(PlusIcon)`
  padding-top: 0.8rem;
  border: none;
  stroke: #c5c6ef;
`;
