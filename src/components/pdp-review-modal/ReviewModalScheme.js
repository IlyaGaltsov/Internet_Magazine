// eslint-disable-next-line import/no-unresolved
import { string, object } from 'yup';

export const reviewModalScheme = object({
  name: string().min(2, 'Enter valid value').max(40, 'Too long').required('Required'),
  review: string()
    .min(30, 'Too short. Your review must contains at least 30 characters.')
    .max(300, 'Text should not exceed more than 300 characters.')
    .required('Required'),
});
