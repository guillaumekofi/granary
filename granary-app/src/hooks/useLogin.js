// react components import
import {useState} from "react";

// firebase imports
import {signInWithEmailAndPassword} from 'firebase/auth'
import {Auth, db} from "../firebase/config";
import {doc, updateDoc} from "firebase/firestore";


const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const login = async (email, password) => {
    setError(null) // no error before request
    setIsPending(true)  // request is pending

    try {
      // send login request
      const res = await signInWithEmailAndPassword(Auth, email, password)

      // check if response is a success
      if (!res) {
        setError("sorry, something went wrong... Contact support please!")
      }

      // update user online status
      const userRef = await doc(db, 'users', res.user.uid);  // get user references
      await updateDoc(userRef, {
        online: true
      });

      // dispatch actions

      // reset all states
      setError(null);
      setIsPending(false);

    } catch(err) {
      setError(err.message);
      setIsPending(false);
    }

  }



  return {error, isPending, login}

};

export default useLogin;