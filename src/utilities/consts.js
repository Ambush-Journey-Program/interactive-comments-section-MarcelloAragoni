import amyrobson from '../assets/images/avatars/image-amyrobson.png';
import maxblagun from '../assets/images/avatars/image-maxblagun.png';
import ramsesmiron from '../assets/images/avatars/image-ramsesmiron.png';

export const COMMENTS = [
  {
    id: 1,
    content:
      'Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.',
    createdAt: '1 month ago',
    score: 0,
    user: {
      avatar: amyrobson,
      username: 'amyrobson'
    },
    replies: [
      {
        id: 2,
        content:
          "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        createdAt: '1 week ago',
        score: 0,
        replyingTo: 'amyrobson',
        user: {
          avatar: maxblagun,
          username: 'maxblagun'
        }
      }
    ]
  },

  {
    id: 4,
    content:
      'Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.',
    createdAt: '1 month ago',
    score: 0,
    user: {
      avatar: ramsesmiron,
      username: 'ramsesmiron'
    },
    replies: []
  }
];
