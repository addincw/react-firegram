import React, { useState, useEffect } from "react";
import { fbStorage, fbFirestore, serverTimestamp } from "../config/firebase";

const useFbStorage = (file) => {
    const [url, setUrl] = useState('');
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState('');

    useEffect(() => {
        const storageRef = fbStorage.ref(file.name);
        const imageCollection = fbFirestore.collection('images');

        storageRef.put(file)
            .on(
                'state_changed',
                (snap) => {
                    const percentage = Math.floor(snap.bytesTransferred / snap.totalBytes * 100);
                    setProgress(percentage);
                },
                (error) => {
                    setError(error);
                },
                async () => {
                    const url = await storageRef.getDownloadURL();

                    imageCollection.add({ url, created_at: serverTimestamp() });

                    setUrl(url);
                }
            );

    }, [file]);

    return { url, progress, error };
}

export default useFbStorage;
