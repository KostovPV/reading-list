
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState} from "react";
import { auth } from "../firebase/config";

export const useSignup = () =>{
    const [error, setError] = useState(null);

    const signup = (email, password) => {
        setError(null);

        createUserWithEmailAndPassword(auth, email, password)
            .then((res)=> {
                console.log('user signed up');
            })
            .catch((err)=> {
                setError(err.message)
            })
    }

    return { error, signup}
}