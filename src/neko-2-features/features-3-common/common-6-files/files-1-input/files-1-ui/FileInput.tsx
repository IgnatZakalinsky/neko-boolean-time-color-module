import React, {ChangeEvent, useRef, useState} from 'react';
import {baseURL} from "../../../../../base-url";
import axios from 'axios';
import Video from "./Video";

interface IFileInputProps {

}

const FileInput: React.FC<IFileInputProps> = (
    {}
) => {
    const inRef = useRef<HTMLInputElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);


    const [file, setFile] = useState();
    const [fileURL, setFileURL] = useState();
    const [file64, setFile64] = useState();
    const [fileData, setFileData] = useState();

    const upload = (e: ChangeEvent<HTMLInputElement>) => {
        // e.preventDefault();
        const reader = new FileReader();
        const formData = new FormData();

        const newFile = e.target.files && e.target.files[0];
        reader.onloadend = () => {
            setFile(newFile);
            setFileURL(window.URL.createObjectURL(newFile));
            newFile && formData.append('myFile', newFile, newFile.name);

            // const config = {
            //     headers: { 'content-type': 'multipart/form-data' }
            // }
            // setTimeout(() =>
            //     // axios.post('http://localhost:7542' + '/file', {file64: {f: reader.result}}), 2000);
            //     axios.post('http://localhost:7542' + '/file', formData), 2000);

            // console.log(newFile, formData.get('myFile'), reader.result);
            // setFile64(reader.result);
            setFileData(formData.get('myFile'))
        };
        newFile && reader.readAsDataURL(newFile);
    };

    const returnFileSize = (number: number) => {
        if (number < 1024) {
            return number + 'bytes';
        } else if (number > 1024 && number < 1048576) {
            return (number / 1024).toFixed(2) + 'KB';
        } else if (number > 1048576) {
            return (number / 1048576).toFixed(2) + 'MB';
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            FileInput

            {/*<input type="file" accept=".jpg, .jpeg, .png" multiple>*/}

            <label
                htmlFor={'infi'}
                onClick={e => {if (e.target !== e.currentTarget) e.currentTarget.click()}}
                style={{position: 'relative'}}
            >
                <button>add</button>
                <input
                    id={'infi'}
                    type={'file'}
                    style={{display: 'none'}}
                    onChange={e => upload(e)}
                />
            </label>


            <img src={fileURL} alt={'file'} width={'300px'}/>

            <div>name: {file && file.name}</div>
            <div>lastModified: {file && file.lastModified}</div>
            <div>size: {file && returnFileSize(file.size)}</div>
            <div>type: {file && file.type}</div>

            <input
                ref={inRef}
                type={'file'}
                style={{display: 'none'}}
                onChange={e => upload(e)}
            />
            <button onClick={() => inRef && inRef.current && inRef.current.click()}>add</button>
            <Video fileURL={fileURL}/>
        </div>
    );
};

export default FileInput;
