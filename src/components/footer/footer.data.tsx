import Chat from '../../assets/widget/chat.svg';
import Community from '../../assets/widget/community.svg';
import Github from '../../assets/widget/github.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: 'Community',
      title: 'Join the Community',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Chat',
      title: 'Chat Communication',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
    {
      id: 3,
      iconSrc: Github,
      altText: 'Github',
      title: 'Github Access',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
  ],
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: 'https://t.me/remitt_en',
      label: 'Telegram',
    },
    {
      path: 'https://www.facebook.com/Remitt-104461518999781',
      label: 'Facebook',
    },
    {
      path: 'https://twitter.com/remitt_bot',
      label: 'Twitter',
    },
    {
      path: 'https://github.com/remitt-repos',
      label: 'Github',
    },
  ],
};
