import avatar from '../../assets/images/avatars/image-juliusomo.png';
import Button from '../button/';
import * as S from './style.js';

export default function Input({ onChange, value }) {
  function handleChange(event) {
    event.preventDefault();
    onChange(event.target[0].value);
  }

  return (
    <S.Form onSubmit={handleChange} id="noter-save-form">
      <img src={avatar} alt="avatar image" />
      <S.TextArea id="noter-text-area" name="textarea" value={value} />
      <Button>Send</Button>
    </S.Form>
  );
}
