import { useState } from "react";
import {Auth, db, Storage, timestamp} from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import {useAuthContext} from "./useAuthContext";

/*
  use this hook to handle user
  signups. Re
   */
const useSignup = () => {
  // handle errors during signups
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  // this function calls firebase auth
  // to sign up the user
  const signup = async (email, password, firstName, lastName, username, profileImg) => {
    setError(null);  // error is null before signup call
    setIsPending(true); // user signup is pending

    // execute auth signup call
    try {
      // store signup response in res
      const res = await createUserWithEmailAndPassword(Auth, email, password);

      // check if there is a response and add error if not
      if (!res) {
        setError("Unable to complete Signup request... Contact support team!");
      }

      // update the new user with first and last name
      await updateProfile(res.user, { displayName: `${firstName} ${lastName}` });

      // prepare profile photo to save in storage later
      //create path and get image url
      const imgPath = `profile-images/${res.user.uid}/${profileImg.name}`;
      const imgRef = await ref(Storage, imgPath);
      // upload user profile picture
      await uploadBytes(imgRef, profileImg);
      // get file download url
      const imgUrl = await getDownloadURL(imgRef);

      // add the user to users document
      const userRef = await doc(db, 'users', res.user.uid); // get user uid and document
      await setDoc(userRef, {
        firstName,
        lastName,
        username,
        profileImgURL: imgUrl,
        online: true,
        dateJoined: timestamp.fromDate(new Date)
      });

      // dispatch signup action later
      dispatch({ type: 'LOGIN', payload: res.user })

      // change error and isPending state
      setError(null);
      setIsPending(false);

    } catch (err) {
      // set signup error message
      console.log(err)
      setError(err.message);
      setIsPending(false); // change isPending state
    }
  };

  return { error, setError, isPending, signup };

};

export default useSignup;
