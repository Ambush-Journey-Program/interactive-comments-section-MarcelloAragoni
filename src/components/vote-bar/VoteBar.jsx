import { useState } from 'react';

import MinusIcon from '../../assets/images/icon-minus.svg';
import PlusIcon from '../../assets/images/icon-plus.svg';
import * as S from './style';

export default function VoteBar() {
  const [inputState, setInputState] = useState(0);

  function handleButtonPlusClick() {
    setInputState(inputState + 1);
  }

  function handleButtonMinusClick() {
    setInputState(inputState - 1);
  }

  function handleChangeInput(value) {
    setInputState(Number(value));
  }

  return (
    <>
      <S.VoteBox className="quantity">
        <S.PlusButton onClick={handleButtonPlusClick} icon="plus">
          <S.StyledPlusIcon />
          <svg src={PlusIcon} />
        </S.PlusButton>
        <S.VoteInput
          type="number"
          name="quantity"
          id="quantity"
          placeholder="0"
          value={inputState}
          onChange={handleChangeInput}
        />
        <S.MinusButton onClick={handleButtonMinusClick} icon="minus">
          <S.StyledMinusIcon />
          <svg src={MinusIcon} />
        </S.MinusButton>
      </S.VoteBox>
    </>
  );
}
