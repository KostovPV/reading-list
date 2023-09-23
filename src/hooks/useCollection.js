
import {useState, useEffect} from 'react';
import { db} from '../firebase/config';

import {collection, onSnapshot} from 'firebase/firestore'

export const useCollection = (c)=> {
    const [ documents, setDocuments] = useState(null);

    useEffect(()=> {
        let ref = collection(db, c);

        const unsub = onSnapshot(ref, (snapshot)=> {
            let result = [];
            snapshot.docs.forEach(doc=> {
                result.push({...doc.data(), id: doc.id})
            })
            setDocuments(result);
        })

        return ()=> unsub()
    }, [c])

    return { documents}
}
