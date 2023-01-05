import * as S from './style';

export default function Button({ children, ...buttonProps }) {
  return <S.SendButton {...buttonProps}>{children}</S.SendButton>;
}
