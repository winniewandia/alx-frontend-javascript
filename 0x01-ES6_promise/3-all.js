import { uploadPhoto, createUser } from '../utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const response1 = values[0];
      const response2 = values[1];
      console.log(`${response1.body} ${response2.firstName} ${response2.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
