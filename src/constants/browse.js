import Casual from '../assets/images/browse/casual.png';
import Formal from '../assets/images/browse/formal.png';
import Party from '../assets/images/browse/party.png';
import Gym from '../assets/images/browse/gym.png';

export const styleItems = [
  {
    id: 1,
    group: 'row1',
    items: [
      { id: 1, title: 'Casual', image: Casual, link: '/casual' },
      { id: 2, title: 'Formal', image: Formal, link: '/formal' },
    ],
  },
  {
    id: 2,
    group: 'row2',
    items: [
      { id: 1, title: 'Party', image: Party, link: '/party' },
      { id: 2, title: 'Gym', image: Gym, link: '/gym' },
    ],
  },
];
