import { useState, useRef } from 'react';

import { COMMENTS } from '../../utilities/consts';

import Comment from '../../components/comment/';
import Input from '../../components/input';

export default function Home() {
  const [comments, setComments] = useState([...COMMENTS]);
  const [isReply, setIsReply] = useState(false);
  const [idReply, setIdReply] = useState('');
  const inputCommentRef = useRef();

  const handleClick = () => {
    inputCommentRef.current.focus();
    setIsReply(true);
  };

  const handleSubmit = (content, createdAt, avatar, username) => {
    if (isReply) {
      handleReply(content, createdAt, avatar, username);
      return;
    }
    handleComment(content, createdAt, avatar, username);
  };

  const handleReply = (content, createdAt, avatar, username) => {
    const updatedComments = comments.map((comment) =>
      comment.id === idReply
        ? {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: 3,
                content: content.value,
                createdAt: createdAt,
                score: 0,
                replyingTo: 'amyrobson',
                user: {
                  avatar: avatar,
                  username: username
                }
              }
            ]
          }
        : comment
    );

    setComments([...updatedComments]);
  };

  const handleComment = (content, createdAt, avatar, username) => {
    const newComment = {
      id: 25,
      content: content.value,
      createdAt: createdAt,
      score: 0,
      user: {
        avatar: avatar,
        username: username
      },
      replies: []
    };

    setComments([...comments, newComment]);
  };

  return (
    <>
      <Comment comments={comments} setNewId={setIdReply} onclick={handleClick} />
      <Input inputRef={inputCommentRef} newComment={handleSubmit} />
    </>
  );
}
