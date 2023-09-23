import { initializeApp} from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA4iHTSdfP_AVwa-Pp3PfPqnq3zz49g5uI",
    authDomain: "book-list-53735.firebaseapp.com",
    projectId: "book-list-53735",
    storageBucket: "book-list-53735.appspot.com",
    messagingSenderId: "303613184669",
    appId: "1:303613184669:web:4cf8abbcb4dd6690656274"
  };


  initializeApp(firebaseConfig);

  const db = getFirestore();

  const auth = getAuth();

  export { db, auth}
   