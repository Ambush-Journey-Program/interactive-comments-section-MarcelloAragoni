import { useState } from 'react';

import MinusIcon from '../../assets/images/icon-minus.svg';
import PlusIcon from '../../assets/images/icon-plus.svg';
import * as S from './style';

export default function VoteBar({ type, onChange }) {
  const [upVotes, setUpVotes] = useState(0);

  function handleButtonPlusClick() {
    setUpVotes(upVotes + 1);
  }

  function handleButtonMinusClick() {
    setUpVotes(upVotes - 1);
  }

  function handleChangeInput(value) {
    setUpVotes(Number(value));
    onChange();
  }

  return (
    <>
      <S.VoteBox>
        <S.PlusButton onClick={handleButtonPlusClick}>
          <S.StyledPlusIcon />
          <svg src={PlusIcon} />
        </S.PlusButton>
        <S.VoteInput type={type} placeholder="0" value={upVotes} onChange={handleChangeInput} />
        <S.MinusButton onClick={handleButtonMinusClick}>
          <S.StyledMinusIcon />
          <svg src={MinusIcon} />
        </S.MinusButton>
      </S.VoteBox>
    </>
  );
}
