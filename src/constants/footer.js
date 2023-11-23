import TwitterSvg from '../assets/images/icons/twitter.svg';
import FacebookSvg from '../assets/images/icons/fb.svg';
import InstagramSvg from '../assets/images/icons/instagram.svg';
import GithubSvg from '../assets/images/icons/github.svg';
import VisaSvg from '../assets/images/icons/visa.svg';
import MastercardSvg from '../assets/images/icons/mastercard.svg';
import PaypalSvg from '../assets/images/icons/paypal.svg';
import ApaySvg from '../assets/images/icons/apay.svg';
import GpaySvg from '../assets/images/icons/gpay.svg';

export const footerItems = [
  {
    title: 'Company',
    items: [
      { name: 'About', link: '#' },
      { name: 'Features', link: '#' },
      { name: 'Works', link: '#' },
      { name: 'Career', link: '#' },
    ],
  },
  {
    title: 'Help',
    items: [
      { name: 'Customer Support', link: '#' },
      { name: 'Deliver Details', link: '#' },
      { name: 'Terms & Conditipons', link: '#' },
      { name: 'Privacy Policy', link: '#' },
    ],
  },
  {
    title: 'Faq',
    items: [
      { name: 'Account', link: '#' },
      { name: 'Manage Deliveries', link: '#' },
      { name: 'Orders', link: '#' },
      { name: 'Payments', link: '#' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { name: 'Free eBooks', link: '#' },
      { name: 'Development Tutorials', link: '#' },
      { name: 'How to...', link: '#' },
      { name: 'Youtube', link: '#' },
    ],
  },
];

export const socialIcons = [
  { image: TwitterSvg, name: 'X' },
  { image: FacebookSvg, name: 'Facebook' },
  { image: InstagramSvg, name: 'Instagram' },
  { image: GithubSvg, name: 'Github' },
];

export const paymentsIcons = [
  { image: VisaSvg, name: 'visa' },
  { image: MastercardSvg, name: 'mastercard' },
  { image: PaypalSvg, name: 'paypal' },
  { image: ApaySvg, name: 'apay' },
  { image: GpaySvg, name: 'gpay' },
];
