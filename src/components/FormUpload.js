import React, { useState } from 'react';
import UploadProgressBar from './UploadProgressBar';

const FormUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState({});

    const allowedTypes = ['image/jpeg', 'image/png'];

    const onChangeHandler = (e) => {
        const selected = e.target.files[0];

        if (selected && allowedTypes.includes(selected.type)) {
            setFile(selected);
            setMessage({ type: "default", text: selected.name });
            return;
        }

        setFile(null);
        setMessage({ type: "error", text: 'Please choose allowed file type png / jpeg' });
        return;
    }

    return (
        <form>
            <label>
                <input type="file" onChange={onChangeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                {message && <div className={`message ${message.type}`}>{message.text}</div>}
                {file && <UploadProgressBar file={file} setFile={setFile} setMessage={setMessage} />}
            </div>
        </form>
    )
}

export default FormUpload
