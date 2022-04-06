import React from 'react';
import { motion } from "framer-motion";
import useFbFirestore from '../hooks/useFbFirestore';

const ImageGrid = ({ setSelectedImage }) => {
    const { documents } = useFbFirestore('images');

    return (
        <div className="img-grid">
            {documents && documents.map((document) =>
                (<motion.div
                    className="img-wrap"
                    layout
                    whileHover={{ opacity: 1 }}
                    key={document.id}
                    onClick={() => setSelectedImage(document.url)}
                >
                    <motion.img
                        src={document.url}
                        alt="uploaded pic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />
                </motion.div>)
            )}
        </div>
    )
}

export default ImageGrid;
