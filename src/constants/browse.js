import Casual from '../assets/images/browse/casual.png';
import Formal from '../assets/images/browse/formal.png';
import Party from '../assets/images/browse/party.png';
import Gym from '../assets/images/browse/gym.png';

export const styleItems = [
  {
    group: 'row1',
    items: [
      { title: 'Casual', image: Casual, link: '/casual' },
      { title: 'Formal', image: Formal, link: '/formal' },
    ],
  },
  {
    group: 'row2',
    items: [
      { title: 'Party', image: Party, link: '/party' },
      { title: 'Gym', image: Gym, link: '/gym' },
    ],
  },
];
