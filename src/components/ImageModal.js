import React from 'react';
import { motion } from "framer-motion";

const ImageModal = ({ selectedImage, setSelectedImage }) => {
    const onClickHandler = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImage('')
        }
    }

    return (
        <motion.div
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={onClickHandler}
        >
            <motion.img initial={{ y: "-100vh" }} animate={{ y: 0 }} src={selectedImage} />
        </motion.div>
    )
}

export default ImageModal;
