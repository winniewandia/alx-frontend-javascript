import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
  ])
  .then((results) => {
    return results.map((result, index) => {
      if (index === 0) {
        return { status: result.status, value: result.value };
      } else {
        return { status: 'photo', value: result.status === 'rejected' ? result.reason : fileName };
      }
    });
  });
}
