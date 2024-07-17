import { uploadPhoto, createUser } from '../utils.js';

export default async function asyncUploadUser() {
  try {
    // Execute in parallel
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return { photo, user };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
