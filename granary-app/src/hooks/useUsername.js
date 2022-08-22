import {useEffect, useState} from "react";

import {doc, onSnapshot} from 'firebase/firestore';
import {db} from "../firebase/config";

// get the username from the users collection
// for display in sidebar and other pages/components
export const useUsername = (collection, userId) => {
  const [error, setError] = useState(null);  // catch errors
  const [username, setUsername] = useState('')  // username initial state

  // realtime data for user document by current user uid
  useEffect(() => {
    // get doc reference
    const docRef = doc(db, collection, userId);

    // snapshot the docRef to get the user doc and username
    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      if (snapshot.data()) {
        // set username if data exists
        setUsername(snapshot.data().username);
        setError(null); // no error
      } else {
        setError("Something went wrong!");
      }
    }, (err) => {
      setError('Failed to get document');
    })

    return () => unsubscribe()

  }, [collection, userId])

  return { username, error }
};
