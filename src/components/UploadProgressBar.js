import React, { useEffect } from 'react';
import { motion } from "framer-motion";

import useFbStorage from '../hooks/useFbStorage';

const UploadProgressBar = ({ file, setFile, setMessage }) => {
    const { url, progress, error } = useFbStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
            setMessage('');
        }
    }, [url])

    return (
        <motion.div
            className="progress-bar"
            initial={{ width: "0%" }}
            animate={{ width: progress + "%" }}
        ></motion.div>
    )
}

export default UploadProgressBar
