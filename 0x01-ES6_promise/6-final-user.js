import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return signUpUser(firstName, lastName)
    .then((data) => {
      uploadPhoto(fileName);
      console.log([{ status: data.status, value: data.value }, { status: 'photo', value: fileName }]);
    })
    .catch((error) => console.log(error.message));
}
