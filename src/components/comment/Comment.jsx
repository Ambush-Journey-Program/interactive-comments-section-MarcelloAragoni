import VoteBar from '../vote-bar';
import Button from '../button';
import * as S from './style';

const ICONS = {
  delete: 'delete',
  reply: 'reply'
};

const VARIANTS = {
  ghost: 'ghost',
  delete: 'delete'
};

export default function Comment({ isReply = 'reply', isUser, comments, onclick, setNewId }) {
  const icon = isUser ? ICONS.delete : ICONS.reply;
  const variant = isUser ? VARIANTS.delete : VARIANTS.ghost;

  function handleNewId(id) {
    setNewId(id);
    onclick();
  }

  return (
    <>
      {comments.map((comment) => (
        <S.GeneralWrap key={comment.id}>
          <S.Wrap>
            <VoteBar />
            <S.SectionWrap>
              <S.Section>
                <S.Avatar src={comment.user.avatar} alt="avatar image" />
                <S.User>{comment.user.username}</S.User>
                <S.Date>{comment.createdAt}</S.Date>
                <Button icon={icon} variant={variant} onClick={() => handleNewId(comment.id)}>
                  {icon}
                </Button>
              </S.Section>
              <S.Comment>{comment.content}</S.Comment>
            </S.SectionWrap>
          </S.Wrap>
          {comment.replies.map((reply) => (
            <S.Wrap isReply={isReply} key={reply.id}>
              <VoteBar />
              <S.SectionWrap>
                <S.Section>
                  <S.Avatar src={reply.user.avatar} alt="avatar image" />
                  <S.User>{reply.user.username}</S.User>
                  <S.Date>{reply.createdAt}</S.Date>
                  <Button icon={icon} variant={variant} onClick={onclick}>
                    {icon}
                  </Button>
                </S.Section>
                <S.Comment>{reply.content}</S.Comment>
              </S.SectionWrap>
            </S.Wrap>
          ))}
        </S.GeneralWrap>
      ))}
    </>
  );
}
