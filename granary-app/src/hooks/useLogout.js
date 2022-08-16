import {signOut} from 'firebase/auth';
import {Auth, db} from "../firebase/config";
import {useState} from "react";
import {useAuthContext} from "./useAuthContext";
import {doc, updateDoc} from "firebase/firestore";

const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const { dispatch, user } = useAuthContext();

  const logout = async () => {
    setIsPending(true); // change is pending state
    setError(null);

    try {
      const { uid } = user;
      // logout user and update online status
      await signOut(Auth);

      // update user online status
      const userRef = await doc(db, 'users', uid);  // get user references
      await updateDoc(userRef, {
        online: false
      });

      // dispatch logout action
      dispatch({ type: 'LOGOUT' });

      setError(null);
      setIsPending(false); // reset isPending to false state

    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  }

  return { error, isPending, logout};
};

export default useLogout;
