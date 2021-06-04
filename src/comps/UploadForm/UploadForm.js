import React, { useState } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const types = ['image/png', 'image/jpeg']

    const handleChange = (e) => {
        let selectFile = e.target.files[0];
        if(selectFile && types.includes(selectFile.type)) {
            setFile(selectFile)
            setError('')
        } else {
            setFile(null)
            setError('Please try to upload jpeg or png formatted image.')
        }
    }
    return (
        <form>
            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div> }
                {file && <div>{file}</div> }
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    );
};

export default UploadForm;