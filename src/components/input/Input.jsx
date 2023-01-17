import juliusomo from '../../assets/images/avatars/image-juliusomo.png';
import Button from '../button/';
import * as S from './style.js';

export default function Input({ value, newComment, inputRef }) {
  function handleChange(event) {
    event.preventDefault();
    const content = event.target[0];
    const createdAt = '2 hours ago';
    const userName = 'juliusomo';
    const avatar = juliusomo;

    newComment(content, createdAt, avatar, userName);
  }

  return (
    <S.Form onSubmit={handleChange} id="noter-save-form">
      <img src={juliusomo} alt="avatar image" />
      <S.TextArea ref={inputRef} id="noter-text-area" name="textarea" value={value} />
      <Button variant="send">Send</Button>
    </S.Form>
  );
}
