import React, { useState, useEffect } from 'react';
import { fbFirestore } from "../config/firebase";

const useFbFirestore = (collection) => {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const unsub = fbFirestore.collection(collection)
            .orderBy('created_at', 'desc')
            .onSnapshot((snap) => {
                let retreiveDocuments = [];
                snap.forEach((document) => {
                    retreiveDocuments.push({ id: document.id, ...document.data() })
                })

                setDocuments(retreiveDocuments);
            })

        return () => unsub();
    }, [collection])

    return { documents }
}

export default useFbFirestore;
