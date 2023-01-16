import avatar from '../../assets/images/avatars/image-amyrobson.png';

import VoteBar from '../vote-bar/';
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

export default function Comments({ isReply, isUser = 'true' }) {
  const icon = isUser ? ICONS.delete : ICONS.reply;
  const variant = isUser ? VARIANTS.delete : VARIANTS.ghost;

  return (
    <S.Wrap isReply={isReply} isUser={isUser}>
      <VoteBar />
      <S.SectionWrap>
        <S.Section>
          <S.Avatar src={avatar} alt="avatar image" />
          <S.User>amyrobson</S.User>
          <S.Date>1 month ago</S.Date>
          <Button icon={icon} variant={variant}>
            {variant}
          </Button>
        </S.Section>
        <S.comment>
          Impressive! Though it seems the drag feature could be improved. But overall it looks
          incredible. You’ve nailed the design and the responsiveness at various breakpoints works
          really well.
        </S.comment>
      </S.SectionWrap>
    </S.Wrap>
  );
}
