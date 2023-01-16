import { ReactComponent as DeleteIcon } from '../../assets/images/icon-delete.svg';
import { ReactComponent as EditIcon } from '../../assets/images/icon-edit.svg';
import { ReactComponent as ReplyIcon } from '../../assets/images/icon-reply.svg';

import * as S from './style';

const BUTTON_ICONS = {
  delete: <DeleteIcon />,
  edit: <EditIcon />,
  reply: <ReplyIcon />
};

export default function Button({ icon, children, variant, ...buttonProps }) {
  const buttonIcon = BUTTON_ICONS[icon] || undefined;

  return (
    <S.Button variant={variant} {...buttonProps}>
      {buttonIcon}
      {children}
    </S.Button>
  );
}
